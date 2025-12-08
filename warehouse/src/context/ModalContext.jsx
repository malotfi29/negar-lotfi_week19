import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        isOpenAddModal,
        setIsOpenAddModal,
        isOpenDeleteModal,
        setIsOpenDeleteModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;

export function useModal() {
  const context = useContext(ModalContext);
  return context;
}
