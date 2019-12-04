import React, { useCallback, useState, useRef, useEffect } from 'react';
import { Form, Button, Input } from 'antd';
import ImgForm from '../../components/imgForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  initialize,
  changeField,
  writeFreeThink,
  closeModal
} from '../../modules/reducer/freeThink';
import { listFreeThinks } from '../../modules/reducer/freeThinks';
const { TextArea } = Input;

const FreeThinkWrite = ({category}) => {
  const dispatch = useDispatch();
  const {title,contents,post,error,isOpen,attaches} = useSelector(({freeThink})=>({
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
      dispatch(changeField({key:"category", value:category}))
    };
  },[dispatch]);

  return (
    <>
      <Form
        style={{
          margin: '10px 0 10px',
          fontFamily: 'Noto Sans KR',
        }} encType="multipart/form-data" onSubmit={onSubmitForm}>

        <Input style={{
          marginBottom: '5px',
          fontColor: '#f5f6f7',
          backgroundColor: '#f5f6f7'
        }}
               id="title"
               value={title}
               onChange={onChangeTitle}
               placeholder=
                 "아이디어명을 적어주세요!"
               size={'large'}
        />

        <TextArea placeholder="당신의 아이디어를 발휘하세요!" style={{
          marginTop:15,
          backgroundColor: '#f5f6f7',
          height:300,
        }}
          value={contents} id="contents"
                  onChange={onChangeContents}
        />
        <ImgForm/>

        <Button type="primary"
                style={{
                  float: 'right',
                  marginTop: '5px',
                  borderRadius: '10',
                  borderColor: 'black',
                  backgroundColor: 'black'
                }}
                htmlType="submit">
          작성</Button>

      </Form>
    </>
  );
};

export default FreeThinkWrite;
