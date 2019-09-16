import React from 'react';
import {Card} from 'react-bootstrap';
import {Row,Col,Icon} from 'antd';

const PostCard = () => {
    return(
        <>
            <Card style={{ width: '100%', marginTop:'10px', marginLeft:'10px',marginRight:'10px'}}>
                <Row type="flex" justify="center">
                    <Col span={18}>
                        <Card.Body>
                            <Card.Title>제목</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">부제목</Card.Subtitle>
                            <Card.Text>
                                내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                            </Card.Text>
                            <Card.Link href="/realThinkRead">내용보기</Card.Link>
                        </Card.Body>
                    </Col>
                    <Col span={6}>
                        <Card.Img variant="top" src="/static/images/image1.jpg" style={{width:'100%',height:'auto'}} />
                    </Col>
                </Row>
            </Card>
        </>

    );
};

export default PostCard;