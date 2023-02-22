import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '@src/store/slices';
import { apiSlice } from '@src/store/api';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
