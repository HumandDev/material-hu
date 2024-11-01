import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu as MuiMenu, Divider, Stack, useTheme, } from '@mui/material';
import { MAX_HEIGHT, MAX_WIDTH } from './constants';
export const Menu = ({ id, anchorEl, open, onClose, children, sx, 'aria-labelledby': labelledby, footer, header, width, height, }) => {
    const theme = useTheme();
    return (_jsxs(MuiMenu, { id: id, anchorEl: anchorEl, open: open, onClose: onClose, sx: Object.assign(Object.assign({}, sx), { width: width ? width : MAX_WIDTH, height: 'auto' }), anchorOrigin: {
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
                display: 'flex',
                flexDirection: 'column',
                maxWidth: width ? width : MAX_WIDTH,
                maxHeight: height ? height : MAX_HEIGHT,
            },
        }, slotProps: {
            paper: {
                sx: {
                    boxShadow: theme.shadows[2],
                    borderRadius: theme.spacing(2),
                    width: width ? width : 'inherit',
                },
            },
        }, children: [header && (_jsxs(Stack, { sx: {
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    backgroundColor: 'background.paper',
                }, children: [_jsx(Stack, { sx: {
                            gap: 1,
                            p: 2,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }, children: header }), _jsx(Divider, {})] })), _jsx(Stack, { component: "ul", sx: {
                    flex: 1,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    py: 1,
                    px: 0,
                    m: 0,
                }, children: children }), footer && (_jsxs(Stack, { sx: {
                    position: 'sticky',
                    bottom: 0,
                    zIndex: 1,
                    backgroundColor: 'background.paper',
                }, children: [_jsx(Divider, {}), _jsx(Stack, { sx: {
                            gap: 1,
                            p: 2,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }, children: footer })] }))] }));
};
export default Menu;
