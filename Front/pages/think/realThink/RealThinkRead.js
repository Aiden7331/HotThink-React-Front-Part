import React, {useCallback, useState} from 'react';
import {Row, Col, Button,Descriptions, Badge} from 'antd';
import ShowForm from "./ShowForm";
import ImagesZoom from "./ImagesZoom";
import {useSelector} from "react-redux";

const data =[
    {attaches:'/static/images/loa1.jpg',contents:'배경이미지'},
    {attaches:'/static/images/loa2.jpg',contents:'게임 속 배경'},
    {attaches:'/static/images/loa3.jpg',contents:'게임 플레이 화면1'},
    {attaches:'/static/images/loa4.jpg',contents:'게임 플레이 화면2'},
    {attaches:'/static/images/loa5.jpg',contents:'게임 플레이 화면3'},
    {attaches:'/static/images/loa6.jpg',contents:'게임 플레이 화면4'},
    {attaches:'/static/images/loa7.jpg',contents:'게임 플레이 화면5'},
    {attaches:'/static/images/loa8.jpg',contents:'게임 플레이 화면6'},
    {attaches:'/static/images/loa9.jpg',contents:'게임 플레이 화면7'},
];

const RealThinkRead = () => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);

    const {} = useSelector(({})=>({

    }));

    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);

    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []);

    const onBackDrop = useCallback(() => {
        setShowImagesZoom(false);
    }, []);
    return (
        <>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <ShowForm data={data} onZoom={onZoom}/>
                    <a href='/trade'><Button style={{marginLeft:'45%', marginTop:'50px', marginBottom:'50px'}} variant="primary">거래신청</Button></a>
                </Col>
                <Col span={4}></Col>
            </Row>
            {showImagesZoom && <ImagesZoom onClose={onClose} onBackDrop={onBackDrop} data={data}/>}
        </>
    );
};

export default RealThinkRead;
