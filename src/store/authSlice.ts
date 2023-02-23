import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Token } from '@src/models';
import { api, authApi } from '@src/api';

export interface AuthState {
    token?: Token;
}

const initialState: AuthState = {};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.signIn.matchFulfilled, (state, action) => {
            state.token = action.payload;
        });
    },
});

export default authSlice;

// Thunks
export const logoutAndClearCache = createAsyncThunk('logoutAndClearCache', async (_, { dispatch }) => {
    dispatch(authSlice.actions.logout());
    dispatch(api.util.resetApiState());
});

// Selectors
export const selectToken = (state: { auth: AuthState }) => state.auth.token;

// Actions
export const { logout } = authSlice.actions;
