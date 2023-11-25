import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createNewCategory: build.mutation({
      query: (data) => ({
        url: "/categories/create-category",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["categories"],
    }),

    getAllCategory: build.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
  }),
});

export const { useCreateNewCategoryMutation, useGetAllCategoryQuery } =
  categoryApi;
