import React from 'react';
import { Card, Row, Col, DatePicker, Table, Form, Button } from 'antd';
const { RangePicker } = DatePicker;
import styles from './statistics.css';
import request from '../../helpers/request';
import TableModal from '../../components/table_modal/';
import Charts from '../../components/charts';
class Statistics extends React.Component{
    state = {
        areasList: [],
        entitiesList: [],
        statisticsDataSource: [],
        statisticsColumns: [],
        entitiesColumns: [],
        entitiesDataSource: [],
        rowKeys: [],
        modalTitle: '',
        visible: false,
        chartData: [],
        chartFields: [],
        chartColumns: [],
        chartType: '0',
      entityChartDataSource:[],
      entityChartColumns:[],
        date_begin: moment().startOf('month'),
        date_end: moment(),
      statisticsFooter: [],
      dataWithFoot:[]
    };
    pageSize = 20;
    ranges = {
      "本月": [moment().startOf('month'), moment()],
      "上月": [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
      "本季度": [moment().startOf('quarter'), moment()],
      "半年": [moment().subtract(6, 'month'), moment()],
      "一年": [moment().subtract(12, 'month'), moment()]
    };
    xlsx = {};
    render(){
        const { getFieldDecorator } = this.props.form;
        const { date_begin, date_end,statisticsColumns,
          entitiesColumns, entitiesDataSource, rowKeys,modalTitle, visible,chartData, chartFields , chartType,
          entityChartDataSource,
          entityChartColumns,dataWithFoot
        } = this.state;
        let Title = () => (
            <header>
                <h3 className={styles['table-title']}>数据统计报表</h3>
                <div className={styles["btn-group"]}>
                    <Button onClick={this.exportExcel}>导出数据</Button>
                </div>
            </header>
        );
        return (
            <Card className='card'>
                <TableModal title={modalTitle} dataSources={[entitiesDataSource]} columns={[entitiesColumns]} rowKeys={rowKeys} visible={visible} setVisible={(bool) => this.setVisible(bool)}/>
                <Row>
                    <Col span={12}>
                        <Form layout='inline'>
                            <Form.Item label='选择时间段'>
                                {getFieldDecorator('date',{
                                  initialValue: [date_begin, date_end]
                                })(
                                    <RangePicker
                                      ranges={this.ranges}
                                      allowClear={false}/>
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type='primary'
                                    htmlType='button'
                                    onClick={this.getStatisticsList}
                                >查看</Button>
                            </Form.Item>
                        </Form>
                        <Table size='small' rowKey='date'
                               pagination={dataWithFoot.length > this.pageSize ? { pageSize: this.pageSize } : false}
                               dataSource={dataWithFoot}
                               columns={statisticsColumns}
                               title={() => <Title/>}/>
                    </Col>
                    <Col span={12} style={{paddingTop: '39px'}}>
                        <h3 style={{textAlign: 'center'}}>{date_begin.format('YYYY年MM月DD日') + ' 至 ' + date_end.format('YYYY年MM月DD日')}</h3>
                      <Charts data={chartData[chartType]} fields={chartFields[chartType]}/>
                      <Table size='small' rowKey='label' bordered={false} dataSource={entityChartDataSource} columns={entityChartColumns} pagination={false}/>
                    </Col>
                </Row>
            </Card>
        )
    }
    componentDidMount(){
        this.getStatisticsList();
        import('xlsx').then(r => this.xlsx = r);
    }
    transData = (res) => {
        let { data } = res;
        //从数据中找出所有的地区，分队，市场主体类型
        let areasList = [],
          // unitsList = [],
          entitiesList = [];
        data.forEach(daily => {
             daily.areas.forEach(area => {
                 if(areasList.indexOf(area.area) === -1){
                     areasList.push(area.area);
                 }
                 area.industries.forEach(industry => {
                   industry.total = parseInt(industry.total);
                     if(entitiesList.indexOf(industry.industry) === -1){
                         entitiesList.push(industry.industry);
                     }
                 })
             })
        });

        this.setState({
            areasList,
          entitiesList
        }, () => {
            this.toStatisticsList(data);
            this.toChartData(data);
        })
    };
    //整理数据成显示数据统计报表
    toStatisticsList = (data) => {
        let { areasList } = this.state;
        let columns = [{
            title: '日期',
            dataIndex: 'date'
        }].concat(areasList.map((area, index) => {
            return {
                title: area,
                render: (text, record) => <span>{record.total[index] === 0 ? '-' : record.total[index]}</span>
            }
        })).concat([{
            title: '操作',
            render: (text, record) => record.hide === true ? null : (<a onClick={() => this.viewDailyData(record)}>查看</a>)
        }]);
        let stat = [];
        let dataSource = data.map(daily => {
            //初始化dataSource
            daily.total = areasList.map(() => {
                return '-';
            });
            daily.areas.forEach(area => {
              let index = areasList.indexOf(area.area);
              daily.total[index] = area.industries.reduce((sum, unit) => {
                  let s = sum + parseInt(unit.total);
                  return s;
              }, 0);
              if(stat[index]){
                stat[index] += daily.total[index];
              }else{
                stat[index] = daily.total[index];
              }
            });
            return daily;
        });
        //添加表脚
        let len = dataSource.length;
        let pages = Math.ceil(len/ this.pageSize);
        let dataWithFoot = [];
        let pushStat = {
          date: '合计',
          total: stat,
          hide: true
        };
        for(let i = 0; i < pages; i++){
          let start = i * this.pageSize - 1;
          let end = (i+1) * this.pageSize - 1;
          start = start < 0 ? 0 : start ;
          let tempArr = dataSource.slice(start, end);
          tempArr.push(pushStat);
          dataWithFoot = dataWithFoot.concat(tempArr);
        }
        this.setState({
            statisticsDataSource: dataSource,
            statisticsColumns: columns,
            statisticsFooter: stat,
          dataWithFoot: dataWithFoot
        })
    };
    //整理数据成按照分队和市场主体类型统计
    toUnitsList = (data) => {
        let {
          areasList,
          entitiesList  } = this.state;
        let rowKeys = ['industry'];
        let entitiesColumns = [{
            title: '市场主体类型',
            dataIndex: 'industry'
        }].concat(areasList.map((area, index) => {
            return {
                title: area,
                render: (text, record) => <span>{record.total[index]  === 0 ? '-' : record.total[index]}</span>
            }
        }));
        let entitiesDataSource = entitiesList.map(entity => {
            return {
                industry: entity,
                total: areasList.map(() => '-')
            }
        });
        data.areas.map(area => {
            area.industries.map(industry => {
                let areaIndex = areasList.indexOf(area.area);
                let industryIndex = entitiesList.indexOf(industry.industry);
                entitiesDataSource[industryIndex].total[areaIndex] = parseInt(industry.total);
            });
        });
        return {
            entitiesColumns,
            entitiesDataSource,
            rowKeys
        }
    };
    //点击查看时，查看当天市场主体类型表格
    viewDailyData = (data) => {
        let  ret = this.toUnitsList(data);
        this.setState({
            modalTitle: data.date,
            visible: true,
            ...ret
        });
    };
    //整理数据生成按照分队和市场主体的显示chart的数据
    toChartData = (data) => {
        let {
          areasList,
          entitiesList,
        } = this.state;
      let entityChart = [];
      let entityChartColumns = [{
        title: '',
        dataIndex: 'label'
      }].concat(areasList.map(area => {
        let item = {
          label: area
        };
        entitiesList.forEach(entity => {
          item[entity] = 0;
        });
        entityChart.push(item);
        return {
          title: area,
          dataIndex: area,
          render: (text) => <span>{text === 0 ? '-' : text}</span>
        }
      }));
        data.forEach(daily => {
            daily.areas.map(area => {
              entityChart.map((a, i) => {
                    if(a.label === area.area){
                        area.industries.forEach(industry => {
                            entityChart[i][industry.industry] = entityChart[i][industry.industry] + parseInt(industry.total);
                        })
                    }
                });
            })
        });
      let entityChartDataSource = entitiesList.map(entity => {
        let ret = {};
        entityChart.map(chart => {
          ret.label = entity;
          ret[chart.label] = chart[entity];
        });
        return ret;
      });
        this.setState({
            chartColumns:  [
              areasList
            ],
            chartData: [
              entityChart
            ],
            chartFields: [
              entitiesList
            ],
          entityChartDataSource,
          entityChartColumns
        })
    };
    setVisible = (bool) => {
        this.setState({
            visible: bool
        })
    };
    getStatisticsList = () => {
        let { date } = this.props.form.getFieldsValue();
        let date_begin = date[0].format('YYYY年M月DD日');
        let date_end = date[1].format('YYYY年M月DD日');
        request({
          url: 'api/web_statistic',
          data:{
            date_begin,
            date_end
          },
          success: (res) => {
            let [ begin, end ] = date;
            let change = moment(end);
            let data = [];
            for(;;){
              if(begin.isAfter(change.format('YYYY-MM-DD'))){
                break;
              }
              let dailyData = {
                date: change.format('YYYY年M月DD日'),
                areas: []
              };
              data.push(dailyData);
              change.subtract(1, 'd');
            }
            res.data.forEach(d => {
                data.forEach(da => {
                  if(d.date === da.date){
                    da.areas = d.areas;
                  }
                })
            });
            this.setState({
              date_begin: date[0],
              date_end: date[1]
            });
            this.transData({ data });
          }
        })
    };
    exportExcel = () => {
      let xlsx = this.xlsx;
      let { statisticsColumns, entityChartColumns, statisticsDataSource, entityChartDataSource } = this.state;
      let dateCol = statisticsColumns.map(stat => stat.title);
      let entityCol = entityChartColumns.map(stat => stat.title);
      dateCol.splice(-1, 1);
      let dateData = statisticsDataSource.map(stat => {
        return [stat.date].concat(stat.total);
      });
      let entityData = entityChartDataSource.map(stat => {
        let ret = [];
        entityCol.map(c => {
          if(!c){
            ret.unshift(stat.label);
          }else{
            ret.push(stat[c]);
          }
        });
        return ret;
      });
      const dateD = xlsx.utils.aoa_to_sheet([dateCol].concat(dateData));
      const entityD = xlsx.utils.aoa_to_sheet([entityCol].concat(entityData));
      const wb = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(wb, dateD, "按日期");
      xlsx.utils.book_append_sheet(wb, entityD, "按市场主体");
      xlsx.writeFile(wb, "申报审核报表.xlsx")

    }
}
let FormStatistics = Form.create()(Statistics);
export default FormStatistics;