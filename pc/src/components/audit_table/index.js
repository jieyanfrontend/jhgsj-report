import React from 'react';
import { Table, Icon, Avatar, Button, Modal } from 'antd';
import styles from './index.css';
let AlertIcon = () => <Icon type='cross-circle-o' className={styles.icon_alert}/>;
let SuccessIcon = () => <Icon type='check-circle-o' className={styles.icon_success}/>;
import RemarkModal from '../remark_modal';
import PreviewModal from '../preview_modal';
class AuditTable extends React.Component{
    state = {
        id: null,
        url: null,
        msg: null,
        isRemarking: false ,
        isPreviewing: false
    };
    render(){
        let { state, fail = () => {}, pass = () => {}, table, loading } = this.props;
        let { id,url, isRemarking, isPreviewing } = this.state;
        let FixedAvatar = ({url}) => <Avatar className={styles.avatar} shape='square' src={url} onClick={() => this.handlePreview(url)}/>;
        let columns = [{
            title: 'ID',
            dataIndex: 'id',
            className: styles.id_width,
            align: 'center'
        },{
            title: '基本信息',
            render: (text, record) => {
                return (
                    <section className={styles.audit}>
                        <Modal/>
                        <h3 className={styles.audit_title}>{record.org_name}</h3>
                        <div className={styles.line}>
                            <div className={styles.line_item}>
                                <span className={styles.message_title}>注册号:</span>
                                <span className={styles.message_detail}>{record.org_code}</span>
                                {record.check && record.check.org_code === 0 ? <AlertIcon/> : <SuccessIcon/>}
                            </div>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.line_item}>
                                <span className={styles.message_title}>负责人:</span>
                                <span className={styles.message_detail}>{record.admin}</span>
                                {record.check && record.check.admin === 0 ? <AlertIcon/> : <SuccessIcon/>}
                            </div>
                            <div className={styles.line_item}>
                                <span className={styles.message_title}>联系电话:</span>
                                <span className={styles.message_detail}>{record.phone}</span>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.line_item}>
                                <span className={styles.message_title}>地址:</span>
                                <span className={styles.message_detail}>{record.address}</span>
                                {record.check && record.check.address === 0 ? <AlertIcon/> : <SuccessIcon/>}
                            </div>
                        </div>
                    </section>
                )
            }
        }, {
            title: '经营许可证正面',
            dataIndex: 'license_url',
            render: (url) => <FixedAvatar url={url}/>
        }, {
            title: '经营场所门面',
            dataIndex: 'premise_url',
            render: (url) => <FixedAvatar url={url}/>
        },{
            title: '工作场所',
            dataIndex: 'workplace_url',
            render: (url) => <FixedAvatar url={url}/>
        }];
        if(state === 0){
            columns.push({
                title: '操作',
                render:(text, record) => <div className={styles.audit_btn_group}>
                    <Button type='primary' onClick={() => pass(record.id)}>审核通过</Button>
                    <Button onClick={() => this.handleMsg(record.id)}>审核不通过</Button>
                </div>
            });
        }else{
            columns.splice(2, 0, {
                title: '审核人',
                dataIndex: 'the_user'
            });
        }
        return (
            <div>
                <RemarkModal  visible={isRemarking} setVisible={(bool) => this.setVisible({isRemarking: bool})} ensure={msg => fail({id, msg}, this.setVisible)}/>
                <PreviewModal url={url} visible={isPreviewing} setVisible={(bool) => this.setVisible({isPreviewing: bool})}/>
                <Table loading={loading} columns={columns} dataSource={table} rowKey='id' pagination={{
                    showTotal: (total) => `共${total}条`,
                    pageSize: this.pageSize,
                    size: 'small'
                }}/>
            </div>
        )
    }
    pageSize = 20;
    setVisible = (state) => {
        this.setState(state);
    };
    handleMsg = (id) => {
        this.setState({
            isRemarking: true,
            id
        })
    };
    handlePreview = (url) => {
        this.setState({
            isPreviewing: true,
            url
        })
    }
}
export default AuditTable;