import {useState} from "react";

const useModal = (initialState = false) => {
    const [isOpen, setModalState] = useState(initialState);

    const handleOpenModal = () => setModalState(true);
    const handleCloseModal = () => setModalState(false);
    
    return {
       isOpen,
       handleCloseModal,
       handleOpenModal,
    };
};

export default useModal;