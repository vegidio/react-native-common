import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { AuthState } from '@src/store';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://countries.vinicius.io/api/',
        timeout: 5000,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as { auth: AuthState }).auth.token;
            if (token?.accessToken) {
                headers.set('Authorization', `Bearer ${token.accessToken}`);
            }

            return headers;
        },
    }),
    tagTypes: ['user'],
    endpoints: () => ({}),
});
