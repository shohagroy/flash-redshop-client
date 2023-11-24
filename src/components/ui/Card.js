import React from "react";
import Img from "../../assets/test.webp";
import Image from "next/image";

const Card = () => {
  return (
    <div className="">
      <div className="">
        <Image
          src={Img}
          className="hover:scale-105 duration-300"
          width={200}
          height={300}
          alt="image"
        />
      </div>
      <p className="pt-1 text-[1rem]">FOX IPHONE CASE..</p>
      <p className="text-[0.8rem]">৳6500 ৳7000 7% OFF</p>

      <div>
        <button className="w-full border border-black rounded-md p-2 my-3">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Card;
