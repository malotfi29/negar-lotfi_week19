import * as yup from "yup";
export const registrationSchema = yup.object().shape({
  username: yup
    .string()
    .required("نام کاربری الزامی است")
    .min(8, "نام کالا حداقل 8 کاراکتر باشد"),
  password: yup
    .string()
    .required(" رمز عبور الزامی است")
    .min(8, "رمزعبور باید حداقل 8 کاراکتر باشد")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "رمزعبور باید شامل حروف بزرگ،کوچک و عدد باشد"
    ),
  confirmPassword: yup.string().required("تکرار رمزعبور الزامی است"),
});
