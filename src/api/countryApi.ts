import { Country, Response } from '@src/models';
import { api } from './api';

export const countryApi = api.injectEndpoints({
    endpoints: (builder) => ({
        countries: builder.query<Country[], void>({
            query: () => 'v1/countries',
            transformResponse: (response: Response<Country[]>) => response.data,
        }),
    }),
});

export const { useCountriesQuery } = countryApi;
