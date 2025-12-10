import { Link, useParams } from "react-router-dom";
import { FcRemoveImage } from "react-icons/fc";
import Loading from "../../components/Loading";
import styles from "./ProductDetail.module.css";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import useProduct from "./useProduct";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../helper/toPersionNumber";

function ProductDetail() {
  const { id } = useParams();
  const { product, isPending } = useProduct(id);

  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <FcRemoveImage className={styles.img}/>
          <div className={styles.information}>
            <h3 className={styles.title}>{product.name}</h3>
            <p className={styles.desc}>تعداد موجود در انبار: {toPersianNumbers(product.quantity)} عدد</p>
            
            <div>
              <span className={styles.price}>
                <IoMdPricetag />
               <span> قیمت: </span>
                {toPersianNumbersWithComma(product.price)} 
                <span>تومان</span>
              </span>
              <Link to="/user">
                <FaArrowLeft />
                <span>بازگشت</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
