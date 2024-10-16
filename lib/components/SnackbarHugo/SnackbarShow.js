import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
import SnackbarWrapper from './SnackbarWrapper';
const SnackbarContext = createContext(undefined);
export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    return context || { showSnackbar: () => { } };
};
export const SnackbarProvider = ({ children, }) => {
    const [snackbarProps, setSnackbarProps] = useState(null);
    const showSnackbar = (props) => {
        setSnackbarProps(props);
    };
    return (_jsxs(SnackbarContext.Provider, { value: { showSnackbar }, children: [children, snackbarProps && _jsx(SnackbarWrapper, Object.assign({}, snackbarProps))] }));
};
