import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../api/auth';
import * as userAPI from '../api/user';
import createRequestSaga, {
  createRequestActionTypes,
} from '../saga/createRequestSaga';
import produce from 'immer';

const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리

const CHANGE_FIELD = 'user/CHANGE_FIELD';
const INITIALIZE_FORM = 'user/INITIALIZE_FORM';
const INITIALIZE_USER_UPDATE_FORM = 'user/INITIALIZE_USER_UPDATE_FORM';

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
  ({ form, key, value }) => ({
    form,//register,login
    key,//email,pw,pwck
    value,//실제 바꾸려는 값
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form);
export const initializeUpdateForm = createAction(INITIALIZE_USER_UPDATE_FORM,
  ({ form, value }) => ({
  form,
  value,
}));

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);
export const updateUser = createAction(UPDATEUSER, ({ nickName, pw, tel, preferenceList }) =>
  ({
    nickName,
    pw,
    tel,
    preferenceList,
  }),
);

//포인트 충전
const [POINT_CHARGE, POINT_CHARGE_SUCCESS, POINT_CHARGE_FAILURE]  = createRequestActionTypes('user/POINT_CHARGE');
export const pointCharge = createAction(POINT_CHARGE, ({point}) => ({ point }));
const pointChargeSaga = createRequestSaga(POINT_CHARGE, userAPI.pointCharge);

//팔로우 리스트
const [FOLLOW, FOLLOW_SUCCESS, FOLLOW_FAILURE]  = createRequestActionTypes('user/FOLLOW');
export const follow = createAction(FOLLOW);
const followSaga = createRequestSaga(FOLLOW, userAPI.followList);

//유저 조회
const [TARGETUSER, TARGETUSER_SUCCESS, TARGETUSER_FAILURE]  = createRequestActionTypes('user/TARGET');
export const targetUser = createAction(TARGETUSER, ({nickName}) => ({nickName}));
const targetUserSaga = createRequestSaga(TARGETUSER, userAPI.targetUser);

//팔로우 하기
const [CREATE_FOLLOW, CREATE_FOLLOW_SUCCESS, CREATE_FOLLOW_FAILURE] = createRequestActionTypes('user/CREATE_FOLLOW');
export const createFollow = createAction(CREATE_FOLLOW, ({nickName}) => ({nickName}));
const createFollowSaga = createRequestSaga(CREATE_FOLLOW, userAPI.follow);
//언팔 하기

const [DELETE_FOLLOW, DELETE_FOLLOW_SUCCESS, DELETE_FOLLOW_FAILURE] = createRequestActionTypes('user/DELETE_FOLLOW');
export const deleteFollow = createAction(DELETE_FOLLOW, ({nickName}) => ({nickName}));
const deleteFollowSaga = createRequestSaga(DELETE_FOLLOW, userAPI.unfollow);



const checkSaga = createRequestSaga(CHECK, authAPI.check);

const updateUserSaga = createRequestSaga(UPDATEUSER, userAPI.updateUser);

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
  yield takeLatest(POINT_CHARGE, pointChargeSaga);
  yield takeLatest(FOLLOW, followSaga);
  yield takeLatest(TARGETUSER, targetUserSaga);
  yield takeLatest(CREATE_FOLLOW, createFollowSaga);
  yield takeLatest(DELETE_FOLLOW, deleteFollowSaga);
}

const initialState = {
  user: null,
  checkError: null,
  userUpdateError: null,
  userUpdate: {
    nickName: '',
    tel: '',
    pw: '',
    pwck: '',
    preferenceList: [],
  },
  follow: null,
  target: null,

};

export default handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: { form } }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [INITIALIZE_USER_UPDATE_FORM]: (state, { payload: { form, value } }) =>
      produce(state, draft => {
        draft[form] = value;
      }),
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [UPDATEUSER_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      userUpdateError: success,
    }),
    [UPDATEUSER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      userUpdateError: error,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
      userUpdateError: null,
      follow: null,
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
    //포인트 충전 관련
    [POINT_CHARGE_SUCCESS]: (state) => ({
      ...state,
      userUpdateError: "PointChargeSuccess",
    }),
    [POINT_CHARGE_FAILURE]: (state, {payload: error}) => ({
      ...state,
      userUpdateError: error,
    }),
    //팔로우리스트 관련
    [FOLLOW_SUCCESS]: (state, {payload: follow }) => (
      {
        ...state,
        follow
      }
    ),
    [FOLLOW_FAILURE]: (state, {payload: error}) => ({
      ...state,
      userUpdateError: error,
    }),
    //유저조회 관련
    [TARGETUSER_SUCCESS]: (state, {payload: targetUser }) => (
      {
        ...state,
        checkError: null,
        target: targetUser,
      }
    ),
    [TARGETUSER_FAILURE]: (state, {payload: error}) => ({
      ...state,
      checkError: error,
      target: null,
    }),
    //팔로우 관련
    [CREATE_FOLLOW_SUCCESS]: (state, {payload: followers }) =>
      produce(state, draft => {
        draft["target"]["followers"] = followers;
      }),
    [CREATE_FOLLOW_FAILURE]: (state, {payload: error }) => (
      {
        ...state,
        updateUserError: error,
      }
    ),
    //언팔로우 관련
    [DELETE_FOLLOW_SUCCESS]: (state, {payload: followers }) =>
      produce(state, draft => {
      draft["target"]["followers"] = followers;
    }),
    [DELETE_FOLLOW_FAILURE]: (state, {payload: error }) => (
      {
        ...state,
        updateUserError: error,
      }
    ),

  },
  initialState,
);
