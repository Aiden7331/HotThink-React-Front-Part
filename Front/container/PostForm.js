import React, {useCallback, useState, useRef} from 'react';
import {Form, Button} from 'antd';
import TextareaAutosize from "react-textarea-autosize";
import ImgForm from "../components/imgForm";

const PostForm = () => {
    const [text, setText] = useState('');
    const imageInput = useRef();

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        if (!text || !text.trim()) {
            return alert('게시글을 작성하세요.');
        }
    },[]);

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

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
                            value={text}
                            onChange={onChangeText}
                            autoFocus={true}/>
                        <hr style={{
                            borderWidth: '1px 0px 0px 0px',
                            borderColor: '#e6e6e6',
                            width: '98%',
                            align: 'center',
                            margin:'0px 0px 0px 0px',
                        }}/>

                        <div style={{margin:'5px'}}>
                            <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages}/>
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

export default PostForm;