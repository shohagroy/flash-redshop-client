import React from "react";

const CategoryOptions = ({ data, setActive, active }) => {
  return (
    <div className="">
      <div className="flex items-center py-1">
        <p>Categories</p>
        <p className=" mx-3 bg-black text-white p-1 rounded-[5px] font-serif">
          {data?.length}
        </p>
      </div>

      <div>
        {data?.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(item?.id)}
            className={`py-1  w-full text-left px-3 ${
              active === item?.id && "border-r-[4px] border-blue-500 bg-blue-50"
            }`}
          >
            {item?.tittle}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryOptions;
