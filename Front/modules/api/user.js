import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

// 유저 업데이트
export const updateUser = ({ nickName,pw,tel,preferences }) =>
    axios.put('/api/user', { nickName,pw,tel,preferences }, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }});


// 로그인 상태 확인
export const check = () => axios.get('/api/login/check', {
    headers: {
        'Authorization':'Bearer '+localStorage.getItem('token')
    }
});
