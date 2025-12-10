import { createContext, useContext, useState } from "react";


const ProductsContext = createContext();
function ProductsProvider({ children }) {
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState("");


  return (
    <ProductsContext.Provider
      value={{ page, setPage, searchName, setSearchName }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;

export function useLayoutProducts() {
  const context = useContext(ProductsContext);
  return context;
}