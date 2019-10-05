import React, {useState} from 'react';
import {Col, Icon, List, Pagination, Row} from "antd";
import ThinkBar from "../components/bars/thinkBar";
import FreeThinkCard from "../components/cards/freeThinkCard";
import {Modal} from "react-bootstrap";
import PostForm from "../container/PostForm";

const listData =[];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            '너무너무 좋은 아이디어입니다.',
    });
}

const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);

const HotThink = () => {
    return(
        <>
            <Row type="flex" justify="center">
                <Col span={4}><ThinkBar/></Col>
                <Col span={16}>
                    <h3>핫띵크 > IT</h3>
                    <FreeThinkCard />
                    <FreeThinkCard />
                    <FreeThinkCard />
                    <FreeThinkCard />
                    <FreeThinkCard />
                    <FreeThinkCard />
                    <FreeThinkCard />
                    <FreeThinkCard />
                    <Pagination style={{textAlign:'center', margin:'30px'}} defaultCurrent={6} total={500} />
                </Col>
                <Col span={4}></Col>
            </Row>
            <Modal>
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        FreeThink 글 작성
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PostForm/>
                </Modal.Body>
            </Modal>
        </>
    )
};

export default HotThink;