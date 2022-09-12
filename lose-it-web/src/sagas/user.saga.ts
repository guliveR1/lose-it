import { takeLatest, put } from 'redux-saga/effects'
import { displayError, loggedIn } from '../features/user/userSlice';
import * as userService from '../services/userService';
import { sagaActions } from './sagaActions';

function* login(action) {
    const { email, password } = action.payload;

    try {
        const user = yield userService.login(email, password);
        yield put(loggedIn(user));
    } catch(ex) {
        yield put(displayError());
    }
}

export default function* userSaga() {
    yield takeLatest(sagaActions.LOGIN, login);
}