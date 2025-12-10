import { Link } from "react-router-dom"
import styles from "./MainPage.module.css"

function MainPage() {
  return (
    <>
    <h2>فروشگاه اینترنتی نگار</h2>
    <div className={styles.container}>
    <img src="/pictures/card.jpg" alt="" />
      <div className={styles.btns}>
        <h3>لطفا یک حساب کاربری را انتخاب کنید</h3>
      <button><Link to="/user">ورود کاربر</Link></button>
      <button><Link to="/registration">ورود ادمین</Link></button>
      </div>
      
      
      
    </div>
    
    </>
  )
}

export default MainPage
