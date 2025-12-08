import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/productsServise";

export default function useProducts(page,searchName) {
  const { data, isPending } = useQuery({
    queryKey: ["products",{page,searchName}],
    queryFn: ()=>getAllProducts(page,searchName),
    keepPreviousData:true
  });

  
  const { data:products,totalPages } = data || {};
  return { products, isPending,totalPages };
}
