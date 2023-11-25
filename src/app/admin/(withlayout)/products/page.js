"use client";

import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { useGetAllCategoryQuery } from "@/redux/features/category/categoryApi";
import Loading from "@/components/ui/Loading";
import ProductDrawer from "@/components/admin/ProductDrawer";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import ProductTable from "@/components/admin/ProductTable";

const ProductPage = () => {
  const [productDrawer, setProductDeawer] = useState(false);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const query = {};
  query["size"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  if (categoryId) {
    query["categoryId"] = categoryId;
  }

  const { data, isLoading } = useGetAllProductsQuery(query);
  const { data: categoryData } = useGetAllCategoryQuery();

  const categoryOptions = categoryData?.data.map((item) => {
    return {
      value: item.id,
      lebel: item.tittle,
    };
  });

  categoryOptions?.unshift({
    value: "",
    lebel: "Select Category",
  });

  return (
    <>
      <main>
        <section className="relative max-w-7xl mx-auto bg-gray-100 min-h-[90vh]">
          <div className="mx-10">
            <h3 className="lg:py-4 text-xl font-semibold py-4 ">Products</h3>

            {/* products search section  */}
            <div className="my-3 grid grid-cols-1 lg:grid-cols-5  py-6 px-4 gap-6 rounded-md shadow-sm bg-white w-full">
              <div className="col-span-2 w-full flex bg-gray-100 justify-center items-center rounded-md border">
                <p className="text-xl pl-2 text-gray-500">
                  <IoSearchOutline />
                </p>
                <input
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="p-2 w-full bg-gray-100 focus:outline-none"
                  type="text"
                  placeholder="Search..."
                />
              </div>

              <div className=" w-full flex bg-gray-100 justify-center items-center rounded-md border">
                <select
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="w-full h-full p-2"
                >
                  {categoryOptions?.map((item, i) => {
                    return (
                      <option key={i} value={item?.value}>
                        {item?.lebel}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className=" w-full flex bg-gray-100 justify-center items-center rounded-md border">
                <select
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full h-full p-2"
                >
                  <option value={""}>Sort By Price</option>
                  <option value={"asc"}>Price High To Low</option>
                  <option value={"desc"}>Price Low To High</option>
                </select>
              </div>

              <div className="w-full">
                <button
                  onClick={() => setProductDeawer(true)}
                  className="w-full h-full p-3 lg:p-0 bg-blue-600/40 rounded-md text-white hover:bg-blue-600 duration-300"
                >
                  + Add Product
                </button>
              </div>
            </div>

            {isLoading ? (
              <Loading />
            ) : (
              <ProductTable
                data={data?.data}
                setShowPage={setPage}
                showPage={page}
              />
            )}
          </div>
        </section>

        <ProductDrawer
          categoryOptions={categoryOptions}
          open={productDrawer}
          setOpen={setProductDeawer}
        />
      </main>
    </>
  );
};

export default ProductPage;
