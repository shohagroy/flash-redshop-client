import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  categoryId: yup.string().required("This field is required"),
  price: yup.number().required("This field is required"),
  discount: yup.number().required("This field is required"),
  discription: yup.string().required("This field is required"),
});
