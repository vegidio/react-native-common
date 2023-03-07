import useSWR, { SWRResponse } from 'swr';
import useSWRMutation, { SWRMutationResponse } from 'swr/mutation';
import { Country, SignInRequestDto, Token, User } from '@src/models';
import { useAuthStore } from '@src/stores';
import { client, restMutation, restQuery } from './fetchers';

client.restBaseUrl('https://countries.vinicius.io/api/');

export const useLogin = (): SWRMutationResponse<Token, any, SignInRequestDto> => {
    const setToken = useAuthStore(state => state.setToken);

    return useSWRMutation(['POST', 'v1/auth/signin'], restMutation, {
        onSuccess: (data: Token) => {
            setToken(data);
            client.headers.Authorization = `Bearer ${data.accessToken}`;
        },
    });
};

export const useFetchMe = (): SWRResponse<User> => {
    return useSWR(['GET', 'v1/users/me'], restQuery);
};

export const useFetchCountries = (): SWRResponse<Country[]> => {
    return useSWR(['GET', 'v1/countries'], restQuery);
};
