import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { colorPalette } from '../../theme/hugo/colors';
import { Drawer as MuiDrawer, Stack, IconButton, Typography, Button, } from '@mui/material';
import { IconX } from '@tabler/icons-react';
const sizeStyleMap = {
    medium: {
        width: '40vw',
        maxWidth: '600px',
    },
    large: {
        width: '80vw',
        maxWidth: '1400px',
    },
};
const Drawer = (props) => {
    var _a, _b, _c;
    const { title = '', size = 'medium', open = false, children, onClose, primaryActionText, secondaryActionText, primaryAction = () => { }, secondaryAction = () => { }, extraFooterContent, withDoubleLayout = false, primaryLayoutContent, secondaryLayoutContent, } = props;
    const realSize = withDoubleLayout ? 'large' : size;
    const stylesForSize = sizeStyleMap[realSize];
    const hasExtraFooter = !!extraFooterContent;
    const hasActions = primaryActionText || secondaryActionText;
    return (_jsxs(MuiDrawer, { anchor: "right", open: open, PaperProps: {
            sx: Object.assign({}, stylesForSize),
        }, children: [_jsxs(Stack, { sx: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    py: 2,
                    px: 3,
                    borderBottom: `1px solid ${(_a = colorPalette.border) === null || _a === void 0 ? void 0 : _a.neutralDivider}`,
                }, children: [_jsx(Typography, { variant: "globalS", sx: { fontWeight: 'semiBold' }, children: title }), _jsx(IconButton, { onClick: onClose, children: _jsx(IconX, {}) })] }), withDoubleLayout && (_jsxs(Stack, { sx: { flexDirection: 'row', flexGrow: 1, overflow: 'hidden' }, children: [_jsx(Stack, { sx: {
                            p: 3,
                            overflowY: 'scroll',
                            width: '50%',
                        }, children: primaryLayoutContent }), _jsx(Stack, { sx: {
                            p: 3,
                            overflowY: 'scroll',
                            width: '50%',
                            bgcolor: colorPalette.hugoBackground.neutralBgSecondary,
                        }, children: secondaryLayoutContent })] })), !withDoubleLayout && (_jsx(Stack, { sx: {
                    p: 3,
                    overflowY: 'scroll',
                    flexGrow: 1,
                }, children: children })), hasExtraFooter && (_jsx(Stack, { sx: {
                    px: 3,
                    py: 2,
                    borderTop: `1px solid ${(_b = colorPalette.border) === null || _b === void 0 ? void 0 : _b.neutralDivider}`,
                }, children: extraFooterContent })), hasActions && (_jsxs(Stack, { sx: {
                    px: 3,
                    py: 2,
                    gap: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    borderTop: `1px solid ${(_c = colorPalette.border) === null || _c === void 0 ? void 0 : _c.neutralDivider}`,
                }, children: [secondaryActionText && (_jsx(Button, { onClick: secondaryAction, variant: "text", size: size, children: secondaryActionText })), primaryActionText && (_jsx(Button, { onClick: primaryAction, variant: "outlined", size: size, children: primaryActionText }))] }))] }));
};
export default Drawer;
