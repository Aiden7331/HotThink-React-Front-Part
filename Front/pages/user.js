import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Col,
  Icon,
  Rate,
  Row,
  Tabs,
  Tag,
} from 'antd';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Card, Carousel } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import qs from 'qs';
import { targetUser } from '../modules/reducer/user';

const { TabPane } = Tabs;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 800,
    width: '100%',
  },
}));

const User = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [crsIndex, setCrsIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const crsHandle = (selectedIndex, e) => {
    setCrsIndex(selectedIndex);
    setDirection(e.direction);
  };

  const userBoardsSlice = (boards) => {
    const list = [];
    for (let i = 0; i < boards.length; i = i + 3) {
      list.push(boards.slice(i, i + 3));
    }
    return list;
  };

  useEffect(
    () => {
      const nickName = qs.parse(router.query, { ignoreQueryPrefix: true });
      dispatch(targetUser({ nickName }));
    }, [dispatch, router.query]);

  const { TargetUser } = useSelector(({ user }) => ({
    TargetUser: user.target,
  }));

  return (
    <>
      <div style={{
        borderRadius: 5,
        height: 120,
        backgroundColor: '#495057'
      }}>
        <Avatar size={256} shape={'square'}
                style={{
                  marginTop: '50px',
                  marginLeft: '5%',
                }}
        >
          {TargetUser ?
            TargetUser.profileImg ?
              ''
              :
              <Icon type="user-add" style={{ fontSize: 128 }}/>
            :
            ''
          }
        </Avatar>
      </div>

      <Row>
        <Col span={18}>
          <div style={{
            padding: '10%',
          }}>
            <div style={{
              fontFamily: 'Noto Sans KR',
              fontWeight: 500,
              textAlign:'center',
            }}>
          <span style={{
            fontSize: 48,
            color: '#343a40',
          }}>{TargetUser ? TargetUser.nickName : ''}</span>
            </div>

            <div style={{paddingTop:20}}>
              {
                TargetUser ? TargetUser.preferenceList.map(preference =>
                  <Tag color="magenta" style={{ fontFamily: 'Noto Sans KR', fontSize:18 }}>{preference}</Tag>
                ) : ''
              }
            </div>

            <Row type="flex" justify="space-around" align="middle"
                 style={{ padding: '5%' }}
            >
              <Col>
                <Avatar style={{
                  backgroundColor: '#f1f3f5',
                  width: '150px',
                  height: '150px',
                  marginTop: '30px',
                }}>
                  <div>
                    <Rate style={{ marginTop: '40%' }} allowHalf defaultValue={4.5}/>
                  </div>
                  <h5 style={{
                    fontSize: '15px',
                    fontFamily: 'Noto Sans KR',
                  }}>게시물 평점 평균</h5>
                </Avatar>
              </Col>
              <Col>
                <Avatar
                  style={{
                    backgroundColor: '#f1f3f5',
                    width: '150px',
                    height: '150px',
                    marginTop: '30px'
                  }}>
                  <div>
                    <Rate style={{ marginTop: '40%' }} allowHalf defaultValue={3.5}/>
                  </div>
                  <h5 style={{
                    fontFamily: 'Noto Sans KR',
                    fontSize: '15px'
                  }}>투자자 평점 평균</h5>
                </Avatar>
              </Col>

            </Row>

            <Tabs defaultActiveKey="1" size={'large'} tabBarStyle={{
              width: '100%',
              textAlign: 'center',
            }}
              // onChange={callback}
            >
              <TabPane style={{
                width: '100%',
                height: 300,
              }} tab="내가 쓴 글" key="1">
                <Row type="flex" justify="center">
                  <Col>
                    <Carousel
                      fade
                      activeIndex={crsIndex} direction={direction} onSelect={crsHandle}
                      style={{
                        borderRadius: 10,
                        border: '2px solid',
                        borderColor: '#f1f3f5',
                        width: 900,
                        height: 300,
                        backgroundColor: '#EEFFEE'
                      }}
                    >
                      {TargetUser ?
                        userBoardsSlice(TargetUser.boards)
                          .map(boardsList =>
                            <Carousel.Item>
                              <Row style={{
                                marginTop: '5%',
                                height: 200,
                              }}>
                                {boardsList.map(
                                  board =>
                                    <Col span={8} style={{ padding: 10 }}>
                                      <Card className={board.image ? '' : 'text-white'}
                                            style={{
                                              fontFamily: 'Noto Sans KR',
                                              fontWeight: 500
                                            }}
                                      >
                                        <Card.Img
                                          src={board.image ? board.image : '/static/images/default.png'}
                                          alt="Card image"/>
                                        <Card.ImgOverlay>
                                          <Card.Title
                                            style={board.image ? '' : { color: 'black' }}
                                          >{board.title}</Card.Title>
                                          <Card.Text
                                            style={board.image ? '' : { color: 'black' }}
                                          >{board.contents}</Card.Text>
                                        </Card.ImgOverlay>
                                      </Card>
                                    </Col>
                                )}
                              </Row>
                            </Carousel.Item>
                          )
                        :
                        ''}
                    </Carousel>
                  </Col>
                </Row>
              </TabPane>
              <TabPane style={{ width: '100%' }} tab="관심 Think" key="2">
              </TabPane>
              <TabPane style={{ width: '100%' }} tab="스크랩" key="3">
                <Row type="flex" justify="center">
                  <Col>
                    <Carousel
                      fade
                      activeIndex={crsIndex} direction={direction} onSelect={crsHandle}
                      style={{
                        borderRadius: 10,
                        border: '2px solid',
                        borderColor: '#f1f3f5',
                        width: 900,
                        height: 300,
                        backgroundColor: '#EEFFEE'
                      }}
                    >
                      {TargetUser ?
                        userBoardsSlice(TargetUser.scraps)
                          .map(boardsList =>
                            <Carousel.Item>
                              <Row style={{
                                marginTop: '5%',
                                height: 200,
                              }}>
                                {boardsList.map(
                                  board =>
                                    <Col span={8} style={{ padding: 10 }}>
                                      <Card className={board.image ? '' : 'text-white'}
                                            style={{
                                              fontFamily: 'Noto Sans KR',
                                              fontWeight: 500
                                            }}
                                      >
                                        <Card.Img
                                          src={board.image ? board.image : '/static/images/default.png'}
                                          alt="Card image"/>
                                        <Card.ImgOverlay>
                                          <Card.Title
                                            style={board.image ? '' : { color: 'black' }}
                                          >{board.title}</Card.Title>
                                          <Card.Text
                                            style={board.image ? '' : { color: 'black' }}
                                          >{board.contents}</Card.Text>
                                        </Card.ImgOverlay>
                                      </Card>
                                    </Col>
                                )}
                              </Row>
                            </Carousel.Item>
                          )
                        :
                        ''}
                    </Carousel>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </div>
        </Col>
        <Col span={3}>
          <Box style={{
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: '20px',
            color: '#343a40',
          }}>
            <u>Follower</u>
          </Box>
          <Paper className={classes.root}>
            <Tabs defaultActiveKey="1" tabPosition="left" style={{ width:'100%' }}
                  tabBarStyle={{
                    fontFamily: 'Noto Sans KR',
                    fontWeight: 500,
                    width:'100%'}}
                  onTabClick={
                    (tab) => {router.push("/user?nickName="+TargetUser.followers[tab].nickName)}
                  }
            >
              {
                TargetUser ?
                  TargetUser.followers.map(
                    follower =>
                      <TabPane tab={follower.nickName} key={TargetUser.followers.indexOf(follower)}/>
                  )
                  :
                  ''
              }
            </Tabs>
          </Paper>
        </Col>
        <Col span={3}>

          <Box style={{
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: '20px',
            color: '#343a40',
          }}>
            <u>Following</u>
          </Box>
          <Paper className={classes.root}>
            <Tabs defaultActiveKey="1" tabPosition="left" style={{ width:'100%' }}
                  tabBarStyle={{
                    fontFamily: 'Noto Sans KR',
                    fontWeight: 500,
                    width:'100%'}}
                  onTabClick={
                    (tab) => {router.push("/user?nickName="+TargetUser.followings[tab].nickName)}
                  }
            >
              {
                TargetUser ?
                  TargetUser.followings.map(
                    following =>
                      <TabPane tab={following.nickName} key={TargetUser.followings.indexOf(following)}/>
                  )
                  :
                  ''
              }
            </Tabs>
          </Paper>
        </Col>
      </Row>
    </>
  );
};

export default User;
