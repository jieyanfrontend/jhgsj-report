import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Menu, Icon, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import style from './header.css';
class Header extends Component{
    state = {
        isLogout: false
    };
    render(){
        const { isLogout } = this.state;
        let user = localStorage.getItem('user')
        return (
            <div className={style.header}>
                <div className={style.logo}/>
                {location.pathname === '/login' ? null :
                (<div className={style.topbar}>
                    <Menu
                        mode="horizontal"
                        className={style.menu}
                    >
                        <Menu.Item key='index'>
                            <Link to='/'>首页</Link>
                        </Menu.Item>
                        <Menu.Item key='audit'>
                            <Link to='/audit'>信息审核</Link>
                        </Menu.Item>
                        <Menu.Item key='statistics'>
                            <Link to='/statistics'>统计</Link>
                        </Menu.Item>
                        <Menu.Item key='user'>
                            <Popconfirm title='您是否要退出?' onConfirm={this.logout}>
                                <a><Icon type='user'/>{user}</a>
                            </Popconfirm>
                        </Menu.Item>
                    </Menu>
                </div>)}
                {isLogout ? <Redirect to='/login' /> : null}
            </div>
        )
    }
    logout = () => {
        localStorage.removeItem('user');
        this.setState({
            isLogout: true
        }, () => {
            this.setState({
              isLogout: false
            })
        })
    }
}
export default Header;