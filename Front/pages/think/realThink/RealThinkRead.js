import React from 'react';
import {Row, Col, Button,Descriptions, Badge} from 'antd';

const RealThinkRead = () => {
    return (
        <>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Descriptions
                        title="Responsive Descriptions"
                        bordered
                        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                    >
                        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                        <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
                        <Descriptions.Item label="time">18:00:00</Descriptions.Item>
                        <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                        <Descriptions.Item label="Official">$60.00</Descriptions.Item>
                        <Descriptions.Item label="Config Info">
                            Data disk type: MongoDB
                            <br />
                            Database version: 3.4
                            <br />
                            Package: dds.mongo.mid
                            <br />
                            Storage space: 10 GB
                            <br />
                            Replication factor: 3
                            <br />
                            Region: East China 1
                        </Descriptions.Item>
                    </Descriptions>
                    <a href='/trade'><Button style={{marginLeft:'45%', marginTop:'50px', marginBottom:'50px'}} variant="primary">거래신청</Button></a>
                </Col>
                <Col span={4}></Col>
            </Row>
        </>
    );
};

export default RealThinkRead;
