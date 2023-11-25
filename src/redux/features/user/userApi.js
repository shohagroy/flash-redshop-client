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

    getAllUser: build.query({
      query: (arg) => ({
        url: "/users",
        method: "GET",
        params: arg,
      }),
      providesTags: ["users"],
    }),

    userLogin: build.mutation({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetAllUserQuery,
  useUserLoginMutation,
} = userApi;
