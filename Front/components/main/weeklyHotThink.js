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
  tile:{
    borderRadius:'20px',
  },
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

  const categories = ['게임', '디자인', '마켓팅', '모바일', 'IOT', '웹페이지', '컨텐츠', '프로그램'];

  const tileData = [
    //게임
    [
      {
        img: '/static/images/lol.jpg',
        title: '리그오브레전드',
        author: 'Riot Games',
      },
      {
        img: '/static/images/overwatch.png',
        title: '오버워치',
        author: 'Blizzard',
      },
      {
        img: '/static/images/battleground.jpg',
        title: '배틀그라운드',
        author: 'Blue hole',
      },
    ],
    //디자인
    [
      {
        img: '/static/images/lol.jpg',
        title: '리그오브레전드',
        author: 'Riot Games',
      },
      {
        img: '/static/images/overwatch.png',
        title: '오버워치',
        author: 'Blizzard',
      },
      {
        img: '/static/images/battleground.jpg',
        title: '배틀그라운드',
        author: 'Blue hole',
      },
    ],
    //마켓팅
    [
      {
        img: '/static/images/lol.jpg',
        title: '리그오브레전드',
        author: 'Riot Games',
      },
      {
        img: '/static/images/overwatch.png',
        title: '오버워치',
        author: 'Blizzard',
      },
      {
        img: '/static/images/battleground.jpg',
        title: '배틀그라운드',
        author: 'Blue hole',
      },
    ],
    //모바일
    [
      {
        img: '/static/images/lol.jpg',
        title: '리그오브레전드',
        author: 'Riot Games',
      },
      {
        img: '/static/images/overwatch.png',
        title: '오버워치',
        author: 'Blizzard',
      },
      {
        img: '/static/images/battleground.jpg',
        title: '배틀그라운드',
        author: 'Blue hole',
      },
    ],
    //IOT
    [
      {
        img: '/static/images/lol.jpg',
        title: '리그오브레전드',
        author: 'Riot Games',
      },
      {
        img: '/static/images/overwatch.png',
        title: '오버워치',
        author: 'Blizzard',
      },
      {
        img: '/static/images/battleground.jpg',
        title: '배틀그라운드',
        author: 'Blue hole',
      },
    ],
    //웹페이지
    [
      {
        img: '/static/images/favicon-16x16.png',
        title: '핫띵크',
        author: '김영곤',
      },
      {
        img: '/static/images/overwatch.png',
        title: '오버워치',
        author: 'Blizzard',
      },
      {
        img: '/static/images/battleground.jpg',
        title: '배틀그라운드',
        author: 'Blue hole',
      },
    ],
    //컨텐츠
    [
      {
        img: '/static/images/default.png',
        title: '낚시하기',
        author: '김영곤',
      },
      {
        img: '/static/images/default.png',
        title: '잠 자기',
        author: '강태구',
      },
      {
        img: '/static/images/default.png',
        title: '코딩하기',
        author: '김영곤',
      },
    ],
    //프로그램
    [
      {
        img: '/static/images/intelliJ.png',
        title: '인텔리제이',
        author: 'JetBrains',
      },
      {
        img: '/static/images/alzip.jpg',
        title: '알집',
        author: 'EastSoft',
      },
      {
        img: '/static/images/battleground.jpg',
        title: '배틀그라운드',
        author: 'Blue hole',
      },
    ],
  ];

  function categoryImageFunction(category) {
    if (category === '게임') return '/static/images/game.jpg';
    else if (category === '디자인') return '/static/images/design.jpg';
    else if (category === '마켓팅') return '/static/images/marketing.jpg';
    else if (category === '모바일') return '/static/images/mobile.jpg';
    else if (category === 'IOT') return '/static/images/iot.jpg';
    else if (category === '프로그램') return '/static/images/program.jpg';
    else if (category === '웹페이지') return '/static/images/webpage.jpg';
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
                   {...a11yProps(1)}
                   style={{
                     fontWeight: '900',
                     fontFamily: 'Noto Sans KR',
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
                  <Grid item>
                    <div
                      style={{
                        marginLeft: '15%',
                        marginRight: '15%',
                        // width:"100%",
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        overflow: 'hidden',
                        // backgroundColor: 'red',
                        // backgroundColor: theme.palette.background.paper,
                      }}
                    >
                      <GridList
                        cellHeight={240}
                        cols={3}
                        spacing={24}
                        style={{
                          // width: '100%',
                          // marginLeft: '15%',
                          // marginRight: '15%',
                          flexWrap: 'nowrap',
                          transform: 'translateZ(0)',
                        }}
                      >
                        {tileData[num].map(tile => (
                          <GridListTile key={tile.img}
                                        className={classes.tile}
                          >
                            <img src={tile.img} alt={tile.title}
                                 style={{
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
                    </div>
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
