import React from 'react';
import {Card} from 'react-bootstrap';
import {Row,Col,Icon} from 'antd';
import Link from "next/Link";

const RealThinkCard = () => {
    return(
        <>
            <Card style={{ width: '100%', marginTop:'10px', marginLeft:'10px',marginRight:'10px'}}>
                <Row type="flex" justify="center">
                    <Col span={18}>
                        <Card.Body>
                            <Card.Title>아이디어 공유 사이트</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">핫 띵크</Card.Subtitle>
                            <Card.Text>
                                아이디어를 공유하고 판매하는 사이트를 생각중입니다.
                            </Card.Text>
                            <Link href='/think/realThink/RealThinkRead'><a>
                                내용보기
                            </a>
                            </Link>
                        </Card.Body>
                    </Col>
                    <Col span={6}>
                        <Card.Img variant="top" src="/static/images/image4.jpg" style={{width:'100%',height:'auto'}} />
                    </Col>
                </Row>
            </Card>
        </>

    );
};

export default RealThinkCard;