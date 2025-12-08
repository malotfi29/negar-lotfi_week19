import { useMutation } from "@tanstack/react-query";

import { editProduct } from "../../services/productsServise";

export default function useEditProduct() {
  const { mutate, data } = useMutation({
    mutationFn: ({id,product})=>editProduct(id,product),
    
  });
  return { mutate, data };
}
