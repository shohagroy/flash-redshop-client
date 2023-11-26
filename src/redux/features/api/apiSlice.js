import { getFromLocalStorage } from "@/utils/local-storage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      // process.env.NEXT_PUBLIC_DEVELOPMENT === "development"
      //   ? "http://localhost:5000/api/v1"
      //   : process.env.NEXT_PUBLIC_BACKEND_BASE_URL,

      "https://flash-redshop-server.vercel.app/api/v1",
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = getFromLocalStorage("token");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
    tagTypes: ["users", "categories", "products"],
  }),

  endpoints: (builder) => ({}),
});
