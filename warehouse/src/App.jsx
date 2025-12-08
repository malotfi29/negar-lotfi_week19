import { Route, Routes } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProductsListPage from "./pages/ProductsListPage";
import Login from "./features/Authentication/Login";
// import UserProvider from "./features/Authentication/UserContext";
import ModalProvider from "./context/ModalContext";
import { Toaster } from "react-hot-toast";
import AddProduct from "./components/AddProduct";
import DeleteProduct from "./components/DeleteProduct";
import RegistrationPage from "./pages/RegistrationPage";


const queryClient = new QueryClient();

function App() {
  return (
    <>
    
        <ModalProvider>
          <QueryClientProvider client={queryClient}>
          <Toaster/>
            <ReactQueryDevtools />
            <Routes>
              <Route path="/" element={<ProductsListPage />}>
                <Route path="addProduct" element={<AddProduct />} />
                <Route path="deleteProduct" element={<DeleteProduct />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<RegistrationPage />} />
            </Routes>
          </QueryClientProvider>
        </ModalProvider>
     
    </>
  );
}

export default App;
