import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, DialogContentText, Paper, Typography, Button } from '@mui/material';
const NewModal = ({ title, body, primaryButtonProps, secondaryButtonProps, avatarColor = 'error' }) => (_jsxs(Paper, { elevation: 12, children: [_jsx(Box, { sx: {
                display: 'flex',
                pb: 2,
                pt: 3,
                px: 3,
            }, children: _jsxs(Box, { children: [_jsx(Typography, { color: "textPrimary", variant: "h6", children: title }), _jsx(DialogContentText, { sx: { mt: 1 }, children: body })] }) }), _jsxs(Box, { sx: {
                display: 'flex',
                justifyContent: 'flex-end',
                px: 3,
                py: 1.5
            }, children: [(secondaryButtonProps === null || secondaryButtonProps === void 0 ? void 0 : secondaryButtonProps.onClick) && (_jsx(Button, Object.assign({ variant: "text" }, secondaryButtonProps, { sx: { mr: 2 } }))), (primaryButtonProps === null || primaryButtonProps === void 0 ? void 0 : primaryButtonProps.onClick) && (_jsx(Button, Object.assign({}, primaryButtonProps, { variant: "text" })))] })] }));
export default NewModal;
