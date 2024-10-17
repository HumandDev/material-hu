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
        // Si hay menos de 3 snackbars visibles, mostrar el siguiente en cola
        if (visibleSnackbars.length < 3 && snackbarQueue.length > 0) {
            setVisibleSnackbars(prev => [...prev, snackbarQueue[0]]);
            setSnackbarQueue(prevQueue => prevQueue.slice(1));
        }
        // Si hay más de 3 snackbars, cerrar el más antiguo (el primero de la lista)
        if (visibleSnackbars.length === 3 && snackbarQueue.length > 0) {
            setVisibleSnackbars(prev => [...prev.slice(1), snackbarQueue[0]]);
            setSnackbarQueue(prevQueue => prevQueue.slice(1));
        }
    }, [snackbarQueue, visibleSnackbars]);
    return (_jsxs(SnackbarContext.Provider, { value: { enqueueSnackbar }, children: [children, visibleSnackbars.map((snackbarProps, index) => (_jsx(SnackbarWrapper, Object.assign({}, snackbarProps), index)))] }));
};
