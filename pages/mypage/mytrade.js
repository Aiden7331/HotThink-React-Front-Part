import React from 'react';
import {Col, Row,Tag,Table} from "antd";
import MyPageBar from "../../container/myPageBar";

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
        address: 'New York No. 1 Lake Park',
        tags: ['입금대기'],
    },
    {
        key: '2',
        name: 'IT',
        age: 2,
        address: 'New York No. 1 Lake Park',
        tags: ['입금대기'],
    },
    {
        key: '3',
        name: '기계',
        age: 3,
        address: 'New York No. 1 Lake Park',
        tags: ['입금대기'],
    },
    {
        key: '4',
        name: '화학',
        age: 4,
        address: 'New York No. 1 Lake Park',
        tags: ['입금대기'],
    },
    {
        key: '5',
        name: '건축',
        age: 5,
        address: 'New York No. 1 Lake Park',
        tags: ['입금대기'],
    },
    {
        key: '6',
        name: '디자인',
        age: 6,
        address: 'New York No. 1 Lake Park',
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