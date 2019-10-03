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
        name: '댓글관련',
        age: 1,
        address: '저에게 욕설을 하였습니다',
        tags: ['답변대기'],
    },
    {
        key: '2',
        name: '판매관련',
        age: 2,
        address: '가격이 너무 비쌉니다.',
        tags: ['답변대기'],
    },
    {
        key: '3',
        name: '정기권구독',
        age: 3,
        address: '정기권 구독이 되지 않습니다.',
        tags: ['답변대기'],
    },
    {
        key: '4',
        name: '도용',
        age: 4,
        address: '제 아이디어를 도용했습니다.',
        tags: ['답변대기'],
    },
    {
        key: '5',
        name: '도용',
        age: 5,
        address: '저의 아이디어를 무단으로 사용했습니다.',
        tags: ['답변대기'],
    },
    {
        key: '6',
        name: '도용',
        age: 6,
        address: '제 아이디어를 일정부분 도용하고 금액을 지불하지 않았습니다.',
        tags: ['답변대기'],
    },
];

const Report = () => {
    return (
        <>
            <Row type="flex" justify="center">
                <Col span={2}></Col>
                <Col span={4}><MyPageBar/></Col>
                <Col span={12}>
                    <h1>신고 접수 내용</h1>
                    <Table columns={columns} dataSource={data} />
                </Col>
                <Col span={4}></Col>
                <Col span={2}></Col>
            </Row>

        </>
    )
};

export default Report;