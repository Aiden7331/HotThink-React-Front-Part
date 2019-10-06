import React from 'react';
import {Col, Row, Button, Avatar,Rate,Tabs} from "antd";
import {Image} from 'react-bootstrap';
import MyPageBar from "../../components/bars/myPageBar";
import TagGroup from "../../components/tag";
import UserWrote from "../../container/userWrote";
import Notice from "../../container/notice";

const {TabPane} = Tabs;

function callback(key) {
    console.log(key);
}

const DashBoard = () => {
    return (
        <>
            <Row type="flex" justify="center">
                <Col span={4}><MyPageBar/></Col>
                <Col span={14}>
                    <Row>
                        <div style={{overflow:'hidden',height:'auto'}}>
                            <Image src="/static/images/image1.jpg"
                                   roundedCircle style={{position:'absolute', marginTop:'50px', marginLeft:'5%', width:'150px', height:'150px'}}
                            />
                            <div style={{height:'150px', backgroundColor:'#E6E6E6'}}></div>
                            <div style={{overflow:'hidden',height:'auto', backgroundColor:'white', borderBottom:'1px solid #E6E6E6'}}>
                                <Button type="primary" shape="round" style={{float:'right', marginRight:'20px', marginTop:'10px'}}>
                                    프로필수정
                                </Button>
                                <div style={{paddingTop:'70px', marginLeft:'5%'}}>
                                    <div style={{ display:'inline-block' ,width:'280px'}}>
                                        <h5 style={{fontSize:'30px'}}>이문혁</h5>
                                        <h5 style={{fontSize:'15px', display:'inline-block'}}>똘이장군</h5>
                                        <TagGroup/>
                                    </div>
                                    <div style={{ float:'right', marginTop:'50px', marginRight:'20px' ,position:'absuolute'}}>
                                    <h1>10,000,000 Pt</h1>
                                    </div>
                                </div>
                                <div style={{ width:'100%', textAlign:'center', marginBottom:'50px'}}>
                                    <Avatar style={{width: '150px', height: '150px', marginTop: '30px'}}>
                                        <div>
                                            <Rate style={{marginTop: '40%'}} allowHalf defaultValue={4.5}/>
                                        </div>
                                        <h5 style={{fontSize: '15px'}}>게시물 평점 평균</h5>
                                    </Avatar>
                                    <Avatar
                                        style={{width: '150px', height: '150px', marginLeft: '5%', marginTop: '30px'}}>
                                        <div>
                                            <Rate style={{marginTop: '40%'}} allowHalf defaultValue={3.5}/>
                                        </div>
                                        <h5 style={{fontSize: '15px'}}>투자자 평점 평균</h5>
                                    </Avatar>
                                    <Avatar
                                        style={{width: '150px', height: '150px', marginLeft: '5%', marginTop: '30px'}}>
                                        <h1 style={{marginTop: '65%'}}>69일</h1>
                                    </Avatar>
                                </div>
                            </div>
                        </div>
                        <div>
                        <Tabs defaultActiveKey="1" size={"large"} tabBarStyle={{width:'100%', textAlign:'center'}} onChange={callback}>
                            <TabPane style={{width:'100%'}} tab="내가 쓴 글" key="1">
                                <UserWrote/>
                            </TabPane>
                            <TabPane style={{width:'100%'}} tab="관심 Think" key="2">
                                <UserWrote/>
                            </TabPane>
                            <TabPane style={{width:'100%'}} tab="스크랩" key="3">
                                <UserWrote/>
                            </TabPane>
                            <TabPane style={{width:'100%'}} tab="알림" key="4">
                                <Notice/>
                            </TabPane>
                        </Tabs>
                        </div>
                    </Row>
                </Col>
                <Col span={4}></Col>
                <Col span={2}></Col>
            </Row>

        </>
    )
};

export default DashBoard;