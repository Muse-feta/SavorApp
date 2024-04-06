import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        isLogin: false,
        isAdmin: false,
    },
    reducers: {
        setCredentils: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
        setIsLogin: (state, action) => {
            state.isLogin = action.payload;
        },
        setIsAdmin: (state, action) => {
            state.isAdmin = action.payload;
        },
    },
});

export const { setCredentils, logout, setIsLogin, setIsAdmin } = authSlice.actions;
export default authSlice.reducer;