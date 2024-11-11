import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DialogActions, DialogContent, IconButton, Stack, Typography, } from '@mui/material';
import { default as Button, } from '@mui/lab/LoadingButton';
import { IconX, IconInfoCircle } from '@tabler/icons-react';
import { colorPalette } from '../../theme/hugo/colors';
const Dialog = ({ title, onClose, body, textBody, primaryButtonProps, secondaryButtonProps, actionInfo, }) => {
    const hasFooter = primaryButtonProps || secondaryButtonProps || actionInfo;
    return (_jsxs(Stack, { sx: { maxHeight: '600px' }, children: [_jsxs(Stack, { sx: {
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: '8px',
                    justifyContent: title ? 'space-between' : 'flex-end',
                    px: 3,
                    py: 2,
                }, children: [title && (_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", children: title })), _jsx(IconButton, { "aria-label": "close", onClick: onClose, sx: { p: 0 }, children: _jsx(IconX, { color: colorPalette.textColors.neutralText }) })] }), _jsxs(DialogContent, { sx: { px: 3, py: 2, maxHeight: '400px', overflowY: 'auto' }, children: [textBody && (_jsx(Typography, { variant: 'globalS', sx: {
                            color: colorPalette.textColors.neutralText,
                        }, children: textBody })), body] }), hasFooter && (_jsxs(DialogActions, { sx: {
                    px: 3,
                    py: 2,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: actionInfo ? 'space-between' : 'flex-end',
                    borderTop: `1px solid ${colorPalette.border.neutralBorder}`,
                }, children: [actionInfo && (_jsxs(Stack, { sx: { flexDirection: 'row', gap: '4px', alignItems: 'center' }, children: [_jsx(IconInfoCircle, { size: 16, color: colorPalette.textColors.neutralTextLighter }), _jsx(Typography, { variant: "globalXS", sx: { color: colorPalette.textColors.neutralTextLighter }, children: actionInfo })] })), _jsxs(Stack, { sx: { flexDirection: 'row', gap: '8px' }, children: [secondaryButtonProps && (_jsx(Button, Object.assign({ color: "primary", variant: "text", size: "medium" }, secondaryButtonProps))), primaryButtonProps && (_jsx(Button, Object.assign({ size: "medium", color: "primary", variant: "contained" }, primaryButtonProps)))] })] }))] }));
};
export default Dialog;
