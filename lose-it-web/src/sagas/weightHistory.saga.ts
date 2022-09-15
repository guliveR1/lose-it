import { takeLatest, put, call } from 'redux-saga/effects'
import { displayWeightHistoryError, weightHistoryLoaded, weightHistoryLoading } from '../features/user/weightHistorySlice';
import { getWeightHistory, addWeight } from '../services/weightHistory.service';
import { sagaActions } from './sagaActions';

function* fetch() {
    try {
        yield put(weightHistoryLoading());
        const weightHistory = yield getWeightHistory();
        yield put(weightHistoryLoaded(weightHistory));
    } catch (ex) {
        yield put(displayWeightHistoryError());
    }
}

function* add(action) {
    try {
        yield addWeight(action.payload);
        yield call(fetch);
    } catch(ex) {

    }
}

export default function* userSaga() {
    yield takeLatest(sagaActions.FETCH_WEIGHT_HISTORY, fetch);
    yield takeLatest(sagaActions.ADD_WEIGHT, add);
}