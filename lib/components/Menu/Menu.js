import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu as MuiMenu, Divider, Stack, useTheme, } from '@mui/material';
import { MAX_HEIGHT, MAX_WIDTH, positionMap } from './constants';
export const Menu = ({ id, anchorEl, open, onClose, children, sx, position = 'center', fixedDimensions = true, 'aria-labelledby': labelledby, footer, header, }) => {
    const theme = useTheme();
    const positionValues = positionMap[position];
    const anchorOrigin = positionValues.anchorOrigin;
    const transformOrigin = positionValues.transformOrigin;
    const fixedDimensionsSx = {
        maxHeight: MAX_HEIGHT,
        maxWidth: MAX_WIDTH,
        overflow: 'hidden',
    };
    const fixedDimensionsUlSx = {
        overflowY: 'auto',
        overflowX: 'hidden',
        py: 1,
    };
    const fixeDimensionsSlotSx = {
        maxHeight: MAX_HEIGHT,
        maxWidth: MAX_WIDTH,
    };
    return (_jsxs(MuiMenu, { id: id, anchorEl: anchorEl, open: open, onClose: onClose, sx: Object.assign({ mt: 1 }, sx), anchorOrigin: anchorOrigin, transformOrigin: transformOrigin, MenuListProps: {
            component: 'div',
            'aria-labelledby': labelledby,
            sx: Object.assign({ p: 0, display: 'flex', flexDirection: 'column' }, (fixedDimensions && fixedDimensionsSx)),
        }, slotProps: {
            paper: {
                sx: Object.assign({ boxShadow: theme.shadows[2], borderRadius: theme.spacing(2) }, (fixedDimensions && fixeDimensionsSlotSx)),
            },
        }, children: [header && (_jsxs(Stack, { sx: {
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    backgroundColor: 'background.paper',
                }, children: [header, _jsx(Divider, { sx: { borderBottomWidth: 0.5, color: '#f0f0f0' } })] })), _jsx(Stack, { component: "ul", sx: Object.assign({ px: 0, m: 0, flex: 1 }, (fixedDimensions && fixedDimensionsUlSx)), children: children }), footer && (_jsxs(Stack, { sx: {
                    position: 'sticky',
                    bottom: 0,
                    zIndex: 1,
                    backgroundColor: 'background.paper',
                }, children: [_jsx(Divider, { sx: { borderBottomWidth: 0.5, color: '#f0f0f0' } }), _jsx(Stack, { sx: {
                            gap: 1,
                            p: 2,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }, children: footer })] }))] }));
};
export default Menu;
