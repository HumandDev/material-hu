import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SnackbarContent, Button, IconButton, Typography, Stack, Badge, LinearProgress, Box, } from '@mui/material';
import { IconX, IconCheck, IconAlertTriangle, IconInfoCircle, } from '@tabler/icons-react';
import { useSnackbar as useNotistackSnackar } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';
import { keyframes } from '@mui/system';
import { colorPalette } from '../../theme/hugo/colors';
const DEFAULT_HIDE_DURATION = 10000;
export const useSnackbar = () => {
    const { enqueueSnackbar: enqueueNotistackSnackbar, closeSnackbar } = useNotistackSnackar();
    const { textColors, border, graphics } = colorPalette;
    const backgroundColor = textColors.neutralText;
    const getProps = (variant) => {
        switch (variant) {
            case 'warning':
                return {
                    Icon: IconAlertTriangle,
                    color: border.warningBorder,
                    iconColor: graphics.warningText,
                };
            case 'info':
                return {
                    Icon: IconInfoCircle,
                    color: border.infoBorder,
                    iconColor: graphics.infoText,
                };
            case 'error':
                return {
                    Icon: IconX,
                    color: border.errorBorder,
                    iconColor: graphics.errorText,
                };
            default:
            case 'success':
                return {
                    Icon: IconCheck,
                    color: border.successBorder,
                    iconColor: graphics.successText,
                };
        }
    };
    const globalXSBase = {
        fontFamily: 'Roboto',
        lineHeight: '140%',
        fontWeight: 400,
        letterSpacing: 0.2,
        fontSize: 14,
    };
    const enqueueSnackbar = (props) => {
        const { title, description, hasClose = true, cancelAction, variant, autoHideDuration = DEFAULT_HIDE_DURATION, } = props;
        const { Icon, color, iconColor } = getProps(variant);
        const progressAnimation = keyframes `from { width: 0%; } to { width: 100%; }`;
        enqueueNotistackSnackbar('', {
            autoHideDuration,
            anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
            content: key => (_jsxs("div", { style: {
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
                                maxWidth: cancelAction ? 400 : '99%',
                            }, children: [_jsx(Badge, { badgeContent: _jsx(Box, { sx: {
                                            width: 16,
                                            height: 16,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }, children: _jsx(Icon, {}) }), overlap: "circular", sx: {
                                        mr: 2,
                                        mb: title && description ? 2 : 0,
                                        '.MuiBadge-badge': {
                                            backgroundColor: iconColor,
                                            minWidth: 24,
                                            minHeight: 24,
                                            borderRadius: '50%',
                                            padding: 0,
                                        },
                                    } }), _jsxs(Stack, { children: [title && (_jsx(Typography, { color: "white", sx: Object.assign(Object.assign({}, globalXSBase), { fontSize: 16, fontWeight: 500 }), children: title })), description && (_jsx(Typography, { color: "white", sx: Object.assign({}, globalXSBase), children: description }))] })] }), action: [
                            cancelAction && (_jsx(Button, { onClick: () => {
                                    cancelAction === null || cancelAction === void 0 ? void 0 : cancelAction.onClick();
                                    closeSnackbar(key);
                                }, sx: {
                                    p: 0.5,
                                    mr: 4,
                                    color: 'white',
                                    minWidth: 'auto',
                                    maxWidth: 120,
                                }, children: _jsx(Typography, { variant: "globalS", color: "white", fontWeight: "fontWeightRegular", sx: { textDecoration: 'underline', textTransform: 'none' }, children: cancelAction.text }) }, 'cancelButton')),
                            hasClose && (_jsx(IconButton, { color: "inherit", onClick: () => closeSnackbar(key), sx: {
                                    p: 0,
                                    top: 12,
                                    right: 12,
                                    fontSize: '12px',
                                    position: 'absolute',
                                }, children: _jsx(CloseIcon, { sx: { fontSize: '16px' } }) }, 'closeButton')),
                        ] }, key), _jsx(LinearProgress, { variant: "determinate", value: 100, sx: {
                            height: '6px',
                            backgroundColor: color,
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: iconColor,
                                animation: `${progressAnimation} ${autoHideDuration / 1000}s linear`,
                            },
                        } })] })),
        });
    };
    return { enqueueSnackbar };
};
export default useSnackbar;
