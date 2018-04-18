import React from 'react';
import { Card } from 'antd';
import styles from './index.css';
class Index extends React.Component{
    render(){
        return (
            <Card className={styles.card}>
                欢迎登陆审核系统
            </Card>
        )
    }
}

export default Index;