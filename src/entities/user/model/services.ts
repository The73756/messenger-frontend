import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { UserResponse } from "@/shared/api";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "localhost:3000/api/users", //localhost:3000 временно
  }),
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
    updateUser: build.mutation<undefined, string>({
      query: (userId) => ({
        url: `/${userId}`,
        method: "PUT",
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
