import {createAction,handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga,{createRequestActionTypes} from "../saga/createRequestSaga";
import * as thinkAPI from '../api/think';

//리듀서 생성
const [LIST_FREE_THINKS,LIST_FREE_THINKS_SUCCESS,LIST_FREE_THINKS_FAILURE] = createRequestActionTypes('freeThinks/LIST_FREE_THINKS');
// const [LIKE,LIKE_SUCCESS,LIKE_FAILURE] = createRequestActionTypes('freeThinks/LIKE');
// const [UNLIKE,UNLIKE_SUCCESS,UNLIKE_FAILURE] = createRequestActionTypes('freeThinks/UNLIKE');


export const listFreeThinks = createAction(LIST_FREE_THINKS,({sb,sz,pg,category,ob})=>({
    sb,sz,pg,category,ob
}));
// export const like = createAction(LIKE,({id})=>({
//     id,
// }));
// export const unlike = createAction(UNLIKE,({id})=>({
//     id,
// }));


//사가생성
const listFreeThinksSaga = createRequestSaga(LIST_FREE_THINKS,thinkAPI.listFreeThinks);
// const likeSaga = createRequestSaga(LIKE,thinkAPI.addLike);
// const unLikeSaga = createRequestSaga(UNLIKE,thinkAPI.unLike);


export function* freeThinksSaga() {
    yield takeLatest(LIST_FREE_THINKS,listFreeThinksSaga);
    // yield takeLatest(LIKE,likeSaga);
    // yield takeLatest(UNLIKE,unLikeSaga);

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
        // [LIKE_SUCCESS]:(state,{payload:userEmail}) => produce(state,draft=>{
        //     //해당 freeThink의 list에 추가
        //     draft.freeThinks.likes
        // }),
        // [LIKE_FAILURE]:(state,{payload:userEmail})=>({
        //     ...state,
        // }),
        // [UNLIKE_SUCCESS]:(state,{payload:userEmail})=>({
        //     ...state,
        //     //해당 freeThink의 list에서 삭제
        //     likes: state.likes.filter(v => v.user.email !==userEmail),
        // }),
        // [UNLIKE_FAILURE]:(state,{payload:userEmail})=>({
        //     ...state,
        // }),
    },
    initialState,
);

export default freeThinks;