import React from 'react';
import { Modal, Form, Select, Input,Button, notification } from 'antd';
let FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
import styles from './index.css';
let EnsureBtn = ({cb, disabled}) => (<Button type='primary' onClick={() => cb()} disabled={disabled}>确认</Button>);
let CancelBtn = ({cb}) => (<Button onClick={() => cb()}>取消</Button>);
let ModalFooter = ({ ensure = () => {}, cancel = () => {}, disabled = false}) => {
    return (
        <div>
            <CancelBtn cb={cancel}/>
            <EnsureBtn cb={ensure} disabled={disabled}/>
        </div>
    )
};
class RemarkModal extends React.Component{
    render(){
        let { form, visible, ensure = () => {} } = this.props;
        let { getFieldDecorator, getFieldsError, isFieldTouched, getFieldError, getFieldValue } = form;
        const msgErr = isFieldTouched('msg') && getFieldError('msg');
        return(
            <Modal visible={visible} title='审核不通过原因' width={800} onCancel={this.closeModal} footer={<ModalFooter ensure={() => ensure(getFieldValue('msg'))} cancel={this.closeModal} disabled={this.hasErrors(getFieldsError())}/>}>
                <Form>
                    <FormItem label='回复模板' labelCol={{span:3}} wrapperCol={{span: 20}}>
                        {getFieldDecorator('template')(
                            <Select onSelect={this.handleSelect}>
                                <Option value='one'>one</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        help={msgErr ? msgErr : ''}
                        validateStatus={msgErr ? 'error': ''}
                        label='原因' labelCol={{span:3}} wrapperCol={{span: 20}}>
                        {getFieldDecorator('msg', {
                            rules:[{
                                required: true,
                                message: '请输入审核不通过原因'
                            }]
                        })(
                            <TextArea autosize={{minRows: 6, maxRows: 6}}/>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
    componentDidMount(){
        this.props.form.validateFields();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.visible && nextProps.visible !== this.props.visible){
            this.props.form.validateFields(['msg']);
        }
    }
    handleSelect = (value) => {
        let { setFields } = this.props.form;
        setFields({
            msg:{
                value: value
            }
        })
    };
    hasErrors = (errors) => {
        return Object.keys(errors).some(k => errors[k]);
    };
    closeModal = () => {
        this.props.form.resetFields();
        this.props.setVisible(false);
    }
}
const FormRemarkModal = Form.create()(RemarkModal);
export default FormRemarkModal;