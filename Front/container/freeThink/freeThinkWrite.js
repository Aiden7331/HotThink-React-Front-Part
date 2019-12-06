import React, {useCallback, useState, useRef, useEffect} from 'react';
import {Form, Button,Input} from 'antd';
import TextareaAutosize from "react-textarea-autosize";
import ImgForm from "../../components/imgForm";
import {useDispatch, useSelector} from "react-redux";
import {initialize, changeField, writeFreeThink, closeModal} from "../../modules/reducer/freeThink";

const FreeThinkWrite = ({show}) => {
    const dispatch = useDispatch();
    const {title,contents,post,error,category,isOpen,attaches} = useSelector(({freeThink})=>({
        title:freeThink.title,
        contents:freeThink.contents,
        post:freeThink.freeThink,
        error:freeThink.freeThinkError,
        category:freeThink.category,
        isOpen:freeThink.isOpen,
        attaches:freeThink.attaches,
    }));

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        if (!title || !title.trim()) {
            return alert('제목을 작성하세요.');
        }
        if (!contents || !contents.trim()) {
            return alert('게시글을 작성하세요.');
        }
        dispatch(
            writeFreeThink({
                title,
                contents,
                category,
                attaches,
            }),
        );
    },[dispatch,title,contents,category,attaches]);

    //성공 혹은 실패시 작업
    useEffect(()=>{
       if(!isOpen){
           //success
           dispatch(closeModal());
       }
       if(error){
           console.log(error);
       }
    },[post,error,dispatch,isOpen]);

    const onChangeField = useCallback(payload=>dispatch(changeField(payload)),[
        dispatch
    ]);

    const onChangeTitle = e => {
        onChangeField({key:'title',value:e.target.value})
    };

    const onChangeContents = e => {
        onChangeField({key:'contents',value:e.target.value})
    };

    //언마운트될때 초기화
    useEffect(()=>{
        return()=>{
            dispatch(initialize());
        };
    },[dispatch]);

    return (
        <>
            <Form style={{margin: '0px 0 10px'}} encType="multipart/form-data" onSubmit={onSubmitForm}>
                <Input style={{marginBottom:'3px',fontFamily: 'Noto Sans KR'}} id="title" value={title} onChange={onChangeTitle} placeholder="제목" />
                <div style={{
                    height: "auto",
                    overflow: "hidden",
                    background: 'white',
                    border: '1px solid #e6e6e6',
                    borderRadius:'5px'
                }}>
                    <div style={{overflow: 'hidden', height: 'auto'}}>
                        <TextareaAutosize
                            style={{
                                margin: '5px',
                                resize: 'none',
                                lineHeight: '20px',
                                overflowY: 'hidden',
                                border: 'none',
                                width: '98.5%',
                                minHeight: '80px',
                                height: 'auto',
                                fontFamily: 'Noto Sans KR',
                                outline:'none',
                            }}
                            placeholder="당신의 아이디어를 발휘하세요!"
                            value={contents}
                            id="contents"
                            onChange={onChangeContents}
                            autoFocus={true}/>
                    </div>
                </div>
                {/*<div style={{marginTop:'5px'}}>*/}
                {/*    <ImgForm />*/}
                {/*</div>*/}
                <ImgForm />
                <Button type="primary" style={{float: 'right',marginTop:'5px', borderRadius: '5px'}}
                        htmlType="submit" >작성</Button>
            </Form>
        </>
    );
};

export default FreeThinkWrite;