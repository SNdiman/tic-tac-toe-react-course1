//"light" === light mode , "dark" ===darkmode
import { useState, createContext } from "react";
import { useModal } from "../hooks/useModal";

export const ModalContext = createContext({
     
});

export function ModalContextProvider({ children }) {
  const {modal, modalContent, handleModal} = useModal("light");


  return (
    <ModalContext.Provider value={{modal, modalContent, handleModal}}>{children}</ModalContext.Provider>
  );
}
