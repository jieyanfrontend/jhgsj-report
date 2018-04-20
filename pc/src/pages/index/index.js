import React from 'react';
import history from '../../history';
import { Card, List } from 'antd';
import styles from './index.css';
import request from '../../helpers/request';
class Index extends React.Component{
  state = {
    unAudit: 0,//未审核
    Auditing: 0, //审核未通过
    Audited: 0 //审核通过
  };
    render(){
      const { unAudit, Auditing, Audited } = this.state;
      const doing = parseInt(unAudit),
        did = parseInt(Audited) + parseInt(Auditing);
        const dataSource = [
          {
            title: '待审核通过',
            count: doing,
            description: `您有 ${doing} 条信息待审核，请前往待审核信息页面继续操作！`
          },{
            title: '已完成审核',
            count: did,
            description: `您已完成 ${did} 条信息审核，请前往待审核信息页面继续操作！`
          }
        ];
        return (
            <Card className={styles.card} title='消息通知中心'>
                <List
                    dataSource={dataSource}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          title={item.title}
                          description={item.description}
                        />
                        <a onClick={() => history.push('/audit')}>前往查看</a>
                      </List.Item>
                    )}
                />
            </Card>
        )
    }
    componentDidMount(){
      this.getSummary();
    }
    getSummary = () => {
      request({
        url: '/api/web_all_type',
        data:{},
        success: res => {
          let data = res.data;
          this.setState({
            ...data
          })
        }
      })
    }
}
export default Index;