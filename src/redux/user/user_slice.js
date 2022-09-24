import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        login: {
            loading: false,
            currentUser: undefined,
            isLogin: false,
            error: ""
        },
        loginAdmin: {
            loading: false,
            currentUser: undefined,
            isLogin: false,
            error: ""
        }
    },
    reducers: {
        login: (state, action) => {
            state.login.loading = action.payload;
        },
        loginSuccess: (state, action) => {
            state.login.loading = action.payload.loading;
            state.login.currentUser = action.payload.currentUser;
            state.login.isLogin = action.payload.isLogin;
        },
        loginFailed: (state, action) => {
            state.login.loading = false;
            state.login.error = action.payload
        },
        logout: (state) => {
            state.login.isLogin = false;
            state.login.currentUser = undefined;
        },
        updateUserInfor: (state, action) => {
            state.login.currentUser = action.payload;
        },
        //admin 
        loadAccount: (state, action) => {
            state.loginAdmin.currentUser = action.payload;
        },
        loginAdmin: (state) => {
            state.loginAdmin.loading = true;
        },
        loginAdminSuccess: (state, action) => {
            state.loginAdmin.loading = false;
            state.loginAdmin.currentUser = action.payload;
            state.loginAdmin.isLogin = true;
        },
        loginAdminFailed: (state, action) => {
            state.loginAdmin.loading = false;
            state.loginAdmin.error = action.payload
        }
    }
})
export const userActions = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;