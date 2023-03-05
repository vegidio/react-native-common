import axios, { AxiosInstance, Method } from 'axios';
import { GraphQLClient } from 'graphql-request';
import { mutate } from 'swr';

type Headers = {
    [key: string]: string | number | boolean;
};

type FetcherConfig = {
    axiosClient?: AxiosInstance;
    graphqlClient?: GraphQLClient;
    headers: Headers;
    restBaseUrl: (baseUrl: string) => void;
    graphqlUrl: (url: string) => void;
};

/**
 * Call either `config.restBaseUrl()` or `config.graphqlUrl()` depending on the API that you want to use.
 */
export const config: FetcherConfig = {
    headers: {},

    restBaseUrl(baseUrl: string) {
        this.axiosClient = axios.create({
            baseURL: baseUrl,
            timeout: 5000,
        });
    },

    graphqlUrl(url) {
        this.graphqlClient = new GraphQLClient(url);
    },
};

export const clearCache = () => {
    mutate(() => true, undefined, { revalidate: false });
};

// region - REST
export const restQuery = ([method, url, data, paramHeaders]: [Method, string, any?, Headers?]): Promise<any> => {
    if (!config.axiosClient) {
        throw Error('You must call config.restBaseUrl() before using restQuery');
    }

    const mergedHeaders = { ...config.headers, ...paramHeaders };
    return config.axiosClient.request({ method, url, data, headers: mergedHeaders }).then(res => res.data.data);
};

export const restMutation = (
    [method, url, paramHeaders]: [string, string, Headers?],
    { arg: data }: any,
): Promise<any> => {
    if (!config.axiosClient) {
        throw Error('You must call config.restBaseUrl() before using restMutation');
    }

    const mergedHeaders = { ...config.headers, ...paramHeaders };
    return config.axiosClient.request({ method, url, data, headers: mergedHeaders }).then(res => res.data.data);
};
// endregion

// region - GraphQL
export const graphqlQuery = ([query, variables, paramHeaders]: [string, any?, Headers?]): Promise<any> => {
    if (!config.graphqlClient) {
        throw Error('You must call config.graphqlUrl() before using graphqlQuery');
    }

    const mergedHeaders = { ...config.headers, ...paramHeaders } as any;
    return config.graphqlClient.request<any>(query, variables, mergedHeaders).then(res => Object.values(res)[0]);
};

export const graphqlMutation = ([query, paramHeaders]: [string, Headers?], { arg: variables }: any): Promise<any> => {
    if (!config.graphqlClient) {
        throw Error('You must call config.graphqlUrl() before using graphqlMutation');
    }

    const mergedHeaders = { ...config.headers, ...paramHeaders } as any;
    return config.graphqlClient.request<any>(query, variables, mergedHeaders).then(res => Object.values(res)[0]);
};
// endregion
