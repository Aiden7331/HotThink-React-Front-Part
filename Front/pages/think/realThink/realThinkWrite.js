import {Form, Slider, Button, Upload, Icon, Input} from 'antd';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setReal, writeRealThink} from "../../../modules/reducer/realThink";
import {changeField} from "../../../modules/reducer/realThink";
const {TextArea} = Input;

const ThinkWrite = ({form}) => {
    const dispatch = useDispatch();
    const [real,setReal] = useState(null);
    const {inventor,rightHolder,title,contents,difference,pmaterial,attaches,category,originalPostId,progressRate,state} = useSelector(({realThink})=>({
        inventor:realThink.inventor,
        rightHolder:realThink.rightHolder,
        title:realThink.title,
        contents:realThink.contents,
        difference:realThink.difference,
        pmaterial:realThink.pmaterial,
        attaches:realThink.attaches,
        category:realThink.category,
        originalPostId:realThink.originalPostId,
        progressRate:realThink.progressRate,
        state:realThink.state,
    }));

    useEffect(()=>{
        setReal({
            difference,
            inventor,
            rightHolder,
            progressRate,
            pmaterial,
            state,
            attaches,
        });
    },[difference,inventor,rightHolder,progressRate,pmaterial,state,attaches]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(
            writeRealThink({
                title,
                contents,
                category,
                originalPostId,
                real,
            })
        );
    };

    const onChangeField = useCallback(payload=>dispatch(changeField(payload)),[
        dispatch
    ]);

    const onChangeTitle = e => {
        onChangeField({key:'title',value:e.target.value})
    };
    const onChangeContents = e => {
        onChangeField({key:'contents',value:e.target.value})
    };
    const onChangeInventor = e => {
        onChangeField({key:'inventor',value:e.target.value})
    };
    const onChangeRightHolder = e => {
        onChangeField({key:'rightHolder',value:e.target.value})
    };
    const onChangeCategory = e => {
        onChangeField({key:'category',value:e.target.value})
    };
    const onChangePMaterial = e => {
        onChangeField({key:'pmaterial',value:e.target.value})
    };
    const onChangeDifference = e => {
        onChangeField({key:'difference',value:e.target.value})
    };
    const onChangeProgress = e => {
        onChangeField({key:'progress',value:e.target.value})
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
                    <Input id='title' value={title} onChange={onChangeTitle}/>
                </Form.Item>
                <Form.Item label="발명자">
                    <Input id='inventor' value={inventor} onChange={onChangeInventor}/>
                </Form.Item>
                <Form.Item label="권리자(출원인)">
                    <Input id='rightHolder' value={rightHolder} onChange={onChangeRightHolder}/>
                </Form.Item>
                <Form.Item label="카테고리">
                    <Input id='category' value={category} onChange={onChangeCategory}/>
                </Form.Item>
                <Form.Item label="개요">
                    <TextArea autosize={{minRows: 10, maxRows: 10}} id='contents' value={contents} onChange={onChangeContents}
                              placeholder="아이디어의 우수성을 구체적으로 드러내 주세요."/>
                </Form.Item>
                <Form.Item label="핵심내용">
                    <TextArea id='pmaterial' autosize={{minRows: 20, maxRows: 20}} value={pmaterial} onChange={onChangePMaterial}
                              placeholder="아이디어의 실현가능성을 구체적으로 드러내주세요"/>
                </Form.Item>

                <Form.Item label="차별성">
                    <TextArea id='difference' autosize={{minRows: 20, maxRows: 20}} value={difference} onChange={onChangeDifference}
                              placeholder="유사 아이디어와의 차별성을 드러내주세요"/>
                </Form.Item>

                <Form.Item label="완성단계" id='progressRate' value={progressRate} onChange={onChangeProgress}>
                        <Slider
                            marks={{0: '0%', 20: '20%', 40: '40%', 60: '60%', 80: '80%', 100: '100%',}}
                        />
                </Form.Item>

                <Form.Item label="첨부파일">
                        <Upload.Dragger name="file" action="/upload.do" value={attaches} onChange={onChangeTitle}>
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox"/>
                            </p>
                            <p className="ant-upload-text">업로드 할 파일을 이곳에 드래그 해주세요</p>
                            <p className="ant-upload-hint">여러개를 동시에 올릴 수 있습니다.</p>
                        </Upload.Dragger>
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