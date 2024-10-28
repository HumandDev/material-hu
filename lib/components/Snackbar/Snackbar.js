import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SnackbarContent, Button, IconButton, Typography, Stack, Badge, LinearProgress, } from '@mui/material';
import { IconX, IconCheck, IconAlertTriangle, IconInfoCircle, } from '@tabler/icons-react';
import { useSnackbar as useNotistackSnackar } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';
import { keyframes } from '@mui/system';
import { colorPalette } from '../../theme/hugo/colors';
export const useSnackbar = () => {
    const { enqueueSnackbar, closeSnackbar } = useNotistackSnackar();
    const backgroundColor = colorPalette.textColors.neutralText;
    const getProps = (variant) => {
        switch (variant) {
            case 'warning':
                return {
                    Icon: IconAlertTriangle,
                    color: colorPalette.border.warningBorder,
                    iconColor: colorPalette.graphics.warningText,
                };
            case 'info':
                return {
                    Icon: IconInfoCircle,
                    color: colorPalette.border.infoBorder,
                    iconColor: colorPalette.graphics.infoText,
                };
            case 'error':
                return {
                    Icon: IconX,
                    color: colorPalette.border.errorBorder,
                    iconColor: colorPalette.graphics.errorText,
                };
            default:
            case 'success':
                return {
                    Icon: IconCheck,
                    color: colorPalette.border.successBorder,
                    iconColor: colorPalette.graphics.successText,
                };
        }
    };
    const myEnqueueSnackbar = (props) => {
        const { title, description, hasClose = true, cancelAction, variant, } = props;
        const { Icon, color, iconColor } = getProps(variant);
        const progressAnimation = keyframes `from { width: 0%; } to { width: 100%; }`;
        enqueueSnackbar('', {
            autoHideDuration: 10000,
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
                                maxWidth: 360,
                            }, children: [_jsx(Badge, { badgeContent: _jsx(Icon, { sx: { fontSize: '10px !important' } }), overlap: "circular", sx: {
                                        mr: 2,
                                        mb: description ? 2 : 0,
                                        '.MuiBadge-badge': {
                                            backgroundColor: iconColor,
                                            minWidth: 24,
                                            minHeight: 24,
                                            borderRadius: '50%',
                                            padding: 0,
                                        },
                                    } }), _jsxs(Stack, { children: [title && (_jsx(Typography, { variant: "globalS", fontWeight: "semiBold", color: "white", children: title })), description && (_jsx(Typography, { variant: "globalXS", fontWeight: "regular", color: "white", children: description }))] })] }), action: [
                            cancelAction && (_jsx(Button, { onClick: () => {
                                    cancelAction === null || cancelAction === void 0 ? void 0 : cancelAction.onClick();
                                    closeSnackbar(key);
                                }, sx: {
                                    p: 0.5,
                                    mr: 4,
                                    color: 'white',
                                    minWidth: 'auto',
                                    maxWidth: 150,
                                }, children: _jsx(Typography, { variant: "globalS", color: "white", fontWeight: "regular", sx: { textDecoration: 'underline', textTransform: 'none' }, children: cancelAction.text }) })),
                            hasClose && (_jsx(IconButton, { color: "inherit", onClick: () => closeSnackbar(key), sx: {
                                    top: 4,
                                    right: 4,
                                    fontSize: '12px',
                                    position: 'absolute',
                                }, children: _jsx(CloseIcon, { sx: { fontSize: '16px' } }) })),
                        ] }, key), _jsx(LinearProgress, { variant: "determinate", value: 100, sx: {
                            height: '6px',
                            backgroundColor: color,
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: iconColor,
                                animation: `${progressAnimation} 8s linear`,
                            },
                        } })] })),
        });
    };
    return { myEnqueueSnackbar };
};
export default useSnackbar;
