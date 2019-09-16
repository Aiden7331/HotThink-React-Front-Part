import React from 'react';
import {Row,Col} from 'antd';
import PostCard from '../container/PostCard';

const PostScript = () => {
    return(
        <>
            <Row type="flex" justify="center">
                <Col span={4}></Col>
                <Col span={16}>
                   후기게시판
                </Col>
                <Col span={4}></Col>
            </Row>
        </>
    )
};

export default PostScript;