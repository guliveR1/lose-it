import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './features/user/userSlice';
import createSagaMiddleware from 'redux-saga'
import userSaga from './sagas/user.saga';
import weightHistorySaga from './sagas/weightHistory.saga';
import { weightHistorySlice } from './features/user/weightHistorySlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        weightHistory: weightHistorySlice.reducer,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(userSaga as any);
sagaMiddleware.run(weightHistorySaga as any);

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch