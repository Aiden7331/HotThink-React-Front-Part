import {combineReducers} from 'redux';
import { all } from 'redux-saga/effects';
import user, {userSaga} from './user';
import auth, {authSaga} from "./auth";
import freeThinks , {freeThinksSaga} from "./freeThinks"
import freeThink , {freeThinkSaga} from "./freeThink"
import loading from "./loading";

const rootReducer = combineReducers({
    user,
    auth,
    loading,
    freeThinks,
    freeThink
});

export function* rootSaga() {
    yield all([authSaga(),userSaga(),freeThinksSaga(),freeThinkSaga()]);
}

export default rootReducer;

