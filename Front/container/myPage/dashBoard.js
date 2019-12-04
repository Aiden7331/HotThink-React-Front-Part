import {
  Row,
  Col,
  Button,
  Avatar,
  Icon,
  Statistic,
  Tag,
  Rate,
  Tabs,
  Drawer,
  Modal,
  InputNumber,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';

import Fab from '@material-ui/core/Fab';

const { TabPane } = Tabs;
import ProfileUpdate from './profileUpdate';
import { useDispatch, useSelector } from 'react-redux';
import { check, initializeUpdateForm, pointCharge } from '../../modules/reducer/user';
import Link from 'next/Link';

const DashBoard = ({ user }) => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
    dispatch(check());
    console.log(visible);
  };

  const [crsIndex, setCrsIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const crsHandle = (selectedIndex, e) => {
    setCrsIndex(selectedIndex);
    setDirection(e.direction);
  };

  const showDrawer = () => {
    setVisible(true);
    dispatch(initializeUpdateForm({
      form: 'userUpdate',
      value: {
        nickName: user.nickName,
        tel: user.tel,
        pw: user.pw,
        pwck: user.pw,
        preferenceList: user.preferenceList,
      }
    }));
  };

  //포인트 모달 관련
  const [PMstate, setPMState] = useState(false);
  const [point, setPoint] = useState(0);
  const PMOk = () => {
    dispatch(pointCharge({
      point: point
    }));
  };
  const { updateError } = useSelector(({ user }) => ({
    updateError: user.userUpdateError,
  }));
  useEffect(() => {
    if (updateError === 'PointChargeSuccess') {
      setPMState(false);
      dispatch(check());
    }
  }, [updateError, dispatch]);

  //유저의 게시판 관련
  const userBoardsSlice = (boards) => {
    const list = [];
    for (let i = 0; i < boards.length; i = i + 3) {
      list.push(boards.slice(i, i + 3));
    }
    console.log(list);
    return list;
  };

  return (
    <>
      <div style={{
        borderRadius: 5,
        height: 120,
        backgroundColor: '#495057'
      }}>
        <Avatar size={128} shape={'square'}
                style={{
                  marginTop: '50px',
                  marginLeft: '5%',
                }}
        >
          <Icon type="user-add" style={{ fontSize: 96 }}/>
        </Avatar>
      </div>
      <Button
        type="primary" shape="round" size={'large'}
        icon="plus-circle"
        onClick={showDrawer}
        style={{
          float: 'right',
          marginTop: 5,
          marginRight: '1%',
          fontFamily: 'Noto Sans KR',
        }}
      >프로필 수정</Button>

      <div style={{
        padding: '10%',
      }}>
        <div style={{
          fontFamily: 'Noto Sans KR',
          fontWeight: 500,
        }}>
          <span style={{
            fontSize: 48,
            color: '#343a40',
          }}>{user ? user.name : ''}</span>
          <span style={{
            marginLeft: '1%',
            color: '#868e96',
            fontSize: 36
          }}>{user ? user.nickName : ''}</span>

          <div style={{
            float: 'right',
            marginRight: '5%',
          }}>
            <Button icon="up-square"
                    onClick={() => setPMState(true)}
                    style={{
                      fontSize: 36,
                      border: 'none',
                      float: 'right',
                      outline: 'none',
                    }}/>
            <Statistic title="Point" value={user ? user.point : ''}
                       style={{ float: 'right' }}/>
          </div>
        </div>

        {
          user ? user.preferenceList.map(preference =>
            <Tag color="magenta" style={{ fontFamily: 'Noto Sans KR' }}>{preference}</Tag>
          ) : ''
        }

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
          <Col style={{
            fontFamily: 'Noto Sans KR',
          }}>
            <Row>
              <Fab color="secondary" variant="extended" style={{
                outline: 'none',
                marginLeft: 5
              }}>
                프리패스권 구입
              </Fab>
            </Row>
            <Row>
              <Avatar
                style={{
                  backgroundColor: '#f1f3f5',
                  width: '150px',
                  height: '150px',
                }}>
                <h2 style={{
                  marginTop: '55%',
                }}>{user ? user.realTicket + ' 개' : ''}</h2>
              </Avatar>
            </Row>
          </Col>
          <Col style={{
            fontFamily: 'Noto Sans KR',
          }}>
            <Row>
              <Link href="/mypage/subscribe">
              <Fab color="secondary" variant="extended" style={{
                outline: 'none',
                marginLeft: 20
              }}>
                구독권 구입
              </Fab>
              </Link>
            </Row>
            <Row>
              <Avatar
                style={{
                  backgroundColor: '#f1f3f5',
                  width: '150px',
                  height: '150px',
                }}>
                <h2 style={{
                  marginTop: '55%',
                }}>{user ? user.realTicket + ' 일' : ''}</h2>
              </Avatar>
            </Row>


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
                  {user ?
                    userBoardsSlice(user.boards)
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
                                        style={{ fontFamily: 'Noto Sans KR', fontWeight:500}}
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
                  {user ?
                    userBoardsSlice(user.scraps)
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
                                        style={{ fontFamily: 'Noto Sans KR', fontWeight:500}}
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

      <Drawer
        height={500}
        title="개인정보 수정"
        placement="bottom"
        onClose={onClose}
        visible={visible}
        headerStyle={{
          marginLeft: '20%',
          marginRight: '20%',
          fontFamily: 'Noto Sans KR',
          fontWeight: 700
        }}
      >
        <ProfileUpdate user={user} close={onClose}/>
      </Drawer>

      <Modal
        title="포인트 충전"
        visible={PMstate}
        onOk={PMOk}
        onCancel={() => setPMState(false)}
        style={{
          fontFamily: 'Noto Sans KR',
        }}
      >
        <InputNumber size="large" min={0} max={100000} value={point}
                     maxLength={10} onChange={(point) => setPoint(point)}
                     style={{ width: '100%' }}
        />
      </Modal>
    </>
  );

};
export default DashBoard;
