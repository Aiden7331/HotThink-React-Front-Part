import React from 'react';
import {Row, Col, Icon} from 'antd'
import PostCard from "../container/postCard";
import ThinkBar from "../container/thinkBar";

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
                </Col>
                <Col span={4}></Col>
            </Row>
        </>
    )
};

export default RealThink;