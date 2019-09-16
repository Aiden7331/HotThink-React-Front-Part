import React from 'react';
import {Col, Icon, List, Row} from "antd";
import MyPageBar from "../../container/myPageBar";
import DashBoardCard from "../../components/dashBoardCard";


const DashBoard = () => {
    return(
        <>
            <Row type="flex" justify="center">
                <Col span={4}><MyPageBar/></Col>
                <Col span={16}>
                    <div style={{width:'100%',display:'inline-block'}}>
                        <DashBoardCard title={'내 프로필'}/>
                        <DashBoardCard title={'최근 관심 Think'}/>
                        <DashBoardCard title={'내 통계'}/>
                        <DashBoardCard title={'나의 이력'}/>
                        <DashBoardCard title={'스크랩'}/>
                        <DashBoardCard title={'Q&A'}/>
                    </div>
                </Col>
                <Col span={4}></Col>
            </Row>

        </>
    )
};

export default DashBoard;