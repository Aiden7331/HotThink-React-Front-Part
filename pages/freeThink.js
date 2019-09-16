import React,{useState} from 'react';
import ThinkBar from "../container/thinkBar";
import {Row,Col,List,Avatar,Icon} from 'antd';
import {Modal} from 'react-bootstrap';
import PostForm from "../container/PostForm";
import FreeThinkRead from "../container/freeThinkRead";

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

const FreeThink =() => {
    const [writeShow,setWriteShow] = useState(false);
    const [readShow,setReadShow] = useState(false);
    return(
        <>
            <Row type="flex" justify="center">
                <Col span={4}><ThinkBar/></Col>
                <Col span={16}>
                    <h3>프리띵크 > IT<a onClick={()=>setWriteShow(true)}><Icon style={{float:'right', marginTop:'10px', marginRight:'10px'}} type="form" /></a></h3>
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 10,
                        }}
                        dataSource={listData}
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                actions={[
                                    <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                                    <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                                    <IconText type="message" text="2" key="list-vertical-message" />,
                                ]}
                                extra={
                                    <img
                                        width={272}
                                        alt="logo"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                        onClick={()=>setReadShow(true)}
                                    />
                                }
                            >
                                {item.content}
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={4}></Col>
            </Row>
            <Modal
                show={writeShow}
                onHide={() => setWriteShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                z
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        FreeThink 글 작성
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PostForm/>
                </Modal.Body>
            </Modal>
            <Modal
                show={readShow}
                onHide={() => setReadShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        FreeThink 글 읽기
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FreeThinkRead/>
                </Modal.Body>
            </Modal>
        </>
    )
};

export default FreeThink;