import React from "react";
import Image1 from "../../assets/Banner_02.webp";
import Image2 from "../../assets/Banner_03.webp";
import Image3 from "../../assets/Banner_04.webp";
import Image from "next/image";

const Banar = () => {
  const banars = [
    {
      key: 1,
      image: Image1,
    },
    {
      key: 2,
      image: Image2,
    },
    {
      key: 3,
      image: Image3,
    },
  ];

  return (
    <section className="py-4 mt-[7vh] border-b">
      <div className="hidden max-w-5xl mx-auto lg:grid grid-cols-3 gap-4">
        {banars?.map((item, i) => (
          <div key={i} className=" h-[150px]">
            <Image
              className="w-full h-full duration-300 rounded-md shadow-md cursor-pointer hover:scale-105"
              src={item?.image}
              alt={`banar-${i + 1}`}
              // width={100}
              // height={100}
              // layout="responsive"
            />
          </div>
        ))}
      </div>

      <div className="px-4 lg:hidden">
        <Image
          className="w-full h-full duration-300 rounded-md shadow-md cursor-pointer hover:scale-105"
          src={banars[0]?.image}
          alt={`banar-${1}`}
          // width={100}
          // height={100}
          // layout="responsive"
        />
      </div>
    </section>
  );
};

export default Banar;
