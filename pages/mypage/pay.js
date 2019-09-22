import React from 'react';
import {Form, Card, Button} from 'react-bootstrap';
import {Row, Col} from 'antd';

const Pay = () => {

    return (
        <>
            <Row>
                <Col span={6}></Col>
                <Col span={12}>
                    <div style={{marginBottom: '100px'}}>
                        <Form>
                            <Form.Group>
                                <h1 style={{textAlign: "center"}}>구독권 결제</h1>
                                <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                >
                                    <div style={{backgroundColor: 'red', width: '100%'}}>
                                        <Card bg="danger" text="white" style={{width: '100%', marginBottom: '30px'}}>
                                            <Card.Header>1개월권</Card.Header>
                                            <Card.Body>
                                                <Card.Title>1개월 결제권</Card.Title>
                                                <Card.Text>
                                                    10,000원
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Form.Check>
                                <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                >
                                    <div style={{backgroundColor: 'yellow', width: '100%'}}>
                                        <Card bg="warning" text="white" style={{width: '100%', marginBottom: '30px'}}>
                                            <Card.Header>3개월권</Card.Header>
                                            <Card.Body>
                                                <Card.Title>3개월 결제권</Card.Title>
                                                <Card.Text>
                                                    25,000원
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Form.Check>
                                <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                >
                                    <div>
                                        <Card bg="success" text="white" style={{width: '100%', marginBottom: '30px'}}>
                                            <Card.Header>6개월권</Card.Header>
                                            <Card.Body>
                                                <Card.Title>6개월 결제권</Card.Title>
                                                <Card.Text>
                                                    50,000원
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Form.Check>
                                <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios4"
                                >
                                    <div style={{backgroundColor: 'blue', width: '100%'}}>
                                        <Card bg="info" text="white" style={{width: '100%'}}>
                                            <Card.Header>12개월권</Card.Header>
                                            <Card.Body>
                                                <Card.Title>12개월 결제권</Card.Title>
                                                <Card.Text>
                                                    100,000원
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Form.Check>
                            </Form.Group>
                            <Button variant="primary" type="submit" style={{position: 'relative', left: '45%'}}>
                                결제하기
                            </Button>
                        </Form>
                    </div>
                    <fieldset>
                        <h1 style={{textAlign: 'center'}}>프리패스권 결제</h1>
                        <Form>
                            <Form.Group>
                                <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    style={{}}
                                >
                                    <div style={{backgroundColor: 'red', width: '100%'}}>
                                        <Card bg="danger" text="white">
                                            <Card.Header>HotThink 프리패스권</Card.Header>
                                            <Card.Body>
                                                <Card.Title>HotThink 프리패스권</Card.Title>
                                                <Card.Text>
                                                    20,000원
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Form.Check>
                            </Form.Group>
                            <Button variant="primary" type="submit" style={{position: 'relative', left: '45%'}}>
                                결제하기
                            </Button>
                        </Form>
                    </fieldset>
                </Col>
                <Col span={6}></Col>
            </Row>
        </>
    );
};

export default Pay;