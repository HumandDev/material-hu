import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
import SnackbarWrapper from './SnackbarWrapper';
const SnackbarContext = createContext(undefined);
export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    return context || { showSnackbar: () => { } };
};
export const SnackbarProvider = ({ children, }) => {
    const [snackbarQueue, setSnackbarQueue] = useState([]);
    const showSnackbar = (props) => {
        setSnackbarQueue(prev => [...prev, props]); // Agregar nuevo Snackbar a la cola
    };
    return (_jsxs(SnackbarContext.Provider, { value: { showSnackbar }, children: [children, snackbarQueue.map((snackbarProps, index) => (_jsx(SnackbarWrapper, Object.assign({}, snackbarProps), index)))] }));
};
