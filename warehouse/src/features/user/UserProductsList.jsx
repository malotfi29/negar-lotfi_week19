import useProducts from "../adminProducts/useProducts";
import styles from "./UserProductsList.module.css";
import Card from "./Card";
import Loading from "../../components/Loading";
import { useLayoutProducts } from "../../context/productsContext";

function UserProductsList() {
  const{page,searchName}=useLayoutProducts()
  const { products, isPending } = useProducts(page,searchName);
  
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {isPending ? (
          <Loading />
        ) : products === undefined ? (
          <p>کالایی وجود ندارد</p>
        ) : (
          products.map((product) => <Card key={product.id} data={product} />)
        )}
      </div>
    </div>
  );
}

export default UserProductsList;
