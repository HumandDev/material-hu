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
export const ActionsMenuItem = (props) => {
    const { closeOnSelect, closeMenu } = useMenu();
    const { sx } = props;
    const handleClick = () => {
        if (closeOnSelect) {
            closeMenu();
        }
    };
    return (_jsx(MuiMenuItem, Object.assign({ onClick: handleClick }, props, { sx: Object.assign({ borderRadius: '12px' }, sx) })));
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
