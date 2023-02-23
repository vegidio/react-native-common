import { configureStore } from '@reduxjs/toolkit';
import { api } from '@src/api';
import authSlice from './authSlice';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
