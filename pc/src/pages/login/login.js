import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Icon, Button, Checkbox } from 'antd';
import style from './login.css';
import request from '../../helpers/request';
class Login extends React.Component{
  state = {
    loginSuccess: false,
    userRetErr: false,
    passwordRetErr: false
  };
    render(){
        const { getFieldDecorator, getFieldsError, isFieldTouched, getFieldError } = this.props.form;
        const { loginSuccess, userRetErr, passwordRetErr } = this.state;
        const userErr = isFieldTouched('user') && getFieldError('user') || userRetErr;
        const passwordErr = isFieldTouched('password') && getFieldError('password') || passwordRetErr;
        const btnErr = this.hasErrors(getFieldsError()) || userErr || passwordErr;
        return (
            <div className={style.container}>
              { loginSuccess ? <Redirect to='/'/> : null}
                <div className={style.form}>
                    <Form>
                        <Form.Item
                          validateStatus={userErr ? 'error': ''}
                          help={userErr}
                        >
                            {getFieldDecorator('user', {
                                rules: [{ required: true, message: '请输入用户名' }],
                            })(
                                <Input
                                  onChange={this.userChange}
                                  size={'large'} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                            )}
                        </Form.Item>
                        <Form.Item
                          validateStatus={passwordErr ? 'error' : ''}
                          help={passwordErr}
                        >
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码' }],
                            })(
                                <Input
                                  onChange={this.passwordChange}
                                  size={'large'} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="密码" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                        </Form.Item>
                        <Form.Item  className={style.login_btn_group}>
                            <Button
                              disabled={btnErr}
                              size={'large'} type="primary" htmlType="submit" className={style.login_btn} onClick={this.doLogin}>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
    componentDidMount(){
      this.props.form.validateFields();
    }
    userChange = () => {
      this.setState({
        userRetErr: false
      })
    };
  passwordChange = () => {
    this.setState({
      passwordRetErr: false
    })
  };
  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };
    doLogin = () => {
      let values = this.props.form.getFieldsValue();
        request({
          url: '/api/web_login',
          data:{
            user: values['user'],
            password: values['password']
          },
          success: (res) => {
            localStorage.setItem('user', values['user']);
            this.setState({
              loginSuccess: true
            })
          },
          fail:({code, msg}) => {
            let state = {};
            if(code === 1001){
              state.userRetErr = msg;
            }else if(code === 1002){
              state.passwordRetErr = msg;
            }else{

            }
            this.setState(state);
          }
        })
    }
}
let LoginForm = Form.create()(Login);
export default LoginForm;