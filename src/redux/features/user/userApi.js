import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (data) => ({
        url: "/users/create-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    getUserProfile: build.query({
      query: () => ({
        url: "/users/get-profile",
        method: "GET",
      }),
      providesTags: ["users"],
    }),

    getAllUser: build.query({
      query: (arg) => ({
        url: "/users",
        method: "GET",
        params: arg,
      }),
      providesTags: ["users"],
    }),
  }),
});

export const { useCreateUserMutation } = userApi;
