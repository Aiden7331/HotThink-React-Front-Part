import React from 'react';
import {useSelector} from "react-redux";

import { Col, Row, } from 'antd';

import MyPageBar from '../components/bars/myPageBar';
import DashBoard from '../container/myPage/dashBoard';


const MyPage = () => {
  const { user } = useSelector(({ auth, user }) => ({
    user: user.user,
    auth: auth.auth,
    form: user.userUpdate,
    error: user.userUpdateError
  }));
  return (
    <>
      <Row type="flex" style={{minWidth:1000}}>
        <Col span={3}><MyPageBar/></Col>
        <Col span={21}>
          <div
            style={{
              margin:"5%",
              backgroundColor:'white',
              border:'1px solid',
              borderRadius:'8px',
              borderColor:'#ced4da',
            }}
          >
            <DashBoard user={user}/>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MyPage;
