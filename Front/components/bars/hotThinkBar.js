import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HotThinkPanel from "../../container/hotThink/hotThinkPanel"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      style={{outline:'none'}}
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
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const HotThinkBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{outline:'none'}}>
        <div style={{textAlign:"center",
          marginLeft:"5.2%",
          paddingTop:"2%",
          outline:'none'
        }}>
          <Tabs
            style={{outline:'none'}}
            outline="none"
            value={value}
            onChange={handleChange}
            //variant="scrollable"
            // scrollButtons="on"
            // indicatorColor="primary"
            // textColor="primary"
            aria-label="scrollable force tabs example"
            centered
          >
            <Tab label="GAME"
                 icon={<img src={'/static/images/game.jpg'}/>} {...a11yProps(0)} />
            <Tab label="DESIGN"
                 icon={<img src={'/static/images/design.jpg'}/>} {...a11yProps(1)} />
            <Tab label="MARKETING"
                 icon={<img src={'/static/images/marketing.jpg'}/>} {...a11yProps(2)} />
            <Tab label="MOBILE" icon={<img src={'/static/images/mobile.jpg'}/>} {...a11yProps(3)} />
            <Tab label="IOT" icon={<img src={'/static/images/iot.jpg'}/>} {...a11yProps(4)} />
            <Tab label="WEBSITE" icon={<img src={'/static/images/webpage.jpg'}/>} {...a11yProps(5)} />
            <Tab label="CONTENTS"
                 icon={<img src={'/static/images/contents.jpg'}/>} {...a11yProps(6)} />
            <Tab label="UTILITY" icon={<img src={'/static/images/PROGRAM.jpg'}/>} {...a11yProps(7)}/>
          </Tabs>
        </div>
      </AppBar>
      <HotThinkPanel/>
      {/*{*/}
      {/*  [0,1,2,3,4,5,6,7].map(num =>*/}
      {/*    <TabPanel value={value} index={num}>*/}
      {/*      <HotThinkPanel/>*/}
      {/*    </TabPanel>*/}
      {/*  )*/}
      {/*}*/}
    </div>
  );
}
export default HotThinkBar;

