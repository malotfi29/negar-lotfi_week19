import Cookies from "js-cookie"
import { useMutation} from "@tanstack/react-query";
import { loginUser, registerUser } from "../../services/authServices";

export default function useRegistration() {
  const { mutate,data } = useMutation({
    mutationFn:registerUser,
    
  })
  return{mutate,data}
}
