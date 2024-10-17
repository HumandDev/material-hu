import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from 'react';
import SnackbarWrapper from './SnackbarWrapper';
const SnackbarContext = createContext(undefined);
export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    return context || { enqueueSnackbar: () => { } };
};
export const SnackbarProvider = ({ children, }) => {
    const [snackbarQueue, setSnackbarQueue] = useState([]);
    const [visibleSnackbars, setVisibleSnackbars] = useState([]);
    const enqueueSnackbar = (props) => {
        setSnackbarQueue(prevQueue => [...prevQueue, props]);
    };
    useEffect(() => {
        if (snackbarQueue.length > 0) {
            setVisibleSnackbars(prev => {
                // Si ya hay 3 snackbars -> eliminar el más antiguo
                if (prev.length >= 3)
                    return [...prev.slice(1), snackbarQueue[0]];
                // Si hay menos de 3 -> agregar uno nuevo
                return [...prev, snackbarQueue[0]];
            });
            setSnackbarQueue(prevQueue => prevQueue.slice(1));
        }
    }, [snackbarQueue]);
    const closeSnackbar = (index) => {
        setVisibleSnackbars(prev => prev.filter((_, i) => i !== index));
    };
    return (_jsxs(SnackbarContext.Provider, { value: { enqueueSnackbar }, children: [children, visibleSnackbars.map((snackbarProps, index) => (_jsx(SnackbarWrapper, Object.assign({ onClose: () => closeSnackbar(index) }, snackbarProps), index)))] }));
};
