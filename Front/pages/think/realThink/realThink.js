import React from 'react';
import {Row, Col, Icon, Pagination, Descriptions, Badge} from 'antd'
import RealThinkCard from "../../../components/cards/realThinkCard";
import ThinkBar from "../../../components/bars/thinkBar";

const RealThink = () => {
    return(
        <>
            <Row type="flex" justify="center">
                <Col span={4}><ThinkBar/></Col>
                <Col span={16}>
                    <h3>리얼띵크 > IT <a href="/think/realThink/realThinkWrite"><Icon style={{float:'right', marginTop:'10px', marginRight:'10px'}} type="form" /></a> </h3>
                    <Descriptions title="User Info" layout="vertical" bordered>
                        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                        <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                        <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
                        <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
                        <Descriptions.Item label="Usage Time" span={2}>
                            2019-04-24 18:00:00
                        </Descriptions.Item>
                        <Descriptions.Item label="Status" span={3}>
                            <Badge status="processing" text="Running" />
                        </Descriptions.Item>
                        <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
                        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                        <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
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
                            Region: East China 1<br />
                        </Descriptions.Item>
                    </Descriptions>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <Pagination style={{textAlign:'center', margin:'30px'}} defaultCurrent={6} total={500} />
                </Col>
                <Col span={4}></Col>
            </Row>
        </>
    )
};

export default RealThink;