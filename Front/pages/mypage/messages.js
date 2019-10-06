import React from 'react';
import {Col, Row,Tabs} from "antd";
import MyPageBar from "../../components/bars/myPageBar";
import MessageList from "../../container/messageList";
import ChatRoom from "../../components/ChatRoom";

const Messages = () => {
    return (
        <>
            <Row type="flex" justify="center">
                <Col span={4}><MyPageBar/></Col>
                <Col span={2}></Col>
                <Col span={12}>
                    <ChatRoom/>
                </Col>
                <Col span={6} style={{borderLeft:'1px solid #E6E6E6'}}>
                    <MessageList/>
                </Col>
            </Row>

        </>
    )
};

export default Messages;