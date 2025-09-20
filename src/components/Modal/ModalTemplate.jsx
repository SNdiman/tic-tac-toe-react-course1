import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalBackdrop, ModalContainer } from "./Modal.styled";
import { ModalContext } from "../../contexts/ModalContext";

function ModalTemplate() {
  const { modalContent, modal } = useContext(ModalContext);

  if (modal) {
    return ReactDOM.createPortal(
      <ModalBackdrop><ModalContainer>{modalContent}</ModalContainer></ModalBackdrop>,
      document.getElementById("modal-root")
    );
  }
  return null;
}

export default ModalTemplate;
