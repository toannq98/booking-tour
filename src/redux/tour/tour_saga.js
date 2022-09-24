import { call, put, takeLatest } from 'redux-saga/effects';
import { history } from '~/utils';

import {
    loadTourHot,
    loadCategories,
    loadTourByCategoryInCountry,
    loadTourByCategoryOverseas,
    loadTourSearch,
    loadSortPriceHightToLow,
    loadSortPriceLowToHight,
    loadToursCatePage,
    loadTour,
    setToursBooked,
    loadToursBooked
} from './tour_slice';
import * as api from './tour_api';

function* fetchTours() {
    try {
        const res = yield call(api.fetchTours);
        yield put(loadTourHot({ tours: res.data }));
    } catch (e) {
        console.log(e);
    }
}

function* fetchCategories() {
    try {
        const res = yield call(api.fetchCategories);
        yield put(loadCategories({ categories: res.data }));
    } catch (e) {
        console.log(e);
    }
}

function* fetchTourByCategoryInCountry(action) {
    try {
        const res = yield call(api.fetchTourByCategoryInCountry, action.payload.cateId);
        yield put(loadTourByCategoryInCountry({ tours: res.data }));
    } catch (e) {
        console.log(e);
    }
}
function* fetchTourByCategoryOverseas(action) {
    try {
        const res = yield call(api.fetchTourByCategoryOverseas, action.payload.cateId);
        yield put(loadTourByCategoryOverseas({ tours: res.data }));
    } catch (e) {
        console.log(e);
    }
}
function* fetchSearchTours(action) {
    try {
        const res = yield call(api.fetchSearchTours, action.payload.textSearch);
        yield put(loadTourSearch({ tours: res.data }));
    } catch (e) {
        console.log(e);
    }
}

function* fetchSortPriceHightToLow(action) {
    // console.log(action.payload.id);
    try {
        const res = yield call(api.fetchSortPriceHightToLow, action.payload.id);
        yield put(loadSortPriceHightToLow({ tours: res.data }));
    } catch (e) {
        console.log(e);
    }
}
function* fetchSortPriceLowToHight(action) {
    try {
        const res = yield call(api.fetchSortPriceLowToHight, action.payload.id);
        yield put(loadSortPriceLowToHight({ tours: res.data }));
    } catch (e) {
        console.log(e);
    }
}

function* fetchToursCatePage(action) {
    try {
        const res = yield call(api.fetchToursCatePage, action.payload.id);
        yield put(loadToursCatePage({ tours: res.data }));
    } catch (e) {
        console.log(e);
    }
}

function* fetchFilterToursByCate(action) {
    try {
        const res = yield call(api.fetchFilterToursByCate, action.payload.prams);
        yield put(loadToursCatePage({ tours: res.data }));
    } catch (e) {
        console.log(e);
    }
}

function* fetchTour(action) {
    try {
        const res = yield call(api.fetchTour, action.payload.id);
        yield put(loadTour({ tour: res.data }));
    } catch (e) {
        console.log(e);
    }
}

function* handleBoookTour(action) {
    console.log(action.payload);
    try {
        yield call(api.addItemForToursUserBooked, action.payload);
        yield call(api.deleteTourAfterBook, action.payload.idTour);
        history.push("/confirmation");

    } catch (e) {
        console.log(e.response.data);
    }
}

function* fetchToursBooked() {
    try {
        const res = yield call(api.fetchToursBooked);
        yield put(loadToursBooked(res.data));

    } catch (e) {
        console.log(e.response.data);
    }
}

function* tourSaga() {
    yield takeLatest('fetchTours', fetchTours);
    yield takeLatest('fetchCategories', fetchCategories);
    yield takeLatest('fetchTourByCategoryInCountry', fetchTourByCategoryInCountry);
    yield takeLatest('fetchTourByCategoryOverseas', fetchTourByCategoryOverseas);
    yield takeLatest('fetchSearchTours', fetchSearchTours);
    yield takeLatest('fetchSortPriceHightToLow', fetchSortPriceHightToLow);
    yield takeLatest('fetchSortPriceLowToHight', fetchSortPriceLowToHight);
    yield takeLatest('fetchToursCatePage', fetchToursCatePage);
    yield takeLatest('fetchFilterToursByCate', fetchFilterToursByCate);
    yield takeLatest('fetchTour', fetchTour);
    // yield takeEvery('fetchDeleteTourAfterBook', fetchDeleteTourAfterBook);
    yield takeLatest('tour/handleBoookTour', handleBoookTour);
    yield takeLatest('tour/fetchToursBooked', fetchToursBooked);
}

export default tourSaga;