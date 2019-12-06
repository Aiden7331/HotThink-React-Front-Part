import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = 'http://localhost:8080';

// 유저 업데이트
export const updateUser = ({ nickName, pw, tel, preferenceList }) =>
  axios.put('/api/user', {
    nickName,
    pw,
    tel,
    preferenceList
  }, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  });

// 로그인 상태 확인
export const check = () => axios.get('/api/login/check', {
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
});

//포인트 충전
export const pointCharge = ({ point }) =>
  axios.post('/api/user/point',
    { point },
    { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } }
  );

//팔로우 리스트
export const followList = () => axios.get('/api/user/follow', {
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
});

//유저 조회
export const targetUser = ({nickName}) => {
  const query = qs.stringify(nickName);
  return axios.get(`/api/user?${query}`, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  });
};

//팔로우 하기
export const follow = ({nickName}) =>
  axios.post(`/api/user/follow/${nickName}`, {}, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  });

//언팔 하기
export const unfollow = ({nickName}) =>
  axios.delete(`/api/user/follow/${nickName}`, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  });

//리얼티켓 구매
export const realTicket = () =>
  axios.post('/api/pay/freepass', {
    "payMethod":"CASH"
  }, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  });
