import styles from "./Checkout.module.css"
import { MdDeleteForever } from "react-icons/md";
import { useCart } from "../../context/CartContext";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../helper/toPersionNumber";
import { Link } from "react-router-dom";


function Checkout() {
  const [state, dispatch] = useCart();


  const handlerClick = (type, item) => {
    dispatch({ type, payload: item });
  };

  return (
    <div>
        <h2>فروشگاه اینترنتی نگار/ سبد خرید</h2>
      {state.itemsCounter === 0 ? (
        <div className={styles.empty}>
          <h3>متاسفانه سبد خرید شما خالی است</h3>
          <img src="/pictures/empty-basket.webp" alt="" />
          <Link to="/user">ادامه خرید</Link>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.cards}>
            {state.selectedItems.map((item) => (
              <div key={item.id} className={styles.card}>
                <p>{item.name}</p>
                <div>
                  {item.selectedQuantity === 1 && (
                    <button onClick={() => handlerClick("REMOVE_ITEM", item)}>
                      <MdDeleteForever />
                    </button>
                  )}
                  {item.selectedQuantity > 1 && (
                    <button onClick={() => handlerClick("DECREASE", item)}>
                      -
                    </button>
                  )}
                  {!!item.selectedQuantity && (
                    <span>{toPersianNumbers(item.selectedQuantity)}</span>
                  )}

                  <button onClick={() => handlerClick("INCREASE", item)}>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.checkout}>
            <p><span>هزینه کل :</span> {toPersianNumbersWithComma(state.total)}</p>
            <p><span>تعداد محصولات:</span> {toPersianNumbers(state.itemsCounter)}</p>
            <p><span>وضعیت خرید: </span>{!state.checkout? <span>در حال پرداخت...</span> :""}</p>
            <button onClick={()=>handlerClick("CHECKOUT")}>پرداخت</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
