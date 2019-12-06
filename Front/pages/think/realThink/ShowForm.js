import React, {useCallback, useState} from 'react';
import 'antd/dist/antd.css';
import {Badge, Descriptions} from 'antd';
import {Carousel} from "react-bootstrap";
import {Tag} from 'antd';
import RealThinkImage from "./RealThinkImage";
import ImagesZoom from "./ImagesZoom";

const ShowForm = ({data,onZoom}) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <>
            <Descriptions title="제목" layout="vertical" bordered>
                <Descriptions.Item label="아이디어 명칭" span={3}>엄청난 아이디어</Descriptions.Item>
                <Descriptions.Item label="등록자">이문혁</Descriptions.Item>
                <Descriptions.Item label="발명자">이문혁</Descriptions.Item>
                <Descriptions.Item label="권리자(출원인)">이문혁</Descriptions.Item>
                <Descriptions.Item label="분야">
                    <Tag color="magenta">프론트</Tag>
                    <Tag color="gold">모바일</Tag>
                    <Tag color="blue">백엔드</Tag>
                </Descriptions.Item>
                <Descriptions.Item label="진행상황"><Badge status="processing" text="개발중"/></Descriptions.Item>
                <Descriptions.Item label="희망가격">1,000,000 원</Descriptions.Item>
                <Descriptions.Item label="개요" span={3}>
                    Data disk type: MongoDB
                    <br/>
                    Database version: 3.4
                    <br/>
                    Package: dds.mongo.mid
                    <br/>
                    Storage space: 10 GB
                    <br/>
                    Replication factor: 3
                    <br/>
                    Region: East China 1<br/>
                </Descriptions.Item>
                <Descriptions.Item label="핵심내용" span={3}>
                    Data disk type: MongoDB
                    <br/>
                    Database version: 3.4
                    <br/>
                    Package: dds.mongo.mid
                    <br/>
                    Storage space: 10 GB
                    <br/>
                    Replication factor: 3
                    <br/>
                    Region: East China 1<br/>
                </Descriptions.Item>
                <Descriptions.Item label="차별성" span={3}>
                    Data disk type: MongoDB
                    <br/>
                    Database version: 3.4
                    <br/>
                    Package: dds.mongo.mid
                    <br/>
                    Storage space: 10 GB
                    <br/>
                    Replication factor: 3
                    <br/>
                    Region: East China 1<br/>
                </Descriptions.Item>
            </Descriptions>
            <RealThinkImage onZoom={onZoom} data={data}/>
        </>
    )
};
export default ShowForm;