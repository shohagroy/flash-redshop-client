import * as yup from "yup";

export const categorySchema = yup.object().shape({
  tittle: yup.string().required("This field is required"),
});
