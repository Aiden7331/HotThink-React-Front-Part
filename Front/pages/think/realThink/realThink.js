import React from 'react';
import Link from 'next/Link';
import {Row, Col, Icon, Pagination, Descriptions, Badge} from 'antd'
import RealThinkCard from "../../../components/cards/realThinkCard";
import ThinkBar from "../../../components/bars/thinkBar";

const RealThink = () => {
    return(
        <>
            <Row type="flex" justify="center">
                <Col span={4}><ThinkBar/></Col>
                <Col span={16}>
                    <h3>리얼띵크 > IT <Link href="/think/realThink/realThinkWrite"><a><Icon style={{float:'right', marginTop:'10px', marginRight:'10px'}} type="form" /></a></Link></h3>
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