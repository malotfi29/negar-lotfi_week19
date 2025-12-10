import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FcRemoveImage } from "react-icons/fc";
import shortText from "../../helper/shortText"
import styles from "./Card.module.css";
import {productQuantity} from "../../helper/helper"
import { useCart } from "../../context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import {toPersianNumbersWithComma,toPersianNumbers} from "../../helper/toPersionNumber"

function Card({ data }) {
  const { id, name, price } = data;
  const [state, dispatch] = useCart();
 
  
  const quantity = productQuantity(state, id);

  const handlerClick = (type) => {
   
    
    dispatch({ type, payload: data });
  };
  

  return (
    <div className={styles.card}>
      <FcRemoveImage className={styles.img}/>
      <h3>{shortText(name)}</h3>
      <p>{toPersianNumbersWithComma(price)} $</p>
      <div className={styles.actions}>
        <Link to={`/user/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => handlerClick("REMOVE_ITEM")}>
              <MdDeleteForever />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => handlerClick("DECREASE")}>-</button>
          )}
          {
            !!quantity && <span>{toPersianNumbers(quantity)}</span>
          }
          {quantity === 0 ? (
            <button onClick={() => handlerClick("ADD_ITEM")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => handlerClick("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
