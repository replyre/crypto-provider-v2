import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi.js";
import { cryptoNewsApi } from "../services/cryptoNews.js";
import { exchangeApi } from "../services/cryptoExchange.js";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [exchangeApi.reducerPath]: exchangeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoApi.middleware,
      cryptoNewsApi.middleware,
      exchangeApi.middleware
    ),
});
