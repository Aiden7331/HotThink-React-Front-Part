import React from 'react';
import {Col, Icon, List, Row} from "antd";
import MyPageBar from "../container/myPageBar";


const MyPage = () => {
    return(
        <>
            <Row type="flex" justify="center">
                <Col span={4}><MyPageBar/></Col>
                <Col span={16}>
                    마이페이지
                </Col>
                <Col span={4}></Col>
            </Row>

        </>
    )
};

export default MyPage;