import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga,{createRequestActionTypes} from "../saga/createRequestSaga";
import * as thinkAPI from '../api/think';

//리듀서 생성
const [LIST_REAL_THINKS,LIST_REAL_THINKS_SUCCESS,LIST_REAL_THINKS_FAILURE] = createRequestActionTypes('realThinks/LIST_REAL_THINKS');

export const listRealThinks = createAction(LIST_REAL_THINKS,({sb,sz,pg,category,ob})=>({
    sb,sz,pg,category,ob
}));

//사가생성
const listRealThinksSaga = createRequestSaga(LIST_REAL_THINKS,thinkAPI.listRealThinks);

export function* realThinksSaga() {
    yield takeLatest(LIST_REAL_THINKS,listRealThinksSaga);
}

const initialState={
    realThinks : [],
    error:null,
};

const realThinks = handleActions(
    {
        //리얼띵크 읽기 성공
        [LIST_REAL_THINKS_SUCCESS]: (state,{payload:realThinks}) => ({
            ...state,
            error : null,
            realThinks,
        }),
        //리얼띵크 읽기 실패
        [LIST_REAL_THINKS_FAILURE]: (state,{payload:error}) => ({
            ...state,
            error : error,
        }),
    },
    initialState,
);

export default realThinks;