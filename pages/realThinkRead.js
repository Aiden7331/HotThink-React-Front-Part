import React from 'react';
import {Row, Col, Icon,Button} from 'antd';

const RealThinkRead = () => {
    return (
        <>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <img style={{width:'100%', height:'auto'}} src='/static/images/111.png'/>
                    <a href='/trade'><Button style={{marginLeft:'45%', marginTop:'50px', marginBottom:'50px'}} variant="primary">거래신청</Button></a>
                </Col>
                <Col span={4}></Col>

            </Row>
        </>
    );
};

export default RealThinkRead;