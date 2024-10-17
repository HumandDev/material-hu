import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Snackbar as SnackbarMUI, SnackbarContent, IconButton, useTheme, Typography, Stack, Badge, Button, LinearProgress, } from '@mui/material';
import { IconX, IconCheck, IconAlertTriangle, IconInfoCircle, } from '@tabler/icons-react';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
const SnackbarWrapper = ({ title, description, hasClose = true, cancelAction = null, variant, onClose, }) => {
    var _a;
    const [open, setOpen] = useState(true);
    const { palette } = useTheme();
    const backgroundColor = (_a = palette.textColors) === null || _a === void 0 ? void 0 : _a.neutralText;
    const handleClose = () => {
        setOpen(false);
        onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    const getProps = () => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        switch (variant) {
            case 'warning':
                return {
                    Icon: IconAlertTriangle,
                    color: (_a = palette.base) === null || _a === void 0 ? void 0 : _a.yellow[200],
                    iconColor: (_b = palette.base) === null || _b === void 0 ? void 0 : _b.yellow[600],
                };
            case 'info':
                return {
                    Icon: IconInfoCircle,
                    color: (_c = palette.base) === null || _c === void 0 ? void 0 : _c.lightBlue[200],
                    iconColor: (_d = palette.base) === null || _d === void 0 ? void 0 : _d.lightBlue[600],
                };
            case 'error':
                return {
                    Icon: IconX,
                    color: (_e = palette.base) === null || _e === void 0 ? void 0 : _e.red[200],
                    iconColor: (_f = palette.base) === null || _f === void 0 ? void 0 : _f.red[600],
                };
            default:
            case 'success':
                return {
                    Icon: IconCheck,
                    color: (_g = palette.base) === null || _g === void 0 ? void 0 : _g.green[200],
                    iconColor: (_h = palette.base) === null || _h === void 0 ? void 0 : _h.green[600],
                };
        }
    };
    const { Icon, color, iconColor } = getProps();
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        setProgress(100);
    }, []);
    return (_jsx(SnackbarMUI, { open: open, autoHideDuration: 10000, onClose: handleClose, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, children: _jsxs("div", { style: {
                borderRadius: '8px',
                overflow: 'hidden',
                width: 600,
                position: 'relative',
            }, children: [_jsx(SnackbarContent, { style: {
                        backgroundColor: backgroundColor,
                        display: 'flex',
                        borderRadius: 0,
                    }, message: _jsxs(Stack, { sx: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                            ml: 1,
                            maxWidth: 360,
                        }, children: [_jsx(Badge, { badgeContent: _jsx(Icon, {}), overlap: "circular", sx: {
                                    mr: 2,
                                    mb: description ? 2 : 0,
                                    '.MuiBadge-badge': {
                                        backgroundColor: iconColor,
                                        minWidth: 24,
                                        minHeight: 24,
                                        borderRadius: '50%',
                                        padding: '4px',
                                    },
                                } }), _jsxs(Stack, { children: [title && (_jsx(Typography, { variant: "globalS", fontWeight: "semiBold", color: "white", children: title })), description && (_jsx(Typography, { variant: "globalXS", fontWeight: "regular", color: "white", children: description }))] })] }), action: [
                        cancelAction && (_jsx(Button, { onClick: () => {
                                cancelAction.onClick();
                                handleClose();
                            }, sx: {
                                p: 0.5,
                                mr: 4,
                                color: 'white',
                                minWidth: 'auto',
                                maxWidth: 150,
                            }, children: _jsx(Typography, { variant: "globalS", color: "white", fontWeight: "regular", sx: { textDecoration: 'underline', textTransform: 'none' }, children: cancelAction.text }) })),
                        hasClose && (_jsx(IconButton, { color: "inherit", onClick: handleClose, sx: {
                                top: 4,
                                right: 4,
                                fontSize: '12px',
                                position: 'absolute',
                            }, children: _jsx(CloseIcon, { sx: { fontSize: '16px' } }) })),
                    ] }), _jsx(LinearProgress, { variant: "determinate", value: progress, sx: {
                        height: '6px',
                        backgroundColor: color,
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: iconColor,
                            transitionDuration: '8s',
                        },
                    } })] }) }));
};
export default SnackbarWrapper;
