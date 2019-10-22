import client from './client';

// 로그인
export const login = ({ id, pw }) =>
    client.post('/api/auth/login', { id, pw });

// 회원가입
export const register = ({ id, pw }) =>
    client.post('/api/auth/register', { id, pw });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');