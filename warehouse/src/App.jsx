import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./features/Authentication/Login";
import ModalProvider from "./context/ModalContext";
import { Toaster } from "react-hot-toast";
import AddProduct from "./features/adminProducts/AddProduct";
import DeleteProduct from "./features/adminProducts/DeleteProduct";
import RegistrationPage from "./pages/RegistrationPage";
import Layout from "./components/layout";
import ProductsProvider from "./context/productsContext";
import AdminProductsListPage from "./pages/AdminProductsListPage";
import UserProductsPage from "./pages/UserProductsPage";
import MainPage from "./pages/MainPage";
import CartProvider from "./context/CartContext";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage"

function App() {
  return (
    <>
    <CartProvider>

   
      <ProductsProvider>
        <ModalProvider>
          <Toaster />
          <ReactQueryDevtools />
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route element={<Layout />}>
              <Route path="/user" element={<UserProductsPage />} />
             
              <Route path="/admin" element={<AdminProductsListPage />}>
                <Route path="addProduct" element={<AddProduct />} />
                <Route path="deleteProduct" element={<DeleteProduct />} />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/user/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage/>}/>
          </Routes>
        </ModalProvider>
      </ProductsProvider>
      </CartProvider>
    </>
  );
}

export default App;
