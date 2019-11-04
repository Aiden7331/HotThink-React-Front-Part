import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../api/auth';
import * as userAPI from '../api/user';
import createRequestSaga, {
    createRequestActionTypes,
} from '../saga/createRequestSaga';
import produce from "immer";

const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리

const CHANGE_FIELD = '/user/CHANGE_FIELD';
const INITIALIZE_FORM = 'user/INITIALIZE_FORM';

// 회원 정보 확인
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
    'user/CHECK',
);

const [UPDATEUSER, UPDATEUSER_SUCCESS, UPDATEUSER_FAILURE] = createRequestActionTypes(
    'user/UPDATEUSER',
);
const LOGOUT = 'user/LOGOUT';

export const changeField = createAction(
    CHANGE_FIELD,
    ({form,key,value})=>({
        form,//register,login
        key,//email,pw,pwck
        value,//실제 바꾸려는 값
    })
);
export const initializeForm = createAction(INITIALIZE_FORM,form=>form);

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);
export const updateUser =  createAction(UPDATEUSER,({nickName,pw,tel,preferenceList})=>
    ({
        nickName,
        pw,
        tel,
        preferenceList,
    }),
);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

const updateUserSaga = createRequestSaga(UPDATEUSER,userAPI.updateUser);

function checkFailureSaga() {
    try {
        localStorage.removeItem('user'); // localStorage 에서 user 제거하고
    } catch (e) {
        console.log('localStorage is not working');
    }
}

function* logoutSaga() {
    try {
        yield call(authAPI.logout); // logout API 호출
        localStorage.removeItem('user'); // localStorage 에서 user 제거
    } catch (e) {
        console.log(e);
    }
}

export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(CHECK_FAILURE, checkFailureSaga);
    yield takeLatest(UPDATEUSER, updateUserSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
    user: null,
    checkError: null,
    userUpdateError: null,
    userUpdate:{
        nickName:'',
        tel:'',
        pw:'',
        pwck:'',
        preferenceList:{},
    }
};

export default handleActions(
    {
        [CHANGE_FIELD]: (state,{payload:{form,key,value}}) =>
            produce(state,draft => {
                draft[form][key]=value;
            }),
        [INITIALIZE_FORM]: (state,{payload:{form}}) => ({
            ...state,
            [form] : initialState[form],
        }),
        [TEMP_SET_USER]: (state, { payload: user }) => ({
            ...state,
            user,
        }),
        [UPDATEUSER_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
        }),
        [UPDATEUSER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userUpdateError: error,
        }),
        [CHECK_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            checkError: null,
        }),
        [CHECK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            user: null,
            checkError: error,
        }),
        [LOGOUT]: state => ({
            ...state,
            user: null,
        }),
    },
    initialState,
);