import styles from "./DeleteProduct.module.css"
import { useModal } from "../context/ModalContext";
import { useLocation, useNavigate } from "react-router-dom";
import useDeleteProduct from "../features/Products/useDeleteProduct";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function DeleteProduct() {
  const{isOpenDeleteModal, setIsOpenDeleteModal}=useModal()
  const {mutate}=useDeleteProduct()
  const navigate=useNavigate()
  const queryClient=useQueryClient()
const {state:productId}=useLocation()

const handleDelete=()=>{
  mutate(productId,{
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["products"]})
      navigate("/")
      setIsOpenDeleteModal(false)
      toast.success("کالا با موفقیت حذف شد")
    },
    onError:()=>{navigate("/")
      setIsOpenDeleteModal(false)
    },
  });
}


  const closeModal = () => {
    setIsOpenDeleteModal(false);
    navigate("/");
  };

  if(!isOpenDeleteModal) return null
  return (
    <>
     <div className={styles.backdrop} onClick={closeModal}></div>
    <div className={styles.container}>
      <img src="/pictures/Close.png" alt="close" />
      <p>آیا از حذف این محصول مطمئن هستید؟</p>
      <div>
        <button className={styles.btnDelete} onClick={handleDelete}>حذف</button>
        <button className={styles.btnClose} onClick={closeModal}>لغو</button>

      </div>
    </div>
    </>
  )
}

export default DeleteProduct
