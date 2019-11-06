import React from 'react';
import {Row, Col, Icon,Pagination} from 'antd'
import PostCard from "../../../components/cards/postCard";
import ThinkBar from "../../../components/bars/thinkBar";

const RealThink = () => {
    return(
        <>
            <Row type="flex" justify="center">
                <Col span={4}><ThinkBar/></Col>
                <Col span={16}>
                    <h3>리얼띵크 > IT <a href="/realThinkWrite"><Icon style={{float:'right', marginTop:'10px', marginRight:'10px'}} type="form" /></a> </h3>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <Pagination style={{textAlign:'center', margin:'30px'}} defaultCurrent={6} total={500} />
                </Col>
                <Col span={4}></Col>
            </Row>
        </>
    )
};

export default RealThink;