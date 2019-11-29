import React, {useState} from 'react';
import {Upload, Icon, Modal} from 'antd';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const ImgForm = ({previewVisible,previewImage,fileList,handleCancel,handlePreview,handleChange}) => {
    const uploadButton = (
        <div>
            <Icon type="plus"/>
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    return (
        <div className="clearfix">
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                multiple
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal zIndex={3} visible={previewVisible} footer={null} onCancel={handleCancel}>
                <img alt="example" src={previewImage}/>
            </Modal>
        </div>
    )
};

export default ImgForm;