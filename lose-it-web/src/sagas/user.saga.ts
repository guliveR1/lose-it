import { takeLatest, put } from 'redux-saga/effects'
import { displayLoginError, displayRegisterError, loggedIn, userLoaded } from '../features/user/userSlice';
import * as userService from '../services/userService';
import { sagaActions } from './sagaActions';

function* login(action) {
    const { email, password } = action.payload;

    try {
        yield userService.login(email, password);
        window.location.href = '/';
    } catch (ex) {
        yield put(displayLoginError());
    }
}

function* register(action) {
    const { email, password } = action.payload;

    try {
        yield userService.register(email, password);
        window.location.href = '/';
    } catch (ex) {
        yield put(displayRegisterError());
    }
}

function* getUserData() {
    try {
        const user = yield userService.getUser();

        if (user) {
            yield put(loggedIn(user));
        }
    } finally {
        yield put(userLoaded());
    }
}

export default function* userSaga() {
    yield takeLatest(sagaActions.LOGIN, login);
    yield takeLatest(sagaActions.REGISTER, register);
    yield takeLatest(sagaActions.GET_USER, getUserData);
}