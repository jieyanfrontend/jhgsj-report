import React from 'react';
import { Modal, Avatar } from 'antd';
class PreviewModal extends React.Component{
    state = {
        width: 600,
        height: 600,
        display: 'block',
        margin: '0 auto'
    };
    render(){
        const { url, visible } = this.props;
        return (
            <Modal width={650} visible={visible} footer={null} closable={true} onCancel={this.closeModal}>
                <Avatar src={url} style={this.state} shape='square'/>
            </Modal>
        )
    }
    componentDidMount(){
        if(this.props.url){
            this.loadImg(this.props.url);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.url !== this.props.url){
            this.loadImg(nextProps.url);
        }
    }
    closeModal = () => {
        this.props.setVisible(false);
    };
    loadImg = (url) => {
        let img = new Image();
        img.src = url;
        img.onload = () => {
            let { width, height } = img;
            let ratio = width / height;
            let avatarOptions = {
                height: 600,
                width: 600 * ratio
            };
            if(width > height){
                avatarOptions = {
                    width: 600,
                    height: 600 / ratio
                }
            }
            this.setState(avatarOptions);
        }
    }
}
export default PreviewModal;