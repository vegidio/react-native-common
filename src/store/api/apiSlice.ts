import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthState } from '@src/store/slices';
import { Country, Response, SignInRequestDto, Token, User } from '@src/models';

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
    tagTypes: ['user'],
    endpoints: (builder) => ({
        signIn: builder.mutation<Token, SignInRequestDto>({
            query: (dto) => ({
                url: 'v1/auth/signin',
                method: 'POST',
                body: dto,
            }),
            invalidatesTags: ['user'],
            transformResponse: (response: Response<Token>) => response.data,
        }),
        me: builder.query<User, void>({
            query: () => 'v1/users/me',
            providesTags: ['user'],
            transformResponse: (response: Response<User>) => response.data,
        }),
        countries: builder.query<Country[], void>({
            query: () => 'v1/countries',
            transformResponse: (response: Response<Country[]>) => response.data,
        }),
    }),
});

export const { useCountriesQuery, useMeQuery, useSignInMutation } = apiSlice;
