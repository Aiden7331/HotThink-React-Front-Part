import React from 'react';
import {Col, Row,Tabs} from "antd";
import MyPageBar from "../../container/myPageBar";

const Messages = () => {
    return (
        <>
            <Row type="flex" justify="center">
                <Col span={2}></Col>
                <Col span={4}><MyPageBar/></Col>
                <Col span={12}>

                </Col>
                <Col span={4}></Col>
                <Col span={2}></Col>
            </Row>

        </>
    )
};

export default Messages;