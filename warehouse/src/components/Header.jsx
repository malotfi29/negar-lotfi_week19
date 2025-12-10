import styles from "../features/adminProducts/ProductsList.module.css";
import { RiSearchLine } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import deleteCookie from "../features/Authentication/logout";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useLayoutProducts } from "../context/productsContext";
import { useCart } from "../context/CartContext";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

function Header() {
  const [state] = useCart();

  const navigate = useNavigate();
  const { searchName, setSearchName, setPage } = useLayoutProducts();
  const [token, setToken] = useState(Cookies.get("token"));
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const handleLogout = () => {
    deleteCookie("token");
    localStorage.removeItem("user");
    setToken(null);
    navigate("/");
  };
  const handleSearch = (e) => {
    setSearchName(e.target.value);
    setPage(1);
  };

  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <RiSearchLine />
        <input
          type="text"
          placeholder="جستجوی کالا"
          value={searchName}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <div className={styles.user}>
        {token ? (
          <p>{user}</p>
        ) : (
          <Link to="/checkout">
            <div className={styles.checkout}>
              <PiShoppingCartSimpleBold />
              {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
            </div>
          </Link>
        )}
        {token ? (
          <>
            <button onClick={handleLogout}>
              <span>خروج</span>
              <TbLogout2 />
            </button>
          </>
        ) : (
          <button>
            <Link to="/registration">
              <span>ورود</span>
              <FiLogIn />
            </Link>
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
