import React, {useCallback, useState} from 'react';
import {Row, Col, Button,Descriptions, Badge} from 'antd';
import ShowForm from "./ShowForm";
import ImagesZoom from "./ImagesZoom";
import {useSelector} from "react-redux";

const data =[
    {attaches:'/static/images/image1.jpg',contents:1},
    {attaches:'/static/images/image1.jpg',contents:2},
    {attaches:'/static/images/image1.jpg',contents:3},
    {attaches:'/static/images/image1.jpg',contents:4},
    {attaches:'/static/images/image1.jpg',contents:5},
    {attaches:'/static/images/image1.jpg',contents:6},
    {attaches:'/static/images/image1.jpg',contents:7},
    {attaches:'/static/images/image1.jpg',contents:8},
    {attaches:'/static/images/image1.jpg',contents:9},
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
