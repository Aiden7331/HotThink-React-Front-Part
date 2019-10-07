import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
} from '../reducer/user';

function logInAPI(loginData) {
    // 서버에 요청을 보내는 부분
    return axios.post('/user/login', loginData, {
        withCredentials: true,
    });
}

function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data);
        yield put({ // put은 dispatch 동일
            type: LOG_IN_SUCCESS,
            data: result.data,
        });
    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
    }
}

function* watchLogIn() {
    yield takeEvery(LOG_IN_REQUEST, logIn);
}

function signUpAPI(signUpData) {
    // 서버에 요청을 보내는 부분
    return axios.post('/user/', signUpData);
}

function* signUp(action) {
    try {
        yield call(signUpAPI, action.data);
        yield put({ // put은 dispatch 동일
            type: SIGN_UP_SUCCESS,
        });
    } catch (e) { // 회원가입 실패
        alert('이미 존재하는 아이디입니다.');
        yield put({
            type: SIGN_UP_FAILURE,
            error: e,
        });
    }
}

function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchSignUp),

    ]);
}