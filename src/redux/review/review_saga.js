import { call, put, takeLatest } from 'redux-saga/effects';

import { reviewActions } from './review_slice';
import * as api from './review_api';
// import { history } from '~/utils';

function* handleAddReview(action) {
    try {
        yield call(api.addReview, action.payload);
        // yield put(reviewActions.addReview(res.data));
    } catch (e) {
        console.log(e);

    }
}

function* handleFetchReviews(action) {
    try {
        const res = yield call(api.fetchReviews, action.payload);
        yield put(reviewActions.loadReviews(res.data));
    } catch (e) {
        console.log(e);

    }
}

function* reviewSaga() {
    yield takeLatest('review/handleAddReview', handleAddReview);
    yield takeLatest('review/handleFetchReviews', handleFetchReviews);

}

export default reviewSaga;