import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../../services/productsServise";


export default function useProduct(id) {
  const { data:product, isPending } = useQuery({
    queryKey: ["product",id],
    queryFn: ()=>getSingleProduct(id),
    
  });

  
  
  return { product, isPending };
}
