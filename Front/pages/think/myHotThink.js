import React, {useState} from 'react';
import { useRouter, Router } from 'next/router';
import {Pagination} from 'antd';
import HotThinkPanel from '../../container/hotThink/hotThinkPanel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      style={{ outline: 'none' }}
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
  appBar: {
    top: 'auto',
    bottom: 0,
    alignItems:'center',
  },
  tap:{
    outline:'none'
  },
}));

const MyHotThink = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const categories = ['게임', '디자인', '마켓팅', '모바일', '사물인터넷', '웹사이트', '컨텐츠', '유틸리티'];
  const categoryImageFunction = (category) => {
    if (category === '게임') return '/static/images/game.jpg';
    else if (category === '디자인') return '/static/images/design.jpg';
    else if (category === '마켓팅') return '/static/images/marketing.jpg';
    else if (category === '모바일') return '/static/images/mobile.jpg';
    else if (category === '사물인터넷') return '/static/images/iot.jpg';
    else if (category === '유틸리티') return '/static/images/program.jpg';
    else if (category === '웹사이트') return '/static/images/webpage.jpg';
    else if (category === '컨텐츠') return '/static/images/contents.jpg';
  };


  return (
    <>
      <React.Fragment>
        <AppBar position="fixed" color="default" className={classes.appBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {
              [0, 1, 2, 3, 4, 5, 6, 7].map(num =>
                <Tab style={{outline:'none'}} {...a11yProps(num)}
                     icon={<img src={categoryImageFunction(categories[num])} alt={"image"}/>}
                />
              )
            }
          </Tabs>
        </AppBar>

      </React.Fragment>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <HotThinkPanel/>
        {
          [0,1,2,3,4,5,6,7].map(num =>
            <TabPanel value={value} index={num}>
              <HotThinkPanel/>
            </TabPanel>
          )
        }
      </SwipeableViews>
      {/*<Pagination style={{textAlign:'center', margin:'30px'}}*/}
      {/*            total={20}*/}
      {/*            pageSize={size}*/}
      {/*            current={page}*/}
      {/*            onChange={onPageChange}*/}
      {/*/>*/}
    </>
  );
};

export default MyHotThink;
