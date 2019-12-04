import React, {useCallback, useRef, useState} from 'react';
import {Upload, Icon, Modal,Input} from 'antd';
import {useDispatch} from "react-redux";
import {uploadImage} from "../modules/reducer/freeThink";
import './imageForm.css';

const ImgForm = () => {
    const dispatch = useDispatch();
    const imageInput = useRef();
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([]);
    const [attaches,setAttaches] = useState('');

    const handleCancel = () => {
        setPreviewVisible(false);
    };

    const handleChange = ({file,fileList}) => {
        const attach = file.response;
        //파일리스트 업데이트
        setFileList(fileList);
        //리스폰 된 값 리덕스에 디스패치
        if(attach){
            setAttaches(attach);
            dispatch(
                uploadImage({
                    attaches
                })
            )
        }
    };

    const uploadButton = (
        <div>
            <Icon type="plus"/>
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    return (
        <>
            <div className="clearfix" style={{width:'100%', marginTop:'5px'}}>
                <Upload
                    action="http://localhost:8080/api/images"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={handleChange}
                    multiple
                    method='post'
                    headers={{
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal zIndex={3} visible={previewVisible} footer={null} onCancel={handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage}/>
                </Modal>
            </div>
        </>
    )
};

export default ImgForm;