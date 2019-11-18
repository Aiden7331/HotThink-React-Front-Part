import React from 'react';
import {Carousel, Card, CardDeck} from 'react-bootstrap';
import {Icon} from 'antd';

const CardSlick = () => {
    return (
        <>
        <Carousel
        nextIcon={<Icon type="right" style={{color:'black'}} />}
        prevIcon={<Icon type="left" style={{color:'black'}} />}
        style={{paddingLeft:'150px',paddingRight:'150px', marginLeft:'10px', height:'200px'}}
        >
            <Carousel.Item style={{height:'500px'}}>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="/static/images/image4.jpg" style={{width: '100%', height:'40%'}} />
                        <Card.Body>
                            <Card.Title>아이디어 공유사이트</Card.Title>
                            <hr/>
                            <Card.Text>
                                아이디어를 사고 파는 사이트 라는 생각을 해보았다.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/static/images/image5.jpg" style={{width: '100%', height:'40%'}} />
                        <Card.Body>
                            <Card.Title>TFT</Card.Title>
                            <hr/>
                            <Card.Text>
                                팀 매칭 시스템
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/static/images/image6.jpg" style={{width: '100%', height:'40%'}}/>
                        <Card.Body>
                            <Card.Title>학사정보시스템</Card.Title>
                            <hr/>
                            <Card.Text>
                                새롭게 발전한 학사정보시스템
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/static/images/image7.jpg" style={{width: '100%', height:'40%'}}/>
                        <Card.Body>
                            <Card.Title>마리오 승익</Card.Title>
                            <hr/>
                            <Card.Text>
                                승익이가 마리오네트가 된다.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Carousel.Item>
        </Carousel>
        </>
    );
};

export default CardSlick;
