import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthState } from '@src/store/slices';
import { Country, Response, SignInRequestDto, Token } from '@src/models';

export const apiSlice = createApi({
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
    endpoints: (builder) => ({
        signIn: builder.mutation<Token, SignInRequestDto>({
            query: (dto) => ({
                url: 'v1/auth/signin',
                method: 'POST',
                body: dto,
            }),
            transformResponse: (response: Response<Token>) => response.data,
        }),
        countries: builder.query<Country[], void>({
            query: () => 'v1/countries',
            transformResponse: (response: Response<Country[]>) => response.data,
        }),
    }),
});

export const { useSignInMutation, useCountriesQuery } = apiSlice;
