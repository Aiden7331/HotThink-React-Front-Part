import React, { useCallback, useState, useRef, useEffect } from 'react';
import { Form, Button, Input } from 'antd';
import ImgForm from '../../components/imgForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  initialize,
  changeField,
  updateFreeThink,
  setOriginalFreeThink
} from '../../modules/reducer/freeThink';
import { useRouter } from 'next/router';

const { TextArea } = Input;

const FreeThinkUpdate = ({ think, onClose }) => {
  const router = useRouter();
  const imageInput = useRef();
  const dispatch = useDispatch();
  const { title, contents, image, post, error, category, id } = useSelector(({ freeThink }) => ({
    title: freeThink.title,
    contents: freeThink.contents,
    image: freeThink.image,
    post: freeThink.freeThink,
    error: freeThink.freeThinkError,
    category: freeThink.category,
    id: think.bdSeq,
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
      updateFreeThink({
        id,
        title,
        contents,
        image,
        category,
      })
    );
  }, [dispatch, title, contents, image, category, id]);

  //성공 혹은 실패시 작업
  useEffect(() => {
    dispatch(changeField({
      key: 'title',
      value: think.title
    }));
    dispatch(changeField({
      key: 'contents',
      value: think.contents
    }));
    if (post==='') {
      //success
      onClose();
      router.push({
        pathname: '/think/myFreeThink',
        query: {
          sb: 0,
          sz: 5,
          pg: 1,
          category: think.category,
          ob: 0
        }
      });
    }

    if (error) {
      console.log(error);
    }
  }, [post, error]);

  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch
  ]);

  const onChangeTitle = e => {
    onChangeField({
      key: 'title',
      value: e.target.value
    });
  };
  const onChangeContents = e => {
    onChangeField({
      key: 'contents',
      value: e.target.value
    });
  };
  //언마운트될때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
      dispatch(changeField({
        key: 'category',
        value: category
      }));
    };
  }, [dispatch]);

  const onChangeImages = useCallback((e) => {
    console.log(e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
  }, []);

  const onClickImageUpload = useCallback(() => {

  }, []);

  const onRemoveImage = useCallback(index => () => {

  }, []);


  return (
    <>
      <Form style={{
        margin: '0px 0 10px',
        fontFamily: 'Noto Sans KR',
      }} encType="multipart/form-data" onSubmit={onSubmitForm}>
        <Input style={{
          marginBottom: '3px',
          fontColor: '#f5f6f7',
          backgroundColor: '#f5f6f7'
        }} id="title" value={title} onChange={onChangeTitle}
               placeholder="제목"/>

        <TextArea placeholder="당신의 아이디어를 발휘하세요!" style={{
          marginTop: 15,
          backgroundColor: '#f5f6f7',
          height: 300,
        }}
                  value={contents} id="contents"
                  onChange={onChangeContents}
        />

        <div style={{ margin: '5px' }}>
          <input type="file" id="image" value={image} multiple hidden ref={imageInput}
                 onChange={onChangeImages}/>
          <ImgForm/>
        </div>
        <Button type="primary"
                style={{
                  float: 'right',
                  marginTop: '5px',
                  borderRadius: '10',
                  borderColor: 'black',
                  backgroundColor: 'black'
                }}
                htmlType="submit">
          수정</Button>
      </Form>
    </>
  );
};

export default FreeThinkUpdate;
