import React, { useEffect } from 'react';
import Introduce from '../components/main/introduce';
import WeeklyHotThinkList from '../components/main/weeklyHotThink';
import Review from '../components/main/Review';

const Home = () => {
  return (
    <>
      <Introduce/>


      <WeeklyHotThinkList/>

      <h5
        style={{
          paddingTop: '20px',
          marginLeft: '20%',
          fontWeight: '700',
          fontFamily: 'Noto Sans KR',
        }}
      >서비스 후기</h5>
      <Review/>
    </>
  );
};

export default Home;
