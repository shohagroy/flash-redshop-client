import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createNewProduct: build.mutation({
      query: (data) => ({
        url: "/products/create-product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),

    getAllProducts: build.query({
      query: (arg) => ({
        url: "/products",
        params: arg,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
});

export const { useCreateNewProductMutation, useGetAllProductsQuery } =
  productApi;
