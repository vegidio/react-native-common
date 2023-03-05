import useSWR, { SWRResponse } from 'swr';
import useSWRMutation, { SWRMutationResponse } from 'swr/mutation';
import { Country, SignInRequestDto, Token, User } from '@src/models';
import { useAuthStore } from '@src/stores';
import { config, graphqlMutation, graphqlQuery } from './fetchers';

config.graphqlUrl('https://countries.vinicius.io/graphql');

export const useLogin = (): SWRMutationResponse<Token, any, SignInRequestDto> => {
    const setToken = useAuthStore(state => state.setToken);

    const query = `
        mutation signIn($dto: SignInRequestDto!) {
            signIn(dto: $dto) {
                accessToken
                refreshToken
            }
        }
    `;

    return useSWRMutation([query], graphqlMutation, {
        onSuccess: (data: Token) => {
            setToken(data);
            config.headers.Authorization = `Bearer ${data.accessToken}`;
        },
    });
};

export const useFetchMe = (): SWRResponse<User> => {
    const query = `
        query me {
            me {
                id
                name
                username
                email
            }
        }
    `;

    return useSWR([query], graphqlQuery);
};

export const useFetchCountries = (): SWRResponse<Country[]> => {
    const query = `
        query countries {
            countries {
                code
                name {
                    common
                    official
                    nativeName {
                        language
                        common
                        official
                    }
                }
                capital
                region
                subRegion
                languages {
                    code
                    name
                }
                currencies {
                    code
                    name
                    symbol
                }
                population
                area
                coordinates
                flags {
                    png
                    svg
                }
            }
        }
    `;

    return useSWR([query], graphqlQuery);
};
