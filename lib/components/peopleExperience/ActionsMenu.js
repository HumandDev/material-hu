var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId, useState, createContext, useContext } from 'react';
import { Menu as MuiMenu, MenuItem as MuiMenuItem, } from '@mui/material';
const MenuContext = createContext({
    closeOnSelect: false,
    closeMenu: () => { },
});
const useMenu = () => {
    const context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error('useMenu must be used within a <PXMenu />');
    }
    return context;
};
export const ActionsMenuItem = (_a) => {
    var { onClick, sx } = _a, props = __rest(_a, ["onClick", "sx"]);
    const { closeOnSelect, closeMenu } = useMenu();
    const handleClick = event => {
        if (closeOnSelect) {
            closeMenu();
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    };
    return (_jsx(MuiMenuItem, Object.assign({}, props, { onClick: handleClick, sx: Object.assign({ borderRadius: '12px' }, sx) })));
};
const ActionsMenu = ({ children, renderTrigger, closeOnSelect }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const id = useId();
    const isOpen = Boolean(anchorEl);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (_jsxs(MenuContext.Provider, { value: { closeMenu: handleClose, closeOnSelect }, children: [renderTrigger({
                ariaProps: {
                    id,
                    'aria-controls': isOpen ? 'actions-menu' : undefined,
                    'aria-haspopup': 'true',
                    'aria-expanded': isOpen ? 'true' : undefined,
                },
                handleOpen,
                open: isOpen,
            }), _jsx(MuiMenu, { id: "actions-menu", anchorEl: anchorEl, open: isOpen, onClose: handleClose, MenuListProps: {
                    'aria-labelledby': id,
                    sx: { p: 0.5 },
                }, children: children })] }));
};
export default ActionsMenu;
