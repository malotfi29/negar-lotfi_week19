import styles from "./AddProduct.module.css";
import { useModal } from "../context/ModalContext";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "./Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../schema/productSchema";
import { useForm } from "react-hook-form";
import useAddProduct from "../features/Products/useAddProduct";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useProducts from "../features/Products/useProducts";
import { useEffect } from "react";
import useEditProduct from "../features/Products/useEditProduct";

function AddProduct() {
  const { isOpenAddModal, setIsOpenAddModal } = useModal();
  const navigate = useNavigate();
  const { mutate: addProduct } = useAddProduct();
  const { mutate: editProduct } = useEditProduct();
  const queryClient = useQueryClient();
  const { state: productId } = useLocation();
  const { products } = useProducts();
  const editedProduct = products?.find((p) => p.id === productId) || {};

  const {
    register,
   
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: {
      name: "",
      price: null,
      quantity: null,
    },
  });

  const closeModal = () => {
    setIsOpenAddModal(false);
    navigate("/");
  };

  const onSubmit = (product) => {
    if (productId) {
      editProduct(
        { id: productId, product },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            navigate("/");
            setIsOpenAddModal(false);
            toast.success("کالا با موفقیت ویرایش شد");
          },
          onError: () => {
            navigate("/");
            setIsOpenAddModal(false);
            toast.error("خطایی پیش آمده");
          },
        }
      );
    } else {
      addProduct(product, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["products"] });
          navigate("/");
          setIsOpenAddModal(false);
          toast.success("کالا با موفقیت اضافه شد");
        },
        onError: () => {
          navigate("/");
          setIsOpenAddModal(false);
          toast.error("خطایی پیش آمده");
        },
      });
    }
  };

  useEffect(() => {
    if (productId) {
      reset(editedProduct);
    }
  }, [editedProduct, productId, reset]);

  if (!isOpenAddModal) return null;
  return (
    <>
      <div className={styles.backdrop} onClick={closeModal}></div>
      <div className={styles.container}>
        <h3>{productId ? "ویرایش اطلاعات" : "ایجاد محصول جدید"} </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            label="نام کالا"
            register={register}
            errors={errors}
          />
          <Input
            name="quantity"
            label="تعداد موجودی"
            register={register}
            errors={errors}
          />

          <Input
            name="price"
            label=" قیمت"
            register={register}
            errors={errors}
            
          />

          <div className={styles.btns}>
            <button className={styles.btnAdd}>
              {productId ? "ویرایش" : "ایجاد"}
            </button>
            <button className={styles.btnClose} onClick={closeModal}>
              انصراف
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
