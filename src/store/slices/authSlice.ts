import { createSlice } from '@reduxjs/toolkit';
import { Token } from '@src/models';
import { apiSlice } from '@src/store/api';

export type AuthState = {
    token?: Token;
};

const initialState: AuthState = {};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(apiSlice.endpoints.signIn.matchFulfilled, (state, action) => {
            state.token = action.payload;
        });
    },
});

// Selectors
export const selectToken = (state: { auth: AuthState }) => state.auth.token;

// Actions
export const { logout } = authSlice.actions;
