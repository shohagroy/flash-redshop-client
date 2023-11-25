import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Form from "../form/From";
import FormInput from "../form/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { categorySchema } from "@/schemas/category";
import InputImage from "./InputImage";
import Image from "next/image";

const CategoryDrawer = ({ open, setOpen }) => {
  const [images, setImages] = useState([]);
  const [imgPreview, setImgPreview] = useState(false);
  const [categoryInfo, setCategoryInfo] = useState({
    tittle: "",
    icon: "",
  });
  const onsubmit = (data) => {
    data.icon = images;
    console.log("submit", data);
  };
  return (
    <div
      className={` h-screen w-[100vw] z-50 absolute top-0  flex justify-center items-center ${
        open ? "right-0" : "right-[100%] duration-200"
      }`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="bg-black opacity-20 w-full h-screen"
      ></div>
      <div className="bg-white w-[550px] h-screen">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <p>Add and Update Categories</p>

            <button
              className="text-4xl text-red-600 "
              onClick={() => setOpen(!open)}
            >
              <IoIosCloseCircle />
            </button>
          </div>
        </div>

        <div className="p-4 my-10">
          <Form
            defaultValues={categoryInfo}
            resolver={yupResolver(categorySchema)}
            submitHandler={onsubmit}
          >
            <div>
              <FormInput label={"Category Name"} name={"tittle"} required />
            </div>

            <div className=" my-4 justify-center items-center">
              <p className="block">
                <span className={"text-red-600"}>*</span> Category Icon:
              </p>

              <div className="my-4">
                {images?.length ? (
                  <div className="relative">
                    <Image
                      width={200}
                      height={200}
                      layout="responsive"
                      src={images[0]}
                      alt=""
                    />
                    <div className="absolute -top-2 -right-3">
                      <p
                        className="text-red-600 text-2xl cursor-pointer"
                        onClick={() => setImages([])}
                      >
                        <IoIosCloseCircle />
                      </p>
                    </div>
                  </div>
                ) : (
                  <InputImage
                    imgPreview={imgPreview}
                    images={images}
                    setImages={setImages}
                  />
                )}
              </div>
            </div>

            <div className="my-10 flex justify-center items-center">
              <input
                type="button"
                onClick={() => setOpen(!open)}
                className="w-[200px] text-center p-3 bg-red-500 text-white mx-1 rounded-md cursor-pointer"
                value={"Cancel"}
              />

              <button className="w-[200px] text-center p-3 bg-blue-500 text-white mx-1 rounded-md">
                Add Category
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CategoryDrawer;
