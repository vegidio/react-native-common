import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import { apiSlice } from '@src/store/apiSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
