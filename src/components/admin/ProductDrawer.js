import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Form from "../form/From";
import FormInput from "../form/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import InputImage from "./InputImage";
import FormTextArea from "../form/FormTextArea";
import FormSelect from "../form/FormSelect";
import { productSchema } from "@/schemas/product";
import { useCreateNewProductMutation } from "@/redux/features/product/productApi";

const ProductDrawer = ({ open, setOpen, categoryOptions }) => {
  const [images, setImages] = useState([]);
  const [imgPreview, setImgPreview] = useState(false);
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    discount: "",
    discription: "",
    categoryId: "",
  });

  const [createNewProduct, { isLoading, isError, error }] =
    useCreateNewProductMutation();

  const onsubmit = async (data) => {
    data.images = images;

    const result = await createNewProduct(data).unwrap();

    if (result?.success) {
      setOpen(false);
      setProductInfo({
        name: "",
        price: "",
        discount: "",
        discription: "",
        categoryId: "",
      });
      setImages([]);
      setImgPreview(false);
    }
  };

  return (
    <div
      className={` h-screen w-[100vw] z-50 fixed top-0  flex justify-center items-center ${
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
            <p>Add and Update Product</p>

            <button
              className="text-4xl text-red-600 "
              onClick={() => setOpen(!open)}
            >
              <IoIosCloseCircle />
            </button>
          </div>
        </div>

        <div className="p-4 my-10">
          {isError && (
            <p className="text-center px-4 py-1 bg-red-100 text-red-600 rounded-md my-2 text-xl capitalize ">
              {error?.data?.message || "Something went Wrong!"}
            </p>
          )}
          <Form
            defaultValues={productInfo}
            resolver={yupResolver(productSchema)}
            submitHandler={onsubmit}
          >
            <div className="my-2">
              <FormInput
                placeholder={"type name.."}
                type={"text"}
                label={"Product Name"}
                name={"name"}
                required
              />
            </div>

            <div className="my-2">
              <FormSelect
                options={categoryOptions}
                label={"Category"}
                name={"categoryId"}
                required
              />
            </div>

            <div className="my-2">
              <FormInput
                placeholder={"0.00"}
                type={"number"}
                label={"Product Price"}
                name={"price"}
                required
              />
            </div>

            <div className="my-2">
              <FormInput
                placeholder={"0.00"}
                type={"number"}
                label={"Discount"}
                name={"discount"}
                required
              />
            </div>

            <div className="my-2">
              <FormTextArea
                placeholder={"type any.."}
                type={"type"}
                label={"Discription"}
                name={"discription"}
                required
              />
            </div>

            <div className=" my-4 justify-center items-center">
              <p className="block">
                <span className={"text-red-600"}>*</span> Product Images:
              </p>

              <div className="">
                <InputImage
                  imgPreview={imgPreview}
                  images={images}
                  setImages={setImages}
                />
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
                {isLoading ? "Loading..." : "Add Category"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProductDrawer;
