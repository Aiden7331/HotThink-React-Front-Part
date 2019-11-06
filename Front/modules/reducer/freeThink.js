import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga,{createRequestActionTypes} from "../saga/createRequestSaga";
import * as thinkAPI from '../api/think';

//리듀서 생성
const INITIALIZE = 'freeThink/INITIALIZE';
const SET_ORIGINAL_FREE_THINK = 'freeThink/SET_ORIGINAL_FREE_THINK';
const CHANGE_FIELD = 'freeThink/CHANGE_FIELD';
const [WRITE_FREE_THINK,WRITE_FREE_THINK_SUCCESS,WRITE_FREE_THINK_FAILURE] = createRequestActionTypes('freeThinks/WRITE_FREE_THINK');
const [UPDATE_FREE_THINK,UPDATE_FREE_THINK_SUCCESS,UPDATE_FREE_THINK_FAILURE] = createRequestActionTypes('freeThinks/UPDATE_FREE_THINK');

export const initialize = createAction(INITIALIZE);
export const setOriginalFreeThink = createAction(SET_ORIGINAL_FREE_THINK,post=>post);
export const changeField = createAction(CHANGE_FIELD,({key,value})=>({
    key,value
}));
export const writeFreeThink = createAction(WRITE_FREE_THINK,({title,contents,image,category})=>({
    title, contents, image, category
}));
export const updateFreeThink = createAction(UPDATE_FREE_THINK,({id,title,contents,image,category})=>({
    id, title, contents, image, category
}));

//사가생성
const writeFreeThinkSaga = createRequestSaga(WRITE_FREE_THINK,thinkAPI.writeFreeThink);
const updateFreeThinkSaga = createRequestSaga(UPDATE_FREE_THINK,thinkAPI.updateFreeThink);

export function* freeThinkSaga() {
    yield takeLatest(WRITE_FREE_THINK,writeFreeThinkSaga);
    yield takeLatest(UPDATE_FREE_THINK,updateFreeThinkSaga);
}

const initialState={
    title:'',
    contents:'',
    image:'',
    category:'IT서비스',
    originalPostId:null,
    freeThink:null,
    freeThinkError:null,
};


const freeThink = handleActions(
    {
        [INITIALIZE]:state=>initialState,
        [SET_ORIGINAL_FREE_THINK]:(state,{payload:{think}})=>({
            ...state,
            title:think.title,
            contents: think.contents,
            image:think.image,
            originalPostId: think.bdSeq,
            category: think.category,
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
            freeThink,
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
    },
    initialState,
);

export default freeThink;