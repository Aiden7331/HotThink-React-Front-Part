import React from 'react';
import {Row,Col} from 'antd';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const RealThinkWrite = () => {
    return(
        <>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Form>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>제목</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleText" sm={2}>Text Area</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleFile" sm={2}>File</Label>
                        <Col sm={10}>
                            <Input type="file" name="file" id="exampleFile" />
                            <FormText color="muted">
                                This is some placeholder block-level help text for the above input.
                                It's a bit lighter and easily wraps to a new line.
                            </FormText>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="checkbox2" sm={2}>Checkbox</Label>
                        <Col sm={{ size: 10 }}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox2" />{' '}
                                    Check me out
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
                </Col>
                <Col span={4}></Col>
            </Row>
        </>
    );
};

export default RealThinkWrite;


