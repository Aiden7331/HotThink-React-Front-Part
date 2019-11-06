import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

// 로그인
export const login = ({ email, pw }) =>
    axios.post('/api/login/processing', { email, pw });

// 회원가입
export const register = ({ email, pw, nickName, name, tel}) =>
    axios.post('/api/user', { email, pw, nickName, name, tel});

// 로그인 상태 확인
export const check = () => axios.get('/api/login/check', {
        headers: {
                'Authorization':'Bearer '+localStorage.getItem('token')
        }
});

// 로그아웃
export const logout = () => axios.post('/api/logout');

