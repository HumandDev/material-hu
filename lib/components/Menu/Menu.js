import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu as MuiMenu, Divider, Stack, useTheme, } from '@mui/material';
import { MAX_HEIGHT, MAX_WIDTH } from './constants';
export const Menu = ({ id, anchorEl, open, onClose, children, sx, 'aria-labelledby': labelledby, footer, }) => {
    const theme = useTheme();
    return (_jsxs(MuiMenu, { id: id, anchorEl: anchorEl, open: open, onClose: onClose, sx: sx, anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
        }, transformOrigin: {
            vertical: -8,
            horizontal: 'center',
        }, MenuListProps: {
            component: 'div',
            'aria-labelledby': labelledby,
            sx: {
                p: 0,
                maxHeight: MAX_HEIGHT,
                maxWidth: MAX_WIDTH,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
            },
        }, slotProps: {
            paper: {
                sx: {
                    maxHeight: MAX_HEIGHT,
                    maxWidth: MAX_WIDTH,
                    boxShadow: theme.shadows[2],
                    borderRadius: theme.spacing(2),
                },
            },
        }, children: [_jsx(Stack, { component: "ul", sx: {
                    py: 1,
                    px: 0,
                    m: 0,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    flex: 1,
                }, children: children }), footer && (_jsxs(Stack, { children: [_jsx(Divider, {}), _jsx(Stack, { sx: {
                            gap: 1,
                            p: 2,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }, children: footer })] }))] }));
};
export default Menu;
