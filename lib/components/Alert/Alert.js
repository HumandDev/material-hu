import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Alert as AlertMui, AlertTitle, IconButton, Typography, Button, Stack, } from '@mui/material';
import { IconX, IconExclamationCircle, IconCheck, IconAlertTriangle, IconInfoCircle, IconBulb, } from '@tabler/icons-react';
import { colorPalette } from '../../theme/hugo/colors';
const mapSeverityIcon = {
    success: {
        icon: IconCheck,
        backgroundColor: colorPalette.background.successBg,
        borderColor: colorPalette.border.successBorder,
        color: colorPalette.textColors.successText,
    },
    error: {
        icon: IconExclamationCircle,
        backgroundColor: colorPalette.background.errorBg,
        borderColor: colorPalette.border.errorBorder,
        color: colorPalette.textColors.errorText,
    },
    warning: {
        icon: IconAlertTriangle,
        backgroundColor: colorPalette.background.warningBg,
        borderColor: colorPalette.border.warningBorder,
        color: colorPalette.textColors.warningText,
    },
    info: {
        icon: IconInfoCircle,
        backgroundColor: colorPalette.background.infoBg,
        borderColor: colorPalette.border.infoBorder,
        color: colorPalette.textColors.infoText,
    },
    highlight: {
        icon: IconBulb,
        backgroundColor: colorPalette.background.secondaryBg,
        borderColor: colorPalette.border.secondaryBorder,
        color: colorPalette.textColors.secondaryText,
    },
};
const Alert = (props) => {
    const { title, description, hasClose, onClose, action, severity } = props;
    const [open, setOpen] = useState(true);
    if (!open)
        return null;
    const data = mapSeverityIcon[severity];
    return (_jsxs(AlertMui, { icon: _jsx(data.icon, { color: data.color }), action: _jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center' }, children: [action && (_jsx(Button, { variant: "text", onClick: action.onClick, sx: {
                        color: data.color,
                        minWidth: 'unset',
                        '&:hover': {
                            backgroundColor: data.borderColor,
                        },
                    }, children: action.text })), hasClose && (_jsx(IconButton, { sx: { alignSelf: 'flex-start' }, "aria-label": "close", color: "inherit", size: "small", onClick: () => {
                        onClose === null || onClose === void 0 ? void 0 : onClose();
                        setOpen(false);
                    }, children: _jsx(IconX, {}) }))] }), sx: {
            backgroundColor: data.backgroundColor,
            borderColor: data.borderColor,
            borderStyle: 'solid',
            color: data.color,
            p: 2,
            alignItems: description ? 'normal' : 'center',
            ':before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                borderLeft: `solid ${colorPalette.graphics.successText} 6px`,
                borderRadius: '6px',
                width: '20px',
            },
            position: 'relative',
        }, children: [_jsx(AlertTitle, { sx: { mb: description ? 0.25 : 0 }, children: title }), description && _jsx(Typography, { children: description })] }));
};
export default Alert;