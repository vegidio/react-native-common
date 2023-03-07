import axios, { AxiosInstance, Method } from 'axios';
import { GraphQLClient } from 'graphql-request';
import { mutate } from 'swr';

type Headers = {
    [key: string]: string | number | boolean;
};

type ClientConfig = {
    axiosClient?: AxiosInstance;
    graphqlClient?: GraphQLClient;
    headers: Headers;
    restBaseUrl: (baseUrl: string) => void;
    graphqlUrl: (url: string) => void;
    clearCache: () => void;
};

/**
 * Call either `client.restBaseUrl()` or `client.graphqlUrl()` depending on the API that you want to use.
 */
export const client: ClientConfig = {
    headers: {},

    restBaseUrl(baseUrl: string, timeout: number = 5000) {
        this.axiosClient = axios.create({
            baseURL: baseUrl,
            timeout,
        });
    },

    graphqlUrl(url) {
        this.graphqlClient = new GraphQLClient(url);
    },

    clearCache() {
        mutate(() => true, undefined, { revalidate: false });
    },
};

// region - REST
type RestQParams = [Method, string, any?, Headers?];
type RestMParams = [string, string, Headers?];

export const restQuery = ([method, url, data, paramHeaders]: RestQParams): Promise<any> => {
    if (!client.axiosClient) {
        throw Error('You must call client.restBaseUrl() before using restQuery');
    }

    const headers = { ...client.headers, ...paramHeaders };
    return client.axiosClient.request({ method, url, data, headers }).then(res => res.data.data);
};

export const restMutation = ([method, url, paramHeaders]: RestMParams, { arg: data }: any): Promise<any> => {
    if (!client.axiosClient) {
        throw Error('You must call client.restBaseUrl() before using restMutation');
    }

    const headers = { ...client.headers, ...paramHeaders };
    return client.axiosClient.request({ method, url, data, headers }).then(res => res.data.data);
};
// endregion

// region - GraphQL
type GraphqlQParams = [string, any?, Headers?];
type GraphqlMParams = [string, Headers?];

export const graphqlQuery = ([query, variables, paramHeaders]: GraphqlQParams): Promise<any> => {
    if (!client.graphqlClient) {
        throw Error('You must call client.graphqlUrl() before using graphqlQuery');
    }

    const headers = { ...client.headers, ...paramHeaders } as any;
    return client.graphqlClient.request<any>(query, variables, headers).then(res => Object.values(res)[0]);
};

export const graphqlMutation = ([query, paramHeaders]: GraphqlMParams, { arg: variables }: any): Promise<any> => {
    if (!client.graphqlClient) {
        throw Error('You must call client.graphqlUrl() before using graphqlMutation');
    }

    const headers = { ...client.headers, ...paramHeaders } as any;
    return client.graphqlClient.request<any>(query, variables, headers).then(res => Object.values(res)[0]);
};
// endregion
