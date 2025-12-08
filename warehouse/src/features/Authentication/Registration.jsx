import styles from "./Registration.module.css";
import { Link, useNavigate } from "react-router-dom";
import useRegistration from "./useRegistration";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../../schema/registrationSchema";
import Input from "../../components/Input";

function Registration() {
  const navigate = useNavigate();
  const { mutate } = useRegistration();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });
  const password = watch("password");

  const onSubmit = (data) => {
    mutate(
      {
        username: data.username,
        password: data.password,
      },
      {
        onSuccess: () => {
          toast.success("حساب کاربری ایجاد شد، لطفا وارد شوید"),
            navigate("/login");
        },
        onError: (err) => {
          toast.error("خطایی رخ داد" || err);
        },
      }
    );
    reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/pictures/Union.png" alt="Bootcamp-Logo" />
        <p>فرم ثبت نام</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="username"
          register={register}
          errors={errors}
          placeholder="نام کاربری"
        />
        <Input
          name="password"
          type="password"
          register={register}
          errors={errors}
          placeholder="رمزعبور"
        />
        <Input
          name="confirmPassword"
          type="password"
          register={register}
          errors={errors}
          placeholder="تکرار رمزعبور"
        />

        <button className="btn" type="submit">
          ثبت نام
        </button>
      </form>
      <Link to="/login">
        <span>حساب کاربری دارید؟</span>
      </Link>
    </div>
  );
}

export default Registration;
