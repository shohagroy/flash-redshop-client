"use client";

import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

const CategoryPage = () => {
  const [categoryDrawer, setCategoryDeawer] = useState(false);
  const [searchCategory, setSearchCategory] = useState("");
  const [showPage, setShowPage] = useState(1);

  const query = {
    search: searchCategory,
    skip: showPage === 1 ? 0 : (showPage - 1) * 10,
  };
  return (
    <>
      <main>
        <section className="max-w-7xl mx-auto bg-gray-100 min-h-screen">
          <div>
            <div className="">
              <h3 className="lg:py-4 text-xl font-semibold p-2 ">Categories</h3>

              <div>
                <input type="text" placeholder="search..." />
              </div>

              {/* products search section  */}

              <div>
                <div></div>
              </div>
            </div>
            <button onClick={() => console.log("click")}>hello</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default CategoryPage;
