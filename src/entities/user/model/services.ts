import { BaseQueryFn } from "@reduxjs/toolkit/query";
import {
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { UserResponse } from "@/shared/api";

let accessToken =
  typeof window !== "undefined" && JSON.stringify(localStorage.getItem("accessToken") || "");

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/users`,
  prepareHeaders: (headers, { getState }) => {
    headers.set("Authorization", accessToken + "");
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refreshResult: any = await baseQuery(
      {
        url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/auth/refresh-tokens`,
        method: "POST",
      },
      api,
      extraOptions,
    );
    if (refreshResult.data) {
      localStorage.setItem("accessToken", refreshResult.data.accessToken);
      accessToken = refreshResult.data.accessToken;
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getUser: build.query<UserResponse, string>({
      query: (userId) => ({
        url: `/${userId}`,
        method: "GET",
      }),
    }),
    getUsers: build.query<UserResponse[], undefined>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
    getUserByEmail: build.query<UserResponse, string>({
      query: (email) => ({
        url: `/email/${email}`,
        method: "GET",
      }),
    }),
    deleteUser: build.mutation<undefined, string>({
      query: (userId) => ({
        url: `/${userId}`,
        method: "DELETE",
      }),
    }),
  }),
});
