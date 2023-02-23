import { Response, User } from '@src/models';
import { api } from './api';

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        me: builder.query<User, void>({
            query: () => 'v1/users/me',
            providesTags: ['user'],
            transformResponse: (response: Response<User>) => response.data,
        }),
    }),
});

export const { useMeQuery } = userApi;
