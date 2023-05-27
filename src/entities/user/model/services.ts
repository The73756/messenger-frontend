import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IUser } from "@/shared/constants";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${"localhost:3000"}/api/users`, //localhost:3000 временно
  }),
  endpoints: (build) => ({
    getUser: build.query<IUser, string>({
      query: (userId) => ({
        url: `/${userId}`,
        method: "GET",
      }),
    }),
    getUsers: build.query<IUser[], undefined>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
    getUserByEmail: build.query<IUser, string>({
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
