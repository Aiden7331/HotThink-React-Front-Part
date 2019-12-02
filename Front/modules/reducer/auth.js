import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../saga/createRequestSaga';
import * as authAPI from '../api/auth';

const CHANGE_FIELD = '/auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const AUTH_NULL = 'auth/AUTH_NULL';
const SET_TOKEN = 'auth/SET_TOKEN';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER');

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,//register,login
    key,//email,pw,pwck
    value,//실제 바꾸려는 값
  })
);

export const setToken = createAction(SET_TOKEN, auth => auth);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);//register/login

export const register = createAction(REGISTER, ({ email, pw, name, nickName, tel, preferenceList }) => ({
  email,
  pw,
  name,
  nickName,
  tel,
  preferenceList,
}));

export const login = createAction(LOGIN, ({ email, pw }) => ({
  email,
  pw,
}));

export const authNull = createAction(AUTH_NULL);

//사가생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  register: {
    email: '',
    pw: '',
    pwck: '',
    name: '',
    nickName: '',
    tel: '',
    preferenceList: [],
  },
  login: {
    email: '',
    pw: '',
  },
  auth: null,
  // loginModalOpen:false,
  // signUpModalOpen:false,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value;
      }),
    [SET_TOKEN]: (state, { payload: auth }) => ({
      ...state,
      auth,
    }),
    [INITIALIZE_FORM]: (state, { payload: { form } }) => ({
      ...state,
      [form]: initialState[form],
    }),
    //회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    //회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    //로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    //로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [AUTH_NULL]: (state, { payload: error }) => ({
      ...state,
      auth: null,
    }),
  },
  initialState,
);

export default auth;
