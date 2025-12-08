
import { useMutation} from "@tanstack/react-query";

import { deleteProduct } from "../../services/productsServise";

export default function useDeleteProduct() {
  const { mutate,data } = useMutation({
    mutationFn:deleteProduct,
    
  })
  return{mutate,data}
}
