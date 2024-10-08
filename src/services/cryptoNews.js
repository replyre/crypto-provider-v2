import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Add your RapidAPI key and host here
// const cryptoApiHeaders = {
//   "x-rapidapi-key": "460698c2e9msh28f59bc4ae3ec2fp1565a2jsn27a4434f8e93",
//   "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
//   "X-BingApis-SDK": "true",
// };

const baseUrl = "https://newsdata.io/api/1";
const createRequest = (url) => ({ url });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (newsCategory) =>
        createRequest(
          `/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&country=in&language=en&q=${newsCategory}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
