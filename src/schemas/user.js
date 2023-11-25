import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  email: yup.string().required("This field is required"),
  password: yup.string().required("This field is required"),
  role: yup.string().required("This field is required"),
});
