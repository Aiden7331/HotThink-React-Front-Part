import {createAction,handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga,{createRequestActionTypes} from "../saga/createRequestSaga";
import * as thinkAPI from '../api/think';
import produce from "immer";

//리듀서 생성
const INITIALIZE = 'realThink/INITIALIZE';
const SET_ORIGINAL_REAL_THINK = 'realThink/SET_ORIGINAL_REAL_THINK';
const CHANGE_FIELD = 'realThink/CHANGE_FIELD';
const [READ_REAL_THINK,READ_REAL_THINK_SUCCESS,READ_REAL_THINK_FAILURE] = createRequestActionTypes('realThink/WRITE_REAL_THINK');
const [WRITE_REAL_THINK,WRITE_REAL_THINK_SUCCESS,WRITE_REAL_THINK_FAILURE] = createRequestActionTypes('realThink/WRITE_REAL_THINK');
const [UPDATE_REAL_THINK,UPDATE_REAL_THINK_SUCCESS,UPDATE_REAL_THINK_FAILURE] = createRequestActionTypes('realThink/UPDATE_REAL_THINK');
const [DELETE_REAL_THINK,DELETE_REAL_THINK_SUCCESS,DELETE_REAL_THINK_FAILURE] = createRequestActionTypes('realThink/UPDATE_REAL_THINK');
const [UPLOAD_IMAGE] = createRequestActionTypes('realThink/UPLOAD_IMAGE');
const [SET_REAL] = createRequestActionTypes('realThink/SET_REAL');

export const initialize = createAction(INITIALIZE);
export const setOriginalRealThink = createAction(SET_ORIGINAL_REAL_THINK,post=>post);
export const setReal = createAction(SET_REAL,post=>post);
export const changeField = createAction(CHANGE_FIELD,({key,value})=>({
    key,value
}));
export const writeRealThink = createAction(WRITE_REAL_THINK,({
     title, contents, difference, originalPostId,real,category
})=>({
     title, contents, difference, originalPostId,real,category
}));
export const readRealThink = createAction(READ_REAL_THINK,({title,contents,category,attaches})=>({
    title, contents, category,attaches
}));
export const updateRealThink = createAction(UPDATE_REAL_THINK,({id,title,contents,image,category})=>({
    id, title, contents, image, category
}));
export const uploadImage = createAction(UPLOAD_IMAGE,({attaches})=>({
    attaches,
}));

//사가생성
const writeRealThinkSaga = createRequestSaga(WRITE_REAL_THINK,thinkAPI.writeRealThink);
const updateRealThinkSaga = createRequestSaga(UPDATE_REAL_THINK,thinkAPI.updateRealThink);
const readRealThinkSaga = createRequestSaga(READ_REAL_THINK,thinkAPI.readRealThink);
const deleteRealThinkSaga = createRequestSaga(DELETE_REAL_THINK,thinkAPI.deleteRealThink);

export function* realThinkSaga() {
    yield takeLatest(WRITE_REAL_THINK,writeRealThinkSaga);
    yield takeLatest(READ_REAL_THINK,readRealThinkSaga);
    yield takeLatest(UPDATE_REAL_THINK,updateRealThinkSaga);
    yield takeLatest(DELETE_REAL_THINK,deleteRealThinkSaga);
}

const initialState={
    user:'',
    title:'',
    contents:'',
    attaches:[],
    category:'웹사이트',
    originalPostId:101,
    difference:'',
    inventor:'',
    rightHolder:'',
    progressRate:50,
    pmaterial:'',
    state:'WAIT',
    realThink:null,
};


const realThink = handleActions(
    {
        [INITIALIZE]:state=>initialState,
        [SET_ORIGINAL_REAL_THINK]:(state,{payload:{think}})=>({
            ...state,
            title:think.title,
            contents:think.contents,
            attaches:[],
            category:'웹사이트',
            originalPostId:101,
            difference:think.difference,
            inventor:think.inventor,
            rightHolder:think.rightHolder,
            progressRate:think.progressRate,
            pMaterial:think.pMaterial,
        }),
        [CHANGE_FIELD]:(state,{payload:{key,value}}) =>({
            ...state,
            [key]:value,
        }),
        //리얼띵크 생성
        [WRITE_REAL_THINK_SUCCESS]: (state,{payload:realThink})=>({
            ...state,
            freeThink:null,
            isOpen:false,
        }),
        [WRITE_REAL_THINK_FAILURE]: (state,{payload:freeThinkError})=>({
            ...state,
            freeThinkError,
        }),
        //리얼띵크 수정
        [UPDATE_REAL_THINK_SUCCESS]: (state,{payload:freeThink})=>({
            ...state,
            freeThink,
        }),
        [UPDATE_REAL_THINK_FAILURE]: (state,{payload:freeThinkError})=>({
            ...state,
            freeThinkError,
        }),
        //이미지 업로드
        [UPLOAD_IMAGE]:(state,{payload:attaches})=>
            produce(state,draft => {
                if(attaches.attaches[0]) {
                    const path = attaches.attaches[0].attachmentUrl;
                    const attach = {
                        path: path
                    };
                    draft.attaches.unshift(attach);
                }
            }),
        //업로드된 이미지 삭제

    },
    initialState,
);

export default realThink;