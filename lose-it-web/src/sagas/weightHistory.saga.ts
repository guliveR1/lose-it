import { takeLatest, put } from 'redux-saga/effects'
import { displayWeightHistoryError, weightHistoryLoaded, weightHistoryLoading } from '../features/user/weightHistorySlice';
import { getWeightHistory } from '../services/weightHistory.service';
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

export default function* userSaga() {
    yield takeLatest(sagaActions.FETCH_WEIGHT_HISTORY, fetch);
}