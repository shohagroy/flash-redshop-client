import React from "react";
import Image from "next/image";

const Card = ({ data }) => {
  const { name, price, discount, images } = data || {};

  return (
    <div className="">
      <div className="">
        <Image
          src={images[0]?.secure_url}
          className="hover:scale-105 duration-300"
          width={200}
          height={300}
          alt="image"
        />
      </div>
      <p className="pt-1 text-[1rem]">{name?.slice(0, 15)}...</p>
      <p className="text-[0.75rem] font-semibold">
        ৳{(price - (discount * 100) / price).toFixed(2)} <del>৳{price}</del>{" "}
        <span className="text-red-600">{discount}% OFF</span>
      </p>

      <div>
        <button className="w-full border border-black rounded-md p-2 my-3">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Card;
