import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL='http://localhost:8080/';

//freeThink 게시글 읽기
export const listFreeThinks = ({sb,sz,pg,category,ob}) => {
    const queryString = qs.stringify({
        sb,
        sz,
        pg,
        category,
        ob,
    });
    return axios.get(`/api/freethink?${queryString}`, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
};

//freeThink 게시글 작성
export const writeFreeThink = ({title,contents,image,category}) => {
    return axios.post(`/api/freethink/${category}`, {
        title,
        contents,
        image,
    },{
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
};

//freeThink 게시글 수정
export const updateFreeThink = ({id,title,contents,image,category}) =>
    axios.put(`/api/freethink/${id}/${category}`, {title,contents,image},{
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

//freeThink 게시글 삭제
export const deleteFreeThink = (id) => axios.delete(`/api/freethink/${id}`,{
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

// export const deleteFreeThink = function(id) {
//     console.log(id);
//     axios.delete(`/api/freethink/${id}`,{
//         headers: {
//             'Authorization': 'Bearer ' + localStorage.getItem('token')
//         }});
// };
//     // ({id}) => axios.delete(`/api/freethink/${id}`,{
//     //     headers: {
//     //         'Authorization': 'Bearer ' + localStorage.getItem('token')
//     //     }
//     // });
// // }


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