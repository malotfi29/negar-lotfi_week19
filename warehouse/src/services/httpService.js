import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:3000";

const app = axios.create({
  baseURL: BASE_URL,
});

app.interceptors.request.use(
  (req) => {
    const token = Cookies.get("token");
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
  },
  (err) => Promise.reject(err)
);

app.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      toast.error("برای انجام تغییرات وارد حساب کاربری شوید ")
    }
    return Promise.reject(err)
  }
);

export default app;
