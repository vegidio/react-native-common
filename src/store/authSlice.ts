import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignInRequestDto, Token } from '@src/models';

type State = {
    token?: Token;
};

const initialState: State = {};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<SignInRequestDto>) => {
            const { email, password } = action.payload;
            state.token = { accessToken: email, refreshToken: password };
        },
        logout: (state) => {
            state.token = undefined;
        },
    },
});

// Selectors
export const selectToken = (state: { auth: State }) => state.auth.token;

export const { login, logout } = authSlice.actions;
export default authSlice;
