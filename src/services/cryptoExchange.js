import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.coingecko.com/api/v3";

const createRequest = (url) => ({ url });

export const exchangeApi = createApi({
  reducerPath: "exchangeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: (count) => createRequest(`/exchanges?per_page=${count}`), // Fetch list of exchanges
    }),

    getExchangeDetails: builder.query({
      query: (exchangeId) => createRequest(`/exchanges/${exchangeId}`),
    }),
  }),
});

export const { useGetExchangesQuery, useGetExchangeDetailsQuery } = exchangeApi;
