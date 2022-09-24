import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { history } from '~/utils';
import tourReducer from './tour/tour_slice';
import userReducer from './user/user_slice';
import reviewReducer from './review/review_slice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
    reducer: {
        tour: tourReducer,
        user: userReducer,
        review: reviewReducer
    },
    middleware

})

sagaMiddleware.run(rootSaga, history);

// sagaMiddleware.run(tourSaga);
// sagaMiddleware.run(userSaga);