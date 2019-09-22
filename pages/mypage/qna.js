import React from 'react';
import {Col, Divider, Row, Table, Tabs, Tag} from "antd";
import MyPageBar from "../../container/myPageBar";

const columns = [
    {
        title: '번호',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '질문 유형',
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
        title: '답변 여부',
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
        name: '구매관련',
        age: 1,
        address: 'New York No. 1 Lake Park',
        tags: ['답변대기'],
    },
    {
        key: '2',
        name: '판매관련',
        age: 2,
        address: 'New York No. 1 Lake Park',
        tags: ['답변대기'],
    },
    {
        key: '3',
        name: '정기권구독',
        age: 3,
        address: 'New York No. 1 Lake Park',
        tags: ['답변대기'],
    },
    {
        key: '4',
        name: '기타',
        age: 4,
        address: 'New York No. 1 Lake Park',
        tags: ['답변대기'],
    },
    {
        key: '5',
        name: '기타',
        age: 5,
        address: 'New York No. 1 Lake Park',
        tags: ['답변대기'],
    },
    {
        key: '6',
        name: '회원가입',
        age: 6,
        address: 'New York No. 1 Lake Park',
        tags: ['답변대기'],
    },
];

const QNA = () => {
    return (
        <>
            <Row type="flex" justify="center">
                <Col span={2}></Col>
                <Col span={4}><MyPageBar/></Col>
                <Col span={12}>
                    <h1>Q&A</h1>
                    <Table columns={columns} dataSource={data} />
                </Col>
                <Col span={4}></Col>
                <Col span={2}></Col>
            </Row>

        </>
    )
};

export default QNA;