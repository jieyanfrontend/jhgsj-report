import React, { Component } from 'react';
import history from '../../history';
import { Menu, Icon, Dropdown } from 'antd';
import style from './header.css';
import request from '../../helpers/request';
class Header extends Component{
    render(){
        let user = localStorage.getItem('user');
        const menu =  (
          <Menu>
            <Menu.Item className={style["dropdown-item"]}>
              <a onClick={() => history.push('/setting')}>设置</a>
            </Menu.Item>
            <Menu.Item className={style["dropdown-item"]}>
              <a onClick={() => this.logout()} >退出</a>
            </Menu.Item>
          </Menu>);
        return (
            <div className={style.header}>
                <div className={style.logo}/>
                {location.hash === '#/login' ? null :
                (<div className={style.topbar}>
                    <Menu
                        mode="horizontal"
                        className={style.menu}
                    >
                        <Menu.Item key='index'>
                            <a onClick={() => history.push('/')}>首页</a>
                        </Menu.Item>
                        <Menu.Item key='audit'>
                            <a onClick={() => history.push('/audit')}>信息审核</a>
                        </Menu.Item>
                        <Menu.Item key='statistics'>
                            <a onClick={() => history.push('/statistics')}>统计</a>
                        </Menu.Item>
                        <Menu.Item key='user'>
                            <Dropdown overlay={menu} trigger={['click']} placement='bottomCenter'>
                              <span className={style["dropdown-button"]}><Icon type='user'/>{user}</span>
                            </Dropdown>
                        </Menu.Item>
                    </Menu>
                </div>)}
            </div>
        )
    }
    logout = () => {
        request({
          url: '/api/web_logout',
          data: {},
          success: () => {
              history.push('/login')
          }
        })
    }
}
export default Header;