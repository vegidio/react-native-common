import axios, { AxiosInstance, Method } from 'axios';

type Headers = {
    [key: string]: string | number | boolean;
};

type FetcherConfig = {
    axiosClient?: AxiosInstance;
    headers: Headers;
    restBaseUrl: (baseUrl: string) => void;
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
};

// region - REST
export const restQuery = ([method, url, data, paramHeaders]: [Method, string, any?, Headers?]) => {
    if (!config.axiosClient) {
        throw Error('You must call config.restBaseUrl() before using restQuery');
    }

    const mergedHeaders = { ...config.headers, ...paramHeaders };
    return config.axiosClient.request({ method, url, data, headers: mergedHeaders }).then(res => res.data.data);
};

export const restMutation = ([method, url, paramHeaders]: [string, string, Headers?], { arg: data }: any) => {
    if (!config.axiosClient) {
        throw Error('You must call config.restBaseUrl() before using restMutation');
    }

    const mergedHeaders = { ...config.headers, ...paramHeaders };
    return config.axiosClient.request({ method, url, data, headers: mergedHeaders }).then(res => res.data.data);
};
// endregion
