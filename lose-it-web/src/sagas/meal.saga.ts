import { takeLatest, put } from 'redux-saga/effects'
import { mealOptionsLoading, mealOptionsLoaded, mealOptionsError } from '../features/user/mealSlice';
import { getMealOptions } from '../services/meal.service';
import { sagaActions } from './sagaActions';

function* fetch() {
    try {
        yield put(mealOptionsLoading());
        const mealOptions = yield getMealOptions();
        yield put(mealOptionsLoaded(mealOptions));
    } catch (ex) {
        yield put(mealOptionsError());
    }
}

export default function* mealSaga() {
    yield takeLatest(sagaActions.FETCH_MEAL_OPTIONS, fetch);
}