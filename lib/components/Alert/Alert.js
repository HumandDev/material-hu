var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Alert as AlertMui, AlertTitle, IconButton, Stack, Typography, Button, } from '@mui/material';
import { IconX as CloseIcon } from '@tabler/icons-react';
const Alert = (props) => {
    const { title, description, hasClose = false, onClose, actionText, onAction } = props, rest = __rest(props, ["title", "description", "hasClose", "onClose", "actionText", "onAction"]);
    const [open, setOpen] = useState(true);
    if (!open)
        return null;
    return (_jsxs(AlertMui, Object.assign({ action: hasClose && (_jsx(IconButton, { "aria-label": "close", color: "inherit", size: "small", onClick: e => {
                if (onClose)
                    onClose(e);
                setOpen(false);
            }, children: _jsx(CloseIcon, {}) })) }, rest, { children: [_jsx(AlertTitle, { children: title }), _jsxs(Stack, { sx: { flexDirection: 'row', justifyContent: 'center' }, children: [_jsx(Typography, { children: description }), actionText && (_jsx(Button, { variant: "text", onClick: onAction, children: actionText }))] })] })));
};
export default Alert;
