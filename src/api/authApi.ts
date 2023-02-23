import { Response, SignInRequestDto, Token } from '@src/models';
import { api } from './api';

export const authApi = api.injectEndpoints({
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
    }),
});

export const { useSignInMutation } = authApi;
