import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Icon,
    Rate,
    Checkbox,
    Row,
    Col,
    Input
} from 'antd';

import React from 'react';

const { Option } = Select;

const { TextArea } = Input;

class ThinkWrite extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 10 },
        };
        return (
            <>
                <h1 style={{textAlign:'center'}}>RealThink 등록하기</h1>
            <Form {...formItemLayout} style={{marginTop:'50px'}} onSubmit={this.handleSubmit}>
                <Form.Item label="아이디어 명칭">
                    {getFieldDecorator('idea', {
                        rules: [{ required: true, message: 'Please input your note!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="등록자">
                    {getFieldDecorator('등록자', {
                        rules: [{ required: true, message: 'Please input your note!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="발명자">
                    {getFieldDecorator('발명자', {
                        rules: [{ required: true, message: 'Please input your note!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="권리자(출원인)">
                    {getFieldDecorator('권리자', {
                        rules: [{ required: true, message: 'Please input your note!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="분야">
                    {getFieldDecorator('select-multiple', {
                        rules: [
                            { required: true, message: 'Please select your favourite colors!', type: 'array' },
                        ],
                    })(
                        <Select mode="multiple" placeholder="분야를 입력하세요">
                            <Option value="1">IT</Option>
                            <Option value="2">기계</Option>
                            <Option value="3">화학</Option>
                            <Option value="4">의류</Option>
                            <Option value="5">건축</Option>
                            <Option value="6">금융</Option>
                            <Option value="7">기타</Option>
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item label="개요">
                    {getFieldDecorator('개요', {
                        rules: [{ required: true, message: 'Please input your note!' }],
                    })(<TextArea autosize={{minRows:10,maxRows:10}} placeholder="아이디어의 우수성을 구체적으로 드러내 주세요."/>)}
                </Form.Item>

                <Form.Item label="핵심내용">
                    {getFieldDecorator('핵심내용', {
                        rules: [{ required: true, message: 'Please input your note!' }],
                    })(<TextArea autosize={{minRows:20,maxRows:20}} placeholder="아이디어의 실현가능성을 구체적으로 드러내주세요"/>)}
                </Form.Item>

                <Form.Item label="차별성">
                    {getFieldDecorator('핵심내용', {
                        rules: [{ required: true, message: 'Please input your note!' }],
                    })(<TextArea autosize={{minRows:20,maxRows:20}} placeholder="유사 아이디어와의 차별성을 드러내주세요"/>)}
                </Form.Item>

                <Form.Item label="완성단계">
                    {getFieldDecorator('slider')(
                        <Slider
                            marks={{
                                0: '0%',
                                20: '20%',
                                40: '40%',
                                60: '60%',
                                80: '80%',
                                100: '100%',
                            }}
                        />,
                    )}
                </Form.Item>

                <Form.Item label="Dragger">
                    {getFieldDecorator('dragger', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">업로드 할 파일을 이곳에 드래그 해주세요</p>
                            <p className="ant-upload-hint">여러개를 동시에 올릴 수 있습니다.</p>
                        </Upload.Dragger>,
                    )}
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
                </>
        );
    }
}

const RealThinkWrite = Form.create({ name: 'validate_other' })(ThinkWrite);
export default RealThinkWrite;