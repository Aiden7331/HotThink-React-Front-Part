import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { forEach } from 'react-bootstrap/cjs/ElementChildren';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  title: {
    // color: theme.palette.primary.light,
    color: 'black',
    fontWeight: '700',
    fontFamily: 'Noto Sans KR',
    // backgroundColor: 'white',
  },
  // tile:{
  //   borderRadius:'20px',
  // },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(192,192,192,0.7) 0%, rgba(192,192,192,0.4) 30%, rgba(192,192,192,0) 60%)',
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const categories = ['게임', '디자인', '마켓팅', '모바일', '사물인터넷', '웹사이트', '컨텐츠', '유틸리티'];

  const tileData = [
    //게임
    [
      {
        img: '/static/images/wormax.png',
        title: 'wormax',
      },
      {
        img: '/static/images/피카츄배구.png',
        title: '피카츄배구',
      },
      {
        img: '/static/images/오목.png',
        title: '오목',
      },
    ],
    //디자인
    [
      {
        img: '/static/images/예민한오리.png',
        title: '예민한오리',
      },
      {
        img: '/static/images/경수체.png',
        title: '경수체 폰트',
      },
      {
        img: '/static/images/작업용바지.png',
        title: '작업용바지 디자인',
      },
    ],
    //마켓팅
    [
      {
        img: '/static/images/제이디.png',
        title: '제이디 라이브 영어',
      },
      {
        img: '/static/images/지도 노출 서비스.png',
        title: '지도 노출 서비스',
      },
      {
        img: '/static/images/글쓰기시간줄이기.png',
        title: '글쓰기 시간 줄이기 노하우',
      },
    ],
    //모바일
    [
      {
        img: '/static/images/마리오승익.png',
        title: '마리오승익',
      },
      {
        img: '/static/images/펫트너.jpg',
        title: '펫트너',
      },
      {
        img: '/static/images/에브리타임.jpg',
        title: '에브리타임',
      },
    ],
    //사물인터넷
    [
      {
        img: '/static/images/펀치기.png',
        title: '자동 복원식 펀치볼 게임기',
      },
      {
        img: '/static/images/층간소음방지무드등.png',
        title: '층소방무',
      },
      {
        img: '/static/images/마리오승익.png',
        title: '마리오승익',
      },
    ],
    //웹사이트
    [
      {
        img: '/static/images/favicon-16x16.png',
        title: '핫띵크',
      },
      {
        img: '/static/images/default.png',
        title: '성공회대 통합 과제제출시스템',
      },
      {
        img: '/static/images/크몽.png',
        title: '크몽',
      },
    ],
    //컨텐츠
    [
      {
        img: '/static/images/default.png',
        title: '프로젝트 진행하기',
      },
      {
        img: '/static/images/영상브이로그.png',
        title: '영상 브이로그 찍기',
      },
      {
        img: '/static/images/VR.png',
        title: 'VR',
      },
    ],
    //프로그램
    [
      {
        img: '/static/images/포토스케이프.png',
        title: '포토스케이프',
      },
      {
        img: '/static/images/곰캠.png',
        title: '곰캠',
      },
      {
        img: '/static/images/소개팅주선프로그램.jpg',
        title: '소개팅주선프로그램',
      },
    ],
  ];

  function categoryImageFunction(category) {
    if (category === '게임') return '/static/images/game.jpg';
    else if (category === '디자인') return '/static/images/design.jpg';
    else if (category === '마켓팅') return '/static/images/marketing.jpg';
    else if (category === '모바일') return '/static/images/mobile.jpg';
    else if (category === '사물인터넷') return '/static/images/iot.jpg';
    else if (category === '유틸리티') return '/static/images/program.jpg';
    else if (category === '웹사이트') return '/static/images/webpage.jpg';
    else if (category === '컨텐츠') return '/static/images/contents.jpg';
  }

  return (
    <div className={classes.root}>
      <AppBar
        style={
          {
            marginTop: '20px',
            alignItems: 'center'
          }
        }
        position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons="on"
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
        >
          {
            categories.map(category =>
              <Tab label={category}
                   key={categories.indexOf(category)}
                   icon={
                     <img src={categoryImageFunction(category)}/>
                   }
                   {...a11yProps(categories.indexOf(category))}
                   style={{
                     fontWeight: '900',
                     fontFamily: 'Noto Sans KR',
                     outline: 'none',
                   }}
              />
            )
          }
        </Tabs>
      </AppBar>
      <div style={{
        // marginLeft: '15%',
        // marginTop: '20px',
        backgroundColor: '#F8E0E0',
        height: '400px',
      }}>
        <h5
          style={{
            paddingTop: '20px',
            // marginTop: '20px',
            marginLeft: '20%',
            fontWeight: '700',
            fontFamily: 'Noto Sans KR',
          }}
        >금주의 핫띵크</h5>

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {
            [0, 1, 2, 3, 4, 5, 6, 7].map(num =>
              <TabPanel index={num} value={value} dir={theme.direction} key={num}>
                <Grid
                  container
                  justify={'center'}
                >
                  <Grid item
                  style={{
                    marginLeft: '10%',
                    marginRight: '10%',
                  }}>
                    {/*<div*/}
                    {/*  style={{*/}
                    {/*    marginLeft: '15%',*/}
                    {/*    marginRight: '15%',*/}
                    {/*    // width:"100%",*/}
                    {/*    display: 'flex',*/}
                    {/*    flexWrap: 'wrap',*/}
                    {/*    justifyContent: 'space-around',*/}
                    {/*    overflow: 'hidden',*/}
                    {/*    // backgroundColor: 'red',*/}
                    {/*    // backgroundColor: theme.palette.background.paper,*/}
                    {/*  }}*/}
                    {/*>*/}
                      <GridList
                        cellHeight={300}

                        cols={3}
                        spacing={24}
                        style={{
                          width: '100%',
                          // marginLeft: '15%',
                          // marginRight: '15%',
                          flexWrap: 'nowrap',
                          // transform: 'translateZ(0)',
                        }}
                      >
                        {tileData[num].map(tile => (
                          <GridListTile key={tile.title}
                                        className={classes.tile}
                          >
                            <img src={tile.img} alt={tile.title}
                                 style={{
                                   height:'100%',
                                   opacity: 0.7
                                 }}
                            />
                            <GridListTileBar
                              title={tile.title}
                              classes={{
                                root: classes.titleBar,
                                title: classes.title,
                              }}
                              actionIcon={
                                <IconButton aria-label={`star ${tile.title}`}>
                                  <StarBorderIcon className={classes.title}/>
                                </IconButton>
                              }
                            />
                          </GridListTile>
                        ))}
                      </GridList>
                    {/*</div>*/}
                  </Grid>
                </Grid>
              </TabPanel>
            )
          }
        </SwipeableViews>
      </div>
    </div>
  );
}
