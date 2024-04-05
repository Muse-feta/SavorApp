import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        userData: null,
        token: null,
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
    },
});

export const { setCredentils, logout } = authSlice.actions;
export default authSlice.reducer;