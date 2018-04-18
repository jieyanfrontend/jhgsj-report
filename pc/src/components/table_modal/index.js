import React from 'react';
import { Modal, Table } from 'antd';
class TableModal extends React.Component{
    render(){
        const { title = '', dataSources = [], columns = [],rowKeys = [], visible} = this.props;
        let tableList = columns.map((c, i) => (
            <Table pagination={false} columns={c} dataSource={dataSources[i]} rowKey={rowKeys[i]} key={rowKeys[i] + i} />
        ));
        return (
            <Modal title={`当前日期: ${title}`} visible={visible} width={800} onCancel={this.closeModal} footer={null} style={{maxHeight: '600px'}}>
                {tableList}
            </Modal>
        )
    }
    closeModal = () => {
        this.props.setVisible(false);
    }
}
export default TableModal;