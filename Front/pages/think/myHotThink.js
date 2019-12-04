import React, {useState} from 'react';
import HotThinkBar from "../../components/bars/hotThinkBar"
import { useRouter, Router } from 'next/router';
import {Pagination} from 'antd';
import HotThinkPanel from '../../container/hotThink/hotThinkPanel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
//
//   return (
//     <Typography
//       style={{outline:'none'}}
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`scrollable-force-tabpanel-${index}`}
//       aria-labelledby={`scrollable-force-tab-${index}`}
//       {...other}
//     >
//       <Box p={3}>{children}</Box>
//     </Typography>
//   );
// }
//
// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

const MyHotThink = () => {
  // const [value, setValue] = useState(0);
  // const [page,setPage] = useState(1);
  // const [size,setSize] = useState(10);
  // const router = useRouter();
  //
  // const onPageChange = (page,size) => {
  //   setPage(page);
  //   window.scrollTo(0,0);
  //   Router.push({
  //     pathname: '/think/myHotThink',
  //     query: { sb:0,sz:size,pg:page,ob:0 }
  //   });
  // };
  return (
    <>
      <HotThinkBar/>
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
