import axios from 'axios';

axios.defaults.baseURL='http://localhost:8080/';

//freeThink 게시글 읽기
export const readFreeThink = ({sb,sz,pg,category,ob}) => axios.get(`/api/freethink?sb=${sb}&sz=${sz}&pg=${pg}&category=${category}&ob=${ob}`, {
    headers: {
        'Authorization':'Bearer '+localStorage.getItem('token')
    }
});

//freeThink 게시글 작성
export const createFreeThink = () => axios.post('/api/freethink');

//freeThink 게시글 수정
export const updateFreeThink = () => axios.put('/api/freethink');

//freeThink 게시글 삭제
export const deleteFreeThink = () => axios.delete('/api/freethink');


//hotThink 게시글 읽기
export const readHotThink = () => axios.get('/api/hotthink');

//realThink 게시글 읽기
export const readRealThink = () => axios.get('/api/realthink');

//realThink 게시글 작성
export const createRealThink = () => axios.post('/api/realthink');

//realThink 게시글 수정
export const updateRealThink = () => axios.put('/api/realthink');

//realThink 게시글 삭제
export const deleteRealThink = () => axios.delete('/api/realthink');