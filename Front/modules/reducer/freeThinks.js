import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga,{createRequestActionTypes} from "../saga/createRequestSaga";
import * as thinkAPI from '../api/think';

//리듀서 생성
const [LIST_FREE_THINKS,LIST_FREE_THINKS_SUCCESS,LIST_FREE_THINKS_FAILURE] = createRequestActionTypes('freeThinks/LIST_FREE_THINKS');


export const listFreeThinks = createAction(LIST_FREE_THINKS,({sb,sz,pg,category,ob})=>({
    sb,sz,pg,category,ob
}));


//사가생성
const listFreeThinksSaga = createRequestSaga(LIST_FREE_THINKS,thinkAPI.listFreeThinks);

export function* freeThinksSaga() {
    yield takeLatest(LIST_FREE_THINKS,listFreeThinksSaga);
}

const initialState={
    freeThinks : [],
    error:null,
};

const freeThinks = handleActions(
    {
        //프리띵크 읽기 성공
        [LIST_FREE_THINKS_SUCCESS]: (state,{payload:freeThinks}) => ({
            ...state,
            error : null,
            freeThinks,
        }),
        //프리띵크 읽기 실패
        [LIST_FREE_THINKS_FAILURE]: (state,{payload:error}) => ({
            ...state,
            error : error,
        }),
    },
    initialState,
);

export default freeThinks;