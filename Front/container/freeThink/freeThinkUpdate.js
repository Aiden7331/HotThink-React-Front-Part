import React, {useCallback, useState, useRef, useEffect} from 'react';
import {Form, Button,Input} from 'antd';
import TextareaAutosize from "react-textarea-autosize";
import ImgForm from "../../components/imgForm";
import {useDispatch, useSelector} from "react-redux";
import {initialize, changeField, updateFreeThink, setOriginalFreeThink} from "../../modules/reducer/freeThink";

const FreeThinkUpdate = ({think}) => {
    const imageInput = useRef();
    const dispatch = useDispatch();
    const {title,contents,image,post,error,category,id} = useSelector(({freeThink})=>({
        title:freeThink.title,
        contents:freeThink.contents,
        image:freeThink.image,
        post:freeThink.freeThink,
        error:freeThink.freeThinkError,
        category:freeThink.category,
        id:freeThink.originalPostId,
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
        )
    },[dispatch,title,contents,image,category,id]);

    //성공 혹은 실패시 작업
    useEffect(()=>{
        if(post){
            //success
        }

        if(error){
            console.log(error);
        }
    },[post,error]);

    const onChangeField = useCallback(payload=>dispatch(changeField(payload)),[
        dispatch
    ]);

    const onChangeTitle = e =>{
        onChangeField({key:'title',value:e.target.value})
    };
    const onChangeContents = e =>{
        onChangeField({key:'contents',value:e.target.value})
    };
    //언마운트될때 초기화
    useEffect(()=>{
        return()=>{
            dispatch(initialize());
        };
    },[dispatch]);

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
          <Form style={{margin: '0px 0 10px'}} encType="multipart/form-data" onSubmit={onSubmitForm}>
              <Input style={{marginBottom:'3px'}} id="title" value={title} onChange={onChangeTitle} placeholder="제목" />
              <div style={{
                  height: "auto",
                  overflow: "hidden",
                  background: 'white',
                  border: '1px solid #e6e6e6'
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
                            height: 'auto'
                        }}
                        placeholder="당신의 아이디어를 발휘하세요!"
                        value={contents}
                        id="contents"
                        onChange={onChangeContents}
                        autoFocus={true}/>
                      <hr style={{
                          borderWidth: '1px 0px 0px 0px',
                          borderColor: '#e6e6e6',
                          width: '98%',
                          align: 'center',
                          margin:'0px 0px 0px 0px',
                      }}/>

                      <div style={{margin:'5px'}}>
                          <input type="file" id="image" value={image} multiple hidden ref={imageInput} onChange={onChangeImages}/>
                          <ImgForm/>
                      </div>
                  </div>
              </div>
              <Button type="primary" style={{float: 'right',marginTop:'5px', borderRadius: '0'}}
                      htmlType="submit" >작성</Button>
          </Form>
      </>
    );
};

export default FreeThinkUpdate;
