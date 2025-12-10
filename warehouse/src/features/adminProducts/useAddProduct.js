
import { useMutation} from "@tanstack/react-query";

import { addProduct} from "../../services/productsServise";

export default function useAddProduct() {
  const { mutate,data } = useMutation({
    mutationFn:addProduct,
    
  })
  return{mutate,data}
}
