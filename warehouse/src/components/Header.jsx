import styles from "../features/Products/ProductsList.module.css";
import { RiSearchLine } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import deleteCookie from "../features/Authentication/logout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function Header({ searchName, setSearchName }) {
  const [token, setToken] = useState(Cookies.get("token"));
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const handleLogout = () => {
    deleteCookie("token");
    localStorage.removeItem("user");
    setToken(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <RiSearchLine />
        <input
          type="text"
          placeholder="جستجوی کالا"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>
      <div className={styles.user}>
        {token ? (
          <>
            <p>{user}</p>
            <button onClick={handleLogout}> 
              <span>خروج</span>
              <TbLogout2/>
               </button>
          </>
        ) : (
          <button>
            <Link to="/registration">
            <span>ورود</span>
            <FiLogIn/>
            </Link>
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
