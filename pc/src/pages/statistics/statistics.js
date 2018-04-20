import React from 'react';
import { Card, Row, Col, DatePicker, Table, Form, Button } from 'antd';
const { RangePicker } = DatePicker;
import styles from './statistics.css';
import moment from 'moment';
import request from '../../helpers/request';
import TableModal from '../../components/table_modal/';
import Charts from '../../components/charts';
class Statistics extends React.Component{
    state = {
        areasList: [],
        //unitsList: [],
        entitiesList: [],
        statisticsDataSource: [],
        statisticsColumns: [],
        //unitsColumns:[],
        //unitsDataSource: [],
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
    };
    ranges = {
      "本月": [moment().startOf('month'), moment()],
      "上月": [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
      "本季度": [moment().startOf('quarter'), moment()],
      "半年": [moment().subtract(6, 'month'), moment()],
      "一年": [moment().subtract(12, 'month'), moment()]
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        const { date_begin, date_end,statisticsDataSource,statisticsColumns,
          // unitsDataSource,
          // unitsColumns,unitsList, unitChart
          entitiesColumns, entitiesDataSource, rowKeys,modalTitle, visible,chartData, chartFields , chartType,
          entityChartDataSource,
          entityChartColumns
        } = this.state;
        let Title = () => (
            <header>
                <h3 className={styles['table-title']}>数据统计报表</h3>
                <div className={styles["btn-group"]}>
                    <Button>导出数据</Button>
                    <Button>打印</Button>
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
                        <Table size='small' rowKey='date' pagination={statisticsDataSource.length > 20 ? { pageSize: 20} : false} dataSource={statisticsDataSource} columns={statisticsColumns} title={() => <Title/>}/>
                    </Col>
                    <Col span={12} style={{paddingTop: '39px'}}>
                        {/*<Radio.Group value={chartType} onChange={this.changeChartType}>*/}
                            {/*<Radio value='0'>片区完成情况</Radio>*/}
                            {/*<Radio value='1'>市场主体类型</Radio>*/}
                        {/*</Radio.Group>*/}
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
                 // area.units.forEach(unit => {
                 //     if(unitsList.indexOf(unit.unit) === -1){
                 //         unitsList.push(unit.unit);
                 //     }
                 // });
                 area.industries.forEach(industry => {
                   industry.total = parseInt(industry.total);
                     if(entitiesList.indexOf(industry.industry) === -1){
                         entitiesList.push(industry.industry);
                     }
                 })
             })
        });
        //unitsList.sort();
        this.setState({
            areasList,
          // unitsList,
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
            render: (text, record) => <a onClick={() => this.viewDailyData(record)}>查看</a>
        }]);
        let dataSource = data.map(daily => {
            //初始化dataSource
            daily.total = areasList.map(() => {
                return '-';
            });
            daily.areas.forEach(area => {
                //let index = areasList.indexOf(area.area);
                // daily.total[index] = area.units.reduce((sum, unit) => {
                //     let s = sum + unit.total;
                //     return s === 0 ? '-' : s;
                // }, 0);
              let index = areasList.indexOf(area.area);
              daily.total[index] = area.industries.reduce((sum, unit) => {
                  let s = sum + parseInt(unit.total);
                  return s;
              }, 0);
            });
            return daily;
        });
        this.setState({
            statisticsDataSource: dataSource,
            statisticsColumns: columns
        })
    };
    //整理数据成按照分队和市场主体类型统计
    toUnitsList = (data) => {
        let {
          areasList,
          // unitsList,
          entitiesList  } = this.state;
        let rowKeys = [
          // 'unit',
          'industry'];
        // let unitsColumns = [{
        //     title: '分队',
        //     dataIndex: 'unit'
        // }].concat(areasList.map((area, index) => {
        //     return {
        //         title: area,
        //         render: (text, record) => <span>{record.total[index]}</span>
        //     }
        // }));
        let entitiesColumns = [{
            title: '市场主体类型',
            dataIndex: 'industry'
        }].concat(areasList.map((area, index) => {
            return {
                title: area,
                render: (text, record) => <span>{record.total[index]  === 0 ? '-' : record.total[index]}</span>
            }
        }));
        // let unitsDataSource = unitsList.map(unit => {
        //     return {
        //         unit: unit,
        //         total: areasList.map(() => '-')
        //     }
        // });
        let entitiesDataSource = entitiesList.map(entity => {
            return {
                industry: entity,
                total: areasList.map(() => '-')
            }
        });
        data.areas.map(area => {
            // area.units.map(unit => {
            //     let areaIndex = areasList.indexOf(area.area);
            //     let unitIndex = unitsList.indexOf(unit.unit);
            //     unitsDataSource[unitIndex].total[areaIndex] = unit.total;
            // });
            area.industries.map(industry => {
                let areaIndex = areasList.indexOf(area.area);
                let industryIndex = entitiesList.indexOf(industry.industry);
                entitiesDataSource[industryIndex].total[areaIndex] = parseInt(industry.total);
            });
        });
        return {
            //unitsColumns,
            //unitsDataSource,
            entitiesColumns,
            entitiesDataSource,
            rowKeys
        }
    };
    //点击查看时，查看当天小分队和市场主体类型表格
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
          /*, unitsList*/
          entitiesList,
        } = this.state;
        // let unitChart = areasList.map(area => {
        //     let item = {
        //         label: area
        //     };
        //     unitsList.forEach(unit => {
        //         item[unit] = 0;
        //     });
        //     return item;
        // });
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
                        // area.units.forEach(unit => {
                        //     a[unit.unit] = a[unit.unit] + unit.total;
                        // });
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
              //unitChart,
              entityChart
            ],
            chartFields: [
              // unitsList,
              entitiesList
            ],
          entityChartDataSource,
          entityChartColumns
        })
    };
    // changeChartType = (e) => {
    //     let value = e.target.value;
    //     this.setState({
    //         chartType: value
    //     })
    // };
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
    }
}
let FormStatistics = Form.create()(Statistics);
export default FormStatistics;