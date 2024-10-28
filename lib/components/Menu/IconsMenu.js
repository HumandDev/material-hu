import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { IconButton, Stack } from '@mui/material';
import { ListItem } from '../List/ListItem';
import { Menu } from './Menu';
import { IconDotsVertical } from '@tabler/icons-react';
export const IconsMenu = ({ options, onClick = () => null, onClose = () => null, disabled = false, }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
        onClick(event);
    };
    const handleClose = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
        onClose(event);
    };
    const handleOptionClick = (callback) => (event) => {
        event.stopPropagation();
        handleClose(event);
        callback(event);
    };
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { id: "button-menu", "aria-label": "menu", "aria-controls": "icon-menu", "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, onClick: disabled ? undefined : handleClick, disabled: disabled, children: _jsx(IconDotsVertical, {}) }), _jsx(Menu, { id: "icon-menu", anchorEl: anchorEl, open: open, onClose: handleClose, "aria-labelledby": "button-menu", children: options.map(option => (_jsx(Stack, { id: `menu-option-${option.id}`, component: "li", sx: {
                        height: '74px',
                    }, children: _jsx(ListItem, { onClick: handleOptionClick(option.onClick), text: {
                            title: option.title,
                            description: option.description,
                        }, avatar: option.Icon ? { Icon: option.Icon } : undefined }) }, option.id))) })] }));
};
export default IconsMenu;
