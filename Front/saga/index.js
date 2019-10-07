import {all,fork} from 'redux-saga/effects';
import user from './user';
import axios from "axios";

const HOTTHINKBACK = '';
axios.defaults.baseURL = HOTTHINKBACK;

export default function* rootSaga(){
    yield all([
        fork(user),
    ]);
}