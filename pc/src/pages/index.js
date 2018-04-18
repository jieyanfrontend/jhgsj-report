import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import Index from './index/index';
import Audit from './audit/audit';
import Statistics from './statistics/statistics';
import Login from './login/login';
import { Layout } from 'antd';
import IncludeHeader from './includes/header';
const { Header, Content, Footer } = Layout;
import style from './index.css';
class App extends Component {
    render(){
        return (
            <Layout className={style.layout}>
                <Header className={style.header}>
                    <IncludeHeader/>
                </Header>
                <Content className={style.content}>
                    <div className={style.container}>
                        <Switch>
                            <Route path='/audit' component={Audit}/>
                            <Route path='/statistics' component={Statistics}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/' component={Index}/>
                        </Switch>
                    </div>
                </Content>
                <Footer className={style.footer}>
                    AMS ©2018 Created by 捷雁
                </Footer>
            </Layout>
        )
    }
}
let rootComponent = App;
if(module.hot){
    rootComponent = hot(module)(App);
}
export default rootComponent;