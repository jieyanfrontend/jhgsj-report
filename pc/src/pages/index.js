import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router';
import { Layout } from 'antd';
import IncludeHeader from './includes/header';
import style from './index.css';

const { Header, Content, Footer } = Layout;
class App extends Component {
    render(){
        let pathName = this.props.history.location.pathname;
        let unLogin = pathName === '/login' || (pathName !== '/login' && sessionStorage.getItem('user'));
        return unLogin ? (
            <Layout className={style.layout}>
                <Header className={style.header}>
                    <IncludeHeader/>
                </Header>
                <Content className={style.content}>
                    <div className={style.container}>
                        <Switch>
                          <Route path='/audit' render={() => <WrapperComponent Comp={import('./audit/audit')} name={'audit'}/>}/>
                          <Route path='/statistics' render={() => <WrapperComponent Comp={import('./statistics/statistics')} name={'statistics'}/>}/>
                          <Route path='/setting' render={() => <WrapperComponent Comp={import('./setting/setting')} name={'setting'}/>}/>
                          <Route path='/login' render={() => <WrapperComponent Comp={import('./login/login')} name={'login'}/>}/>
                          <Route render={() => <WrapperComponent Comp={import('./index/index')} name={'index'}/>}/>
                        </Switch>
                    </div>
                </Content>
                <Footer className={style.footer}>
                    AMS ©2018 Created by 江门市爱萝卜网络科技有限公司
                </Footer>
            </Layout>
        ) : (
          <Redirect to='/login'/>
        )
    }
}
class WrapperComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Comp: null
    }
  }
  componentDidMount(){
    this.updateComp(this.props);
  }
  render(){
    let Comp = this.state.Comp;
    return Comp ? <Comp/> : Comp;
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.Comp !== this.props.Comp){
      this.updateComp(nextProps);
    }
  }
  updateComp = (props) => {
    props.Comp.then(C => {
      this.setState({
        Comp:C.default
      })
    });
  }
}
export default hot(module)(App);
// export default App;