import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../services/authServices";

export default function useLogin() {
  const { mutate } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      Cookies.set("token", data.token, { expires: 1, path: "/" });
    },

    onError: (err) => console.log(err),
  });
  return { mutate };
}
