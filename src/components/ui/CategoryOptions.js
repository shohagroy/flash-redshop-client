import React from "react";

const CategoryOptions = () => {
  return (
    <div className="">
      <div className="flex items-center py-1">
        <p>Categories</p>
        <p className=" mx-3 bg-black text-white p-1 rounded-[5px] font-serif">
          4
        </p>
      </div>

      <div>
        <button className="py-1 bg-blue-50 border-r-[4px] border-blue-500 w-full text-left px-3">
          IPHONE CASE
        </button>
        <button className="py-1  w-full text-left px-3">IPHONE CASE</button>
        <button className="py-1  w-full text-left px-3">IPHONE CASE</button>
      </div>
    </div>
  );
};

export default CategoryOptions;
