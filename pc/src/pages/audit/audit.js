import React from 'react';
import { Card, Tabs, notification } from 'antd';
const { TabPane } = Tabs;
import AuditTable from '../../components/audit_table';
import request from "../../helpers/request";
class Audit extends React.Component{
  state = {
    table: [],
    state: 0,
    loading: false
  };
    render(){
      const { table, loading } = this.state;
        return (
            <Card className='card'>
                <Tabs onTabClick={this.getReport}>
                    <TabPane tab='待审核列表' key='0'>
                        <AuditTable loading={loading} table={table} state={0} pass={this.passReport} fail={this.failReport}/>
                    </TabPane>
                    <TabPane tab='审核未通过列表' key='1'>
                        <AuditTable loading={loading} table={table} state={1}/>
                    </TabPane>
                    <TabPane tab='审核通过列表' key='2'>
                        <AuditTable loading={loading} table={table} state={2}/>
                    </TabPane>
                </Tabs>
            </Card>
        )
    }
    componentDidMount(){
        this.getReport(this.state.state);
    }
    getReport = (state) => {
        this.setState({
          state: state,
          loading: true
        });
        request({
          url: '/api/web_get_report_list',
          data: {
            state: state
          },
          success: ({table}) => {
            this.setState({
              table: table,
              loading: false
            })
          }
        })
    };
    passReport = (id) => {
        request({
            url: 'api/web_update_report',
            data: {
                id: id,
                state: 2,
                msg: null
            },
            success: () => {
                this.getReport();
                notification.success({
                    message: '审核通过'
                });
            },
            fail: ({msg}) => {
                notification.error({
                    message: '审核失败',
                    description: msg
                });
            }
        })
    };
    failReport = ({id, msg}, fn) => {
        request({
            url: 'api/web_update_report',
            data: {
                id: id,
                state: 1,
                msg: msg
            },
            success: () => {
                notification.success({
                    message: '完成审核，审核状态为不通过'
                });
                fn({
                  isRemarking: false
                });
            },
            fail: () => {
                fn({
                  isRemarking: false
                });
            }
        })
    };
}
export default Audit;