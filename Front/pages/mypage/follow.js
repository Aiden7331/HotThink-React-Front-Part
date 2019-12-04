import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Row } from 'antd';
import MyPageBar from '../../components/bars/myPageBar';
import { useDispatch, useSelector } from 'react-redux';
import { check, follow } from '../../modules/reducer/user';
import { Tabs } from 'antd';
import { useRouter } from 'next/router';

const { TabPane } = Tabs;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 500,
    width: "100%",
  },
}));

const Follow = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();

  const { followList } = useSelector(({ user }) => ({
    followList : user.follow,
  }));
  useEffect(
    () => {
      if(!followList){
        dispatch(follow());
      }
    },[followList, dispatch]);

  return (
    <Row type="flex" style={{minWidth:1200}}>
      <Col span={3}><MyPageBar/></Col>
      <Col span={21} style={{padding:100}}>
        <Row type="flex" justify="start">
          <Col span={4}/>
          <Col span={5}>
            <div style={{width: "100%"}}>
              <Box style={{
                fontFamily: 'Arial',
                fontWeight: 'bold',
                fontSize: '20px',
                color:"#343a40",
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
                        (tab) => {router.push("/user?nickName="+followList.followers[tab].nickName)}
                      }
                >
                  {
                    followList?
                      followList.followers.map(
                        follower=>
                          <TabPane tab={follower.nickName} key={followList.followers.indexOf(follower)}  style={{outline:'none'}}/>
                      )
                      :
                      ''
                  }
                </Tabs>
              </Paper>
            </div>
          </Col>
          <Col span={3}/>
          <Col span={5}>
            <div style={{width: "100%"}}>
              <Box style={{
                fontFamily: 'Arial',
                fontWeight: 'bold',
                fontSize: '20px',
                color:"#343a40",
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
                        (tab) => {router.push("/user?nickName="+followList.followings[tab].nickName)}
                      }
                >
                  {
                    followList?
                      followList.followings.map(
                        following=>
                          <TabPane tab={following.nickName} key={followList.followings.indexOf(following)}  style={{outline:'none'}}/>
                      )
                      :
                      ''
                  }
                </Tabs>
              </Paper>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Follow;
