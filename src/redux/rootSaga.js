import { all } from "redux-saga/effects";

//import saga
import tourSaga from './tour/tour_saga';
import userSaga from './user/user_saga';
import reviewSaga from "./review/review_saga";

export default function* rootSaga() {
    yield all([
        tourSaga(),
        userSaga(),
        reviewSaga()
    ]);
}