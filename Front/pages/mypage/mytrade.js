import React from 'react';
import {Col, Row,Tag,Table} from "antd";
import MyPageBar from "../../components/bars/myPageBar";

const columns = [
    {
        title: '번호',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '분류',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '제목',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '단계',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
        {tags.map(tag => {
            return (
                <Tag color={'volcano'} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        })}
      </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'IT',
        age: 1,
        address: '완전 새로운 방식의 도메인 활용법',
        tags: ['입금대기'],
    },
    {
        key: '2',
        name: 'IT',
        age: 2,
        address: '인공지능을 활용한 대박 사업 아이디어',
        tags: ['입금대기'],
    },
    {
        key: '3',
        name: 'IT',
        age: 3,
        address: '블록체인을 활용한 코인 메인넷 작성 활용',
        tags: ['입금대기'],
    },
    {
        key: '4',
        name: '화학',
        age: 4,
        address: '핵융합 발전을 통한 에너지 산업 활용 방안',
        tags: ['입금대기'],
    },
    {
        key: '5',
        name: '건축',
        age: 5,
        address: '탄소 나노튜브 신소재를 이용한 건축 신재생 방안 도입',
        tags: ['입금대기'],
    },
    {
        key: '6',
        name: '디자인',
        age: 6,
        address: '90년대로 돌아가서 다시 떠오르는 핫 디자인',
        tags: ['입금대기'],
    },
];


const MyTrade = () => {
    return (
        <>
            <Row type="flex" justify="center">
                <Col span={2}></Col>
                <Col span={4}><MyPageBar/></Col>
                <Col span={12}>
                    <h1>구매내역</h1>
                    <Table columns={columns} dataSource={data} style={{marginBottom:'30px'}}/>
                    <h1>판매내역</h1>
                    <Table columns={columns} dataSource={data} style={{marginBottom:'30px'}}/>
                </Col>
                <Col span={4}></Col>
                <Col span={2}></Col>
            </Row>

        </>
    )
};

export default MyTrade;