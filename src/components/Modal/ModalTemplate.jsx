import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext';

function ModalTemplate() {
    const {handleModal} = useContext(ModalContext);

    if(modal){

        return(<div>{modalContent}</div>)
    }
  return (
    // <div>
    //   ModalTemplate
    // </div>
    null
  )
}

export default ModalTemplate
