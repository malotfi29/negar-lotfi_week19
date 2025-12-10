import styles from "./Layout.module.css"
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Pagination from "./Pagination";

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Pagination />
    </div>
  );
}

export default Layout;
