import styles from "./ProductsList.module.css";
import Loading from "../../components/Loading";
import useProducts from "./useProducts";
import { Outlet, useNavigate } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import Header from "../../components/Header";
import Product from "./Product";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";

function ProductsList() {
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const { products, isPending } = useProducts(page, searchName);

  const { setIsOpenAddModal } = useModal();
  const navigate = useNavigate();

  const handleAddModal = () => {
    setIsOpenAddModal((is) => !is);
    navigate("addProduct");
  };

  return (
    <>
      <Outlet />
      <div className={styles.container}>
        <Header searchName={searchName} setSearchName={setSearchName} />
        <main>
          <div className={styles.addProduct}>
            <div>
              <img src="/pictures/setting-3.png" alt="setting" />
              <h2>مدیریت کالا</h2>
            </div>
            <div className={styles.addBtn}>
              <button onClick={handleAddModal}>افزودن محصول</button>
            </div>
          </div>

          <div className={styles.tableContainer}>
            {isPending ? (
              <Loading />
            ) : products === undefined ? (
              <p>کالایی وجود ندارد</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>نام کالا</th>
                    <th>موجودی</th>
                    <th>قیمت</th>
                    <th>شناسه کالا</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
        <footer>
          <Pagination page={page} setPage={setPage} products={products} />
        </footer>
      </div>
    </>
  );
}

export default ProductsList;
