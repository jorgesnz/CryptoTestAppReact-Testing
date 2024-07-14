import {useState, createContext, useContext, useEffect} from 'react';
import useScrollLock from '@hooks/useScrollLock';

const ModalContext = createContext(undefined);

export const ModalProvider = ({children}) => {
    const [modal, setModal] = useState(null);
    const [open, setOpen] = useState(false);
    const setIsLocked = useScrollLock();

    const handleOpen = (id) => {
        setModal(id);
        setOpen(true);
    }

    const handleClose = () => {
        setModal(null);
        setOpen(false);
    }

    useEffect(() => {
        if (open) {
            setIsLocked(true);
        } else {
            setIsLocked(false);
        }

        return () => {
            setIsLocked(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return (
        <ModalContext.Provider value={{modal, open, handleOpen, handleClose}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext);