"use client";

import Card from "@/components/ui/Card";
import CategoryOptions from "@/components/ui/CategoryOptions";
import { useGetAllCategoryQuery } from "@/redux/features/category/categoryApi";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [active, setActive] = useState("");
  const { data, isLoading } = useGetAllCategoryQuery();
  const containerRefs = useRef({});

  useEffect(() => {
    if (containerRefs.current[active]) {
      containerRefs.current[active].scrollIntoView({ behavior: "smooth" });
    }
  }, [active]);

  return (
    <>
      <main className="relative">
        <section className=" top-0 left-0 flex justify-center">
          <div className="hidden lg:block w-[350px] h-full lg:sticky top-[7vh] left-0 ">
            <CategoryOptions
              setActive={setActive}
              active={active}
              data={data?.data}
            />
          </div>

          <div className="w-full border-l">
            {data?.data?.map((category) =>
              category?.products?.length ? (
                <div
                  key={category?.id}
                  ref={(ref) => (containerRefs.current[category?.id] = ref)}
                >
                  <div className="flex bg-white lg:sticky top-[7vh] justify-between items-center p-2 lg:py-1 ">
                    <p>
                      {category?.tittle}
                      <span className="mx-3 bg-black text-white p-1 rounded-[5px] font-serif">
                        {category?.products?.length}
                      </span>
                    </p>
                    <div>
                      <Link href={`/products?category=${category?.id}`}>
                        <button>See All</button>
                      </Link>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4  gap-6 m-3">
                    {category?.products?.slice(0, 4)?.map((item) => (
                      <Card key={item?.id} data={item} />
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  className="flex justify-center items-center p-4  text-xl text-blue-600 font-semibold"
                  key={category?.id}
                >
                  <p>No Products Found</p>
                </div>
              )
            )}
          </div>
        </section>
      </main>
    </>
  );
}
