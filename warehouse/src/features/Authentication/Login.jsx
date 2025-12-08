import { useState } from "react";
import styles from "./Login.module.css";
import useLogin from "./useLogin";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function Login() { 
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { mutate} = useLogin();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    mutate(user, {
      onSuccess: () => {
        localStorage.setItem("user",JSON.stringify(user.username))
        navigate("/");
        toast.success("خوش آمدید")
      },
      onError: () => {
        toast.error("نام کاربری یا رمزعبور اشتباه است")
        
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/pictures/Union.png" alt="Bootcamp-Logo" />
        <p>ورود به حساب کاربری</p>
      </div>
      <form className={styles.form}>
        <input
          type="text"
          value={user.name}
          name="username"
          onChange={handleChange}
          placeholder="نام کاربری"
        />
        <input
          type="password"
          value={user.password}
          name="password"
          onChange={handleChange}
          placeholder="رمز عبور"
        />

        <button className="btn" onClick={clickHandler}>
          ورود
        </button>
      </form>
      <Link to="/registration">
        <span>ایجاد حساب کاربری</span>
      </Link>
    </div>
  );
}

export default Login;
