"use client";

import Card from "@/components/ui/Card";
import Loading from "@/components/ui/Loading";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const ProductPage = () => {
  const params = useSearchParams();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(8);
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const query = {};
  query["size"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  if (params.get("category")) {
    query["categoryId"] = params.get("category");
  }
  const { data, isLoading } = useGetAllProductsQuery(query);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <main>
      <section>
        <div className="p-2 lg:p-10 min-h-[60vh]">
          <div className="grid grid-cols-2 lg:grid-cols-4  gap-6 m-3">
            {data?.data?.data?.map((item) => (
              <Card key={item?.id} data={item} />
            ))}
          </div>
        </div>

        <div className="mx-2 rounded-b-md text-xs bg-white shadow-md border border-t-none font-semibold text-gray-500 ">
          <div className="p-4  flex  justify-between items-center col-span-4">
            <p>
              Showing {page <= 1 ? 1 : (page - 1) * size} -{" "}
              {page <= 1
                ? data?.data?.meta?.total >= 6
                  ? size
                  : data?.data?.meta?.total
                : page * size > data?.data?.meta?.total
                ? data?.data?.meta?.total
                : page * size}{" "}
              of {data?.data?.meta?.total}
            </p>

            <div className="flex items-center">
              <button
                disabled={page === 1}
                className={`hover:bg-gray-200
                duration-300 rounded-md mx-1`}
                onClick={() => setPage(page - 1)}
              >
                <AiOutlineLeft size={20} />
              </button>

              <button
                className={`p-2 ${
                  page === 1
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-black"
                }  duration-300 rounded-md mx-1 hover:bg-red-600/40 hover:text-white`}
                onClick={() => setPage(page === 1 ? 1 : page - 1)}
              >
                {page === 1 ? 1 : page - 1}
              </button>

              {page > 1 && (
                <button
                  className={`p-2 ${
                    page > 1
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-black"
                  }  duration-300 rounded-md mx-1 hover:bg-red-600 hover:text-white`}
                  onClick={() => setPage(page === 1 ? 2 : page)}
                >
                  {page === 1 ? 2 : page}
                </button>
              )}

              {page > 2 && (
                <button
                  className={`p-2 bg-gray-200 text-black duration-300 rounded-md mx-1 hover:bg-red-600/40 hover:text-white`}
                  onClick={() => setPage(page === 1 ? 3 : page + 1)}
                  disabled={page === Math.ceil(data?.data?.meta?.total / size)}
                >
                  {page === 1 ? 3 : page + 1}
                </button>
              )}

              <span>-</span>

              <button
                disabled={page === Math.ceil(data?.data?.meta?.total / size)}
                onClick={() => setPage(page + 1)}
                className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1"
              >
                {Math.ceil(data?.data?.meta?.page + 1)}
              </button>

              <button
                disabled={page === Math.ceil(data?.data?.meta?.total / size)}
                className={`hover:bg-gray-200
               duration-300 rounded-md mx-1`}
                onClick={() => setPage(page + 1)}
              >
                <AiOutlineRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
