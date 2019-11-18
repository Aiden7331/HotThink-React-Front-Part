import {createAction,handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga,{createRequestActionTypes} from "../saga/createRequestSaga";
import * as thinkAPI from '../api/think';

//리듀서 생성
const INITIALIZE = 'freeThink/INITIALIZE';
const SET_ORIGINAL_FREE_THINK = 'freeThink/SET_ORIGINAL_FREE_THINK';
const CHANGE_FIELD = 'freeThink/CHANGE_FIELD';
const OPEN_MODAL = 'freeThink/OPEN_MODAL';
const CLOSE_MODAL = 'freeThink/CLOSE_MODAL';
const [WRITE_FREE_THINK,WRITE_FREE_THINK_SUCCESS,WRITE_FREE_THINK_FAILURE] = createRequestActionTypes('freeThinks/WRITE_FREE_THINK');
const [UPDATE_FREE_THINK,UPDATE_FREE_THINK_SUCCESS,UPDATE_FREE_THINK_FAILURE] = createRequestActionTypes('freeThinks/UPDATE_FREE_THINK');
const [WRITE_COMMENT,WRITE_COMMENT_SUCCESS,WRITE_COMMENT_FAILURE] = createRequestActionTypes('freeThinks/WRITE_COMMENT');
const [LIKE,LIKE_SUCCESS,LIKE_FAILURE] = createRequestActionTypes('freeThinks/LIKE');
const [UNLIKE,UNLIKE_SUCCESS,UNLIKE_FAILURE] = createRequestActionTypes('freeThinks/UNLIKE');

export const initialize = createAction(INITIALIZE);
export const setOriginalFreeThink = createAction(SET_ORIGINAL_FREE_THINK,post=>post);
export const changeField = createAction(CHANGE_FIELD,({key,value})=>({
    key,value
}));
export const openModal = createAction(OPEN_MODAL);
export const closeModal = createAction(CLOSE_MODAL);
export const writeFreeThink = createAction(WRITE_FREE_THINK,({title,contents,image,category})=>({
    title, contents, image, category
}));
export const updateFreeThink = createAction(UPDATE_FREE_THINK,({id,title,contents,image,category})=>({
    id, title, contents, image, category
}));
export const writeComment = createAction(WRITE_COMMENT,({comment, id})=>({
    comment,id
}));
export const like = createAction(LIKE,({id})=>({
    id,
}));
export const unlike = createAction(UNLIKE,({id})=>({
    id,
}));

//사가생성
const writeFreeThinkSaga = createRequestSaga(WRITE_FREE_THINK,thinkAPI.writeFreeThink);
const updateFreeThinkSaga = createRequestSaga(UPDATE_FREE_THINK,thinkAPI.updateFreeThink);
const writeCommentSaga = createRequestSaga(WRITE_COMMENT,thinkAPI.writeComment);
const likeSaga = createRequestSaga(LIKE,thinkAPI.addLike);

export function* freeThinkSaga() {
    yield takeLatest(WRITE_FREE_THINK,writeFreeThinkSaga);
    yield takeLatest(UPDATE_FREE_THINK,updateFreeThinkSaga);
    yield takeLatest(WRITE_COMMENT,writeCommentSaga);
    yield takeLatest(LIKE,likeSaga);
}

const initialState={
    title:'',
    contents:'',
    image:'',
    category:'IT서비스',
    originalPostId:null,
    freeThink:null,
    freeThinkError:null,
    isOpen:false,
    comment:'',
    commentError:'',
    likes:[],
};


const freeThink = handleActions(
    {
        [INITIALIZE]:state=>initialState,
        [OPEN_MODAL]:(state=>({
            ...state,
            isOpen:true,
        })),
        [CLOSE_MODAL]:(state=>({
            ...state,
            isOpen:false,
        })),
        [SET_ORIGINAL_FREE_THINK]:(state,{payload:{think}})=>({
            ...state,
            title:think.title,
            contents: think.contents,
            image:think.image,
            originalPostId: think.bdSeq,
            category: think.category,
            likes:think.likes,
        }),
        [CHANGE_FIELD]:(state,{payload:{key,value}}) =>({
            ...state,
            [key]:value,
        }),
        [WRITE_FREE_THINK]:state =>({
            ...state,
            freeThink:null,
            freeThinkError: null,
        }),
        [WRITE_FREE_THINK_SUCCESS]: (state,{payload:freeThink})=>({
            ...state,
            freeThink:null,
            isOpen:false,
        }),
        [WRITE_FREE_THINK_FAILURE]: (state,{payload:freeThinkError})=>({
            ...state,
            freeThinkError,
        }),
        [UPDATE_FREE_THINK_SUCCESS]: (state,{payload:freeThink})=>({
            ...state,
            freeThink,
        }),
        [UPDATE_FREE_THINK_FAILURE]: (state,{payload:freeThinkError})=>({
            ...state,
            freeThinkError,
        }),
        [LIKE_SUCCESS]:(state,{payload:userEmail})=>({
            ...state,
            //해당 freeThink의 list에 추가
            likes:state.likes.unshift(userEmail),
        }),
        [LIKE_FAILURE]:(state,{payload:userEmail})=>({
            ...state,
        }),
        [UNLIKE_SUCCESS]:(state,{payload:userEmail})=>({
            ...state,
            //해당 freeThink의 list에서 삭제
            likes: state.likes.splice(state.likes.findIndex(v => v.email === userEmail), 1)
        }),
        [UNLIKE_FAILURE]:(state,{payload:userEmail})=>({
            ...state,
        }),
        [WRITE_COMMENT_SUCCESS]:(state,{payload:originalPostId})=>({
            ...state,
        }),
        [WRITE_COMMENT_FAILURE]:(state,{payload:error})=>({
            ...state,
            commentError:error,
        }),
    },
    initialState,
);

export default freeThink;