import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { IconButton } from '@mui/material';
import { IconDotsVertical } from '@tabler/icons-react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import ListItem from '../List/ListItem';
export const MenuList = ({ Icon = IconDotsVertical, options }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const anchorRef = useRef(null);
    const handleMenuOpen = () => setOpenMenu(true);
    const handleMenuClose = () => setOpenMenu(false);
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { ref: anchorRef, onClick: handleMenuOpen, children: _jsx(Icon, {}) }), _jsx(Menu, { anchorEl: anchorRef.current, onClose: handleMenuClose, open: openMenu, sx: { '.MuiListItem-root': { p: 0 } }, children: options.map(option => (_jsx(MenuItem, { onClick: () => {
                        option.onClick();
                        handleMenuClose();
                    }, children: _jsx(ListItem, { text: {
                            title: option.title,
                            description: option === null || option === void 0 ? void 0 : option.description,
                        }, sx: { '.MuiListItem-root': { p: 0 } }, avatar: { Icon: option.Icon } }) }, option.title))) })] }));
};
