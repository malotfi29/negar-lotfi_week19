import * as yup from "yup";
export const productSchema = yup.object().shape({
  name: yup.string().required("نام محصول الزامی است").min(8,"نام کالا حداقل 8 کاراکتر باشد"),
  price: yup
    .string()
    .required("قیمت الزامی است")
    .matches(/^[0-9]+$/, "قیمت را به عدد وارد کنید"),
  quantity: yup
    .string()
    .required(" تعداد الزامی است")
    .matches(/^[0-9]+$/, " تعداد باید فقط عدد باشد"),
});
