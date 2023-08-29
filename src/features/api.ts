import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
import { GetAllQuests } from "./types";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/v1",
  prepareHeaders: (headers, { getState }) => {
    const token = getState() as RootState;
    headers.set("ngrok-skip-browser-warning", "abcd");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
});

// ////////////////////////

export const questApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuests: builder.query<GetAllQuests.Response, void>({
      query: () => ({
        url: "/quest/quests",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllQuestsQuery } = questApi;
export default api;
