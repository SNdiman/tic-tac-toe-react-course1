import { useState } from "react"

export const useModal = () =>{
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useModal("Im a Modal");

    const handleModal = (content = false) => {
        setModalContent(modal);
        if(content){

        }
        setModalContent(content)
    }

    return {modal, modalContent, handleModal}
}

handleModal(<Modal/>)