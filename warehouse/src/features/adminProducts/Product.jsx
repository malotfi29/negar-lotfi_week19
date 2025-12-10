import styles from "./ProductsList.module.css";
import shortText from "../../helper/shortText";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../helper/toPersionNumber";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../context/ModalContext";

function Product({ product }) {
    const { setIsOpenDeleteModal,setIsOpenAddModal } = useModal();
  const navigate = useNavigate();
    const handleDeleteModal = (id) => {
        setIsOpenDeleteModal((is) => !is);
        navigate("deleteProduct", {
          state: id,
        });
      };

      const handleEditModal=(id)=>{
        setIsOpenAddModal((is) => !is);
        navigate("addProduct", {
          state: id,
        });
      }

  return (
    <tr>
      <td className={styles.tooltip}>
        {shortText(product.name, 5)}
        <span className={styles.tooltipText}>{product.name}</span>
      </td>
      <td>{toPersianNumbers(product.quantity)}</td>
      <td>{toPersianNumbersWithComma(product.price)} هزار تومان</td>
      <td>#{toPersianNumbers(326598)}</td>
      <td className={styles.setting}>
        <span onClick={()=>handleEditModal(product.id)}>
          <img src="/pictures/edit.png" alt="" />
        </span>
        <span onClick={() => handleDeleteModal(product.id)}>
          <img src="/pictures/trash.svg" alt="" />
        </span>
      </td>
    </tr>
  );
}

export default Product;
