import {Form, Slider, Button, Upload, Icon, Input} from 'antd';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {writeRealThink} from "../../../modules/reducer/realThink";
const {TextArea} = Input;

const ThinkWrite = ({form}) => {
    const dispatch = useDispatch();
    const {inventor,rightHolder,title,contents,difference,pMaterial,attaches,category,originalPostId,user,progressRate} = useSelector(({realThink,user})=>({
        inventor:realThink.inventor,
        rightHolder:realThink.rightHolder,
        title:realThink.title,
        contents:realThink.contents,
        difference:realThink.difference,
        pMaterial:realThink.pMaterial,
        attaches:realThink.attaches,
        category:realThink.category,
        originalPostId:realThink.bdSeq,
        user:user.user.nickName,
        progressRate:realThink.progressRate
    }));

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            writeRealThink({
                inventor,
                rightHolder,
                title,
                contents,
                difference,
                pMaterial,
                attaches,
                category,
                originalPostId,
                progressRate,
            })
        );
    };

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    const {getFieldDecorator} = form;
    const formItemLayout = {
        labelCol: {span: 8},
        wrapperCol: {span: 10},
    };
    return (
        <>
            <h1 style={{textAlign: 'center'}}>RealThink 등록하기</h1>
            <Form {...formItemLayout} style={{marginTop: '50px'}} onSubmit={handleSubmit}>
                <Form.Item label="아이디어 명칭">
                    {getFieldDecorator('title', {
                        rules: [{required: true, message: 'Please input your note!'}],
                    })(<Input/>)}
                </Form.Item>
                <Form.Item label='등록자'>
                    {getFieldDecorator(user, {
                        rules: [{required: true, message: 'Please input your note!'}],
                    })(<Input/>)}
                </Form.Item>
                <Form.Item label="발명자">
                    {getFieldDecorator('inventor', {
                        rules: [{required: true, message: 'Please input your note!'}],
                    })(<Input/>)}
                </Form.Item>
                <Form.Item label="권리자(출원인)">
                    {getFieldDecorator('rightHolder', {
                        rules: [{required: true, message: 'Please input your note!'}],
                    })(<Input/>)}
                </Form.Item>
                <Form.Item label="카테고리">
                    {getFieldDecorator('category', {
                        rules: [{required: true, message: 'Please input your note!'}],
                    })(<Input/>)}
                </Form.Item>
                <Form.Item label="개요">
                    {getFieldDecorator('contents', {
                        rules: [{required: true, message: 'Please input your note!'}],
                    })(<TextArea autosize={{minRows: 10, maxRows: 10}} placeholder="아이디어의 우수성을 구체적으로 드러내 주세요."/>)}
                </Form.Item>

                <Form.Item label="핵심내용">
                    {getFieldDecorator('pMaterial', {
                        rules: [{required: true, message: 'Please input your note!'}],
                    })(<TextArea autosize={{minRows: 20, maxRows: 20}} placeholder="아이디어의 실현가능성을 구체적으로 드러내주세요"/>)}
                </Form.Item>

                <Form.Item label="차별성">
                    {getFieldDecorator('difference', {
                        rules: [{required: true, message: 'Please input your note!'}],
                    })(<TextArea autosize={{minRows: 20, maxRows: 20}} placeholder="유사 아이디어와의 차별성을 드러내주세요"/>)}
                </Form.Item>

                <Form.Item label="완성단계">
                    {getFieldDecorator('progressRate')(
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

                <Form.Item label="첨부파일">
                    {getFieldDecorator('attaches', {
                        valuePropName: 'fileList',
                        getValueFromEvent: {normFile},
                    })(
                        <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox"/>
                            </p>
                            <p className="ant-upload-text">업로드 할 파일을 이곳에 드래그 해주세요</p>
                            <p className="ant-upload-hint">여러개를 동시에 올릴 수 있습니다.</p>
                        </Upload.Dragger>,
                    )}
                </Form.Item>
                <Form.Item wrapperCol={{span: 12, offset: 6}}>
                    <Button type="primary" htmlType="submit">
                        아이디어 등록하기
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

const RealThinkWrite = Form.create({name: 'validate_other'})(ThinkWrite);
export default RealThinkWrite;