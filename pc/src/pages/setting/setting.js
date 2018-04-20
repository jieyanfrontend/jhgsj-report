import React from 'react';
import { Card, Table, Button, Icon, Modal, Form, Input, message } from 'antd';
import settingStyle from './setting.css';
import request from '../../helpers/request';
class Setting extends React.Component{
  state = {
    visible: false,
    admin: [],
    assist: [],
    id: null
  };
  render(){
    let { visible, admin, assist, id } = this.state;
    let { getFieldDecorator, getFieldsError, isFieldTouched, getFieldError } = this.props.form;
    let userErr = isFieldTouched('name') && getFieldError('name');
    let accountErr = isFieldTouched('user') && getFieldError('user');
    let passwordErr = isFieldTouched('password') && getFieldError('password');
    const modalFooter = (
      <footer>
        <Button onClick={this.closeModal}>取消</Button>
        <Button type='primary' onClick={this.modalEnsure} disabled={this.hasErrors(getFieldsError())}>确认</Button>
      </footer>
    );
    let AddModal = (
      <Modal width={650} title={id ? '修改账号密码' : '新增审核员账号'} destroyOnClose={true} visible={visible} footer={modalFooter} onCancel={this.closeModal}>
          <Form className={settingStyle.form}>
            <Form.Item label='姓名' help={userErr ? userErr : null} validateStatus={userErr ? 'error': ''}>
              {getFieldDecorator('name', {
                rules: [{
                  required: true,
                  message: '姓名不能为空'
                }]
              })(
                <Input size='large' disabled={!!id}/>
              )}
            </Form.Item>
            <Form.Item label='登陆账号' help={accountErr ? userErr : null} validateStatus={accountErr ? 'error': ''}>
              {getFieldDecorator('user',  {
                rules: [{
                  required: true,
                  message: '账号不能为空'
                }]
              })(
                <Input size='large' disabled={!!id}/>
              )}
            </Form.Item>
            <Form.Item label='密码' help={passwordErr ? userErr : null} validateStatus={passwordErr ? 'error': ''}>
              {getFieldDecorator('password', {
                rules: [{
                  required: true,
                  message: '密码不能为空'
                }]
              })(
                <Input size='large'/>
              )}
            </Form.Item>
          </Form>
      </Modal>
    );
    const adminColumns = [{
      title: '姓名',
      dataIndex: 'name'
    }, {
      title: '登陆账号',
      dataIndex: 'the_user'
    }, {
      title: '添加时间',
      dataIndex: 'create_time',
      render: text => <span>{text || '-'}</span>
    },{
      title: '上次登陆时间',
      dataIndex: 'last_time',
      render: text => <span>{text || '-'}</span>
    }, {
      title: '操作',
      render: (text, record) => (<span>
        <a onClick={() => this.setAccount(record)}>修改</a>
      </span>)
    }];
    const assistColumns = [{
      title: '姓名',
      dataIndex: 'name'
    }, {
      title: '登陆账号',
      dataIndex: 'the_user'
    }, {
      title: '添加时间',
      dataIndex: 'create_time',
      render: text => <span>{text || '-'}</span>
    },{
      title: '上次登陆时间',
      dataIndex: 'last_time',
      render: text => <span>{text || '-'}</span>
    }, {
      title: '操作',
      render: (text, record) => (<span>
        {admin.length < 1 ? (<a onClick={() => this.setAccount(record)}>修改</a>) : null}
        {admin.length > 0 ? (<a onClick={() => this.deleteAccount(record.id)}>删除</a>) : null}
      </span>)
    }];
    return (
      <div>
        {
          admin.length < 1 ? null : (
            <Card
              title='管理员'
              className={settingStyle["card-margin"]}>
              <Table columns={adminColumns} dataSource={admin} pagination={false} rowKey='id'/>
            </Card>
          )
        }
        <Card
          title='审核员'
        >
          <Table columns={assistColumns} dataSource={assist} pagination={false} rowKey='id'/>
          {admin.length < 1 ? null : (
            <Button className={settingStyle['add-account']} size='large' onClick={this.handleAdd}>
              <Icon type='plus'/>添加
            </Button>
          )}
        </Card>
        {AddModal}
      </div>
    )
  }
  componentDidMount(){
    this.props.form.validateFields();
    this.getAccountList();
  }
  hasErrors = (errors) => {
    return Object.keys(errors).some(key => errors[key]);
  };
  handleAdd = () => {
    this.setState({
      visible: true
    }, () => {
      this.props.form.validateFields();
    })
  };
  closeModal = () => {
    this.setState({
      visible: false,
      id:''
    })
  };
  getAccountList = () => {
    request({
      url: '/api/web_account_list',
      data:{},
      success: ({ data }) => {
        let admin = [],
          assist = [];
        data.map(per => {
          if(per.type === 0){
            admin.push(per);
          }else if(per.type === 1) {
            assist.push(per);
          }
        });
        this.setState({
          admin,
          assist
        })
      }
    })
  };
  setAccount = (user = {}) => {
      this.setState({
        id: user.id,
        visible: true
      }, () => {
        this.props.form.validateFields();
        if(user){
          this.props.form.setFieldsValue({
            name: user.name,
            user: user.the_user
          });
        }
      })
  };
  renewAccountPassword = (id) => {
    let values = this.props.form.getFieldsValue();
      request({
        url: '/api/web_modify',
        data:{
          id,
          type: 1,
          the_password: values['password']
        },
        success: ({ data }) => {
          this.closeModal();
        }
      })
  };
  deleteAccount = (id) => {
    request({
      url: '/api/web_modify',
      data: {
        id,
        type: 0
      },
      success: ({ data }) => {
        this.getAccountList();
      }
    })
  };
  modalEnsure = () => {
    let id = this.state.id;
    if(id){
      this.renewAccountPassword(id);
    }else{
      this.requestAdd();
    }
  };
  requestAdd = () => {
    let { name, user, password } = this.props.form.getFieldsValue();
    request({
      url: '/api/web_register',
      data: {
        name,
        user,
        password
      },
      success: () => {
        this.closeModal();
        this.getAccountList();
      },
      fail: (res) => {
        message.error(res.msg);
      }
    })
  }
}
let SettingForm = Form.create()(Setting);
export default SettingForm;