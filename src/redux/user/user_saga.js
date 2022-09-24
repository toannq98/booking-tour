import { call, put, takeLatest } from 'redux-saga/effects';
import { history } from '~/utils';
import * as api from './user_api';
import { userActions } from './user_slice';
// console.log(history);

function* fetchCreateUser(action) {
    try {
        yield call(api.fetchCreateUser, action.payload.params);
        history.push("/sign-in");
    } catch (e) {
        console.log(e.response.data);

    }
}

function* handleLogin(action) {
    try {
        yield put(userActions.login(true));
        const res = yield call(api.addLogged, action.payload);
        yield put(userActions.login(false));
        localStorage.setItem("logged", JSON.stringify(res.data));
        history.push("/");
    } catch (e) {
        yield put(userActions.loginFailed(e.response.data));
        console.log(e);
    }
}

function* checkLogin(action) {
    try {
        const res = yield call(api.checkLogin, action.payload.id, action.payload.accessToken);
        yield put(userActions.loginSuccess({
            loading: false,
            currentUser: res.data,
            isLogin: true
        }));
    } catch (e) {
        console.log(e);
    }
}

function* handleLogout() {
    yield put(userActions.logout());
    localStorage.removeItem("logged");
}


// update user info

function* handleUpdateName(action) {
    try {
        const res = yield call(api.handleUpdateUserInfor, action.payload);
        yield put(userActions.updateUserInfor(res.data));

    } catch (e) {
        console.log(e);
    }
}

function* handleUpdateEmail(action) {
    try {
        const res = yield call(api.handleUpdateUserInfor, action.payload);
        yield put(userActions.updateUserInfor(res.data));

    } catch (e) {
        console.log(e);
    }
}

function* handleUpdateSex(action) {
    try {
        const res = yield call(api.handleUpdateUserInfor, action.payload);
        yield put(userActions.updateUserInfor(res.data));

    } catch (e) {
        console.log(e);
    }
}

function* handleUpdateDateOfBirth(action) {
    try {
        const res = yield call(api.handleUpdateUserInfor, action.payload);
        yield put(userActions.updateUserInfor(res.data));

    } catch (e) {
        console.log(e);
    }
}
function* handleUpdateAvatar(action) {
    try {
        const res = yield call(api.handleUpdateUserInfor, action.payload);
        yield put(userActions.updateUserInfor(res.data));

    } catch (e) {
        console.log(e);
    }
}
function* fetchAccoutAdmin() {
    try {
        const res = yield call(api.fetchAccoutAdmin);
        yield put(userActions.loadAccount(res.data));

    } catch (e) {
        console.log(e);
    }
}

function* checkAdminLogin() {
    let loginAdminStorage = "";

    if (localStorage.hasOwnProperty("loginAdmin")) {
        try {
            loginAdminStorage = JSON.parse(localStorage.getItem("loginAdmin"));
            yield put(userActions.loginAdminSuccess(loginAdminStorage));
        } catch (e) {
            loginAdminStorage.removeItem("loginAdmin");
            history.push("/admin");
            yield put(userActions.loginAdminFailed("Hãy đăng nhập tài khoản của bạn để đi đến bảng điều khiển"));
        }
    } else {
        history.push("/admin");
        yield put(userActions.loginAdminFailed("Hãy đăng nhập tài khoản của bạn để đi đến bảng điều khiển"));
    }
}


function* userSaga() {
    // yield fork(watchLoginFlow);
    // yield fork(handleUpdateUserInfor);
    yield takeLatest('user/fetchCreateUser', fetchCreateUser);
    yield takeLatest('user/handleLogin', handleLogin);
    yield takeLatest('user/handleLogout', handleLogout);
    yield takeLatest('user/checkLogin', checkLogin);
    yield takeLatest('user/handleUpdateAvatar', handleUpdateAvatar);
    yield takeLatest('user/handleUpdateName', handleUpdateName);
    yield takeLatest('user/handleUpdateEmail', handleUpdateEmail);
    yield takeLatest('user/handleUpdateSex', handleUpdateSex);
    yield takeLatest('user/handleUpdateDateOfBirth', handleUpdateDateOfBirth);
    yield takeLatest('user/fetchAccoutAdmin', fetchAccoutAdmin);
    yield takeLatest('user/checkAdminLogin', checkAdminLogin);

}

export default userSaga;