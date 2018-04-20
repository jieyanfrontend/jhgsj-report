import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router';
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
                            <Route path='/audit' render={() => <WrapperComponent Comp={import('./audit/audit')} name={'audit'}/>}/>
                            <Route path='/statistics' render={() => <WrapperComponent Comp={import('./statistics/statistics')} name={'statistics'}/>}/>
                            <Route path='/setting' render={() => <WrapperComponent Comp={import('./setting/setting')} name={'setting'}/>}/>
                            <Route path='/login' render={() => <WrapperComponent Comp={import('./login/login')} name={'login'}/>}/>
                            <Route path='/' render={() => <WrapperComponent Comp={import('./index/index')} name={'login'}/>}/>
                          <Route render={() => <WrapperComponent Comp={import('./index/index')} name={'login'}/>}/>
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