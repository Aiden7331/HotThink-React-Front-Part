import React,{useState} from 'react';
import ThinkBar from "../container/thinkBar";
import {Row,Col,List,Avatar,Icon,Pagination} from 'antd';
import {Modal} from 'react-bootstrap';
import PostForm from "../container/PostForm";
import FreeThinkCard from "../components/freeThinkCard";

const FreeThink =() => {
    const [writeShow,setWriteShow] = useState(false);
    return(
        <>
            <Row type="flex" justify="center">
                <Col span={4}><ThinkBar/></Col>
                <Col span={16}>
                    <h3>프리띵크 > IT<a onClick={()=>setWriteShow(true)}><Icon style={{float:'right', marginTop:'10px', marginRight:'10px'}} type="form" /></a></h3>
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
            <Modal
                show={writeShow}
                onHide={() => setWriteShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"

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
        </>
    )
};

export default FreeThink;