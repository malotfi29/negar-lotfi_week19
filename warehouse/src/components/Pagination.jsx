import { useLayoutProducts } from "../context/productsContext";
import useProducts from "../features/adminProducts/useProducts";
import { toPersianNumbers } from "../helper/toPersionNumber";
import styles from "./Pagination.module.css";

function Pagination() {
 const { page, setPage }=useLayoutProducts()
  const{totalPages}=useProducts()
  
  
  const prevHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page>=totalPages) return;
   
    setPage((page) => page + 1);
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={prevHandler}
        className={page === 1 ? styles.disabled : null}
      >
        قبلی
      </button>
       <p className={page === 1 ? styles.selected : null}>{toPersianNumbers(1)}</p>
      <p className={page === 2 ? styles.selected : null}>{toPersianNumbers(2)}</p>
      {page > 2 && page < totalPages-1  && (
        <>
          <span>...</span>
          <p className={styles.selected}>{toPersianNumbers(page)}</p>
        </>
      )}
      
{
  totalPages>2 ? <>
  <span>...</span>
  {
    totalPages!==3 ? <p className={page === totalPages-1 ? styles.selected : null}>{toPersianNumbers(totalPages-1)}</p> : ""
  }
  
      <p className={page === totalPages ? styles.selected : null}>{toPersianNumbers(totalPages)}</p> 
      
  </> : ""
}
      
      <button
        onClick={nextHandler}
        className={page === totalPages  ? styles.disabled : null}
      >
        بعدی
      </button>
    </div>
  );
}

export default Pagination;
