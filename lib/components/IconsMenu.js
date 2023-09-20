import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
const IconsMenu = ({ options }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
    };
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { "aria-label": "menu", "aria-controls": "icon-menu", "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, id: "button-menu", onClick: handleClick, children: _jsx(MoreVertIcon, {}) }), _jsx(Menu, { id: "icon-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                    'aria-labelledby': 'button-menu',
                }, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }, children: options.map((option) => (_jsxs("div", { children: [_jsxs(MenuItem, { onClick: (e) => { e.stopPropagation(); handleClose(e); option.onClick(); }, children: [option.icon && (_jsx(ListItemIcon, { sx: { '&>*': { color: option.color } }, children: option.icon })), _jsx(ListItemText, { sx: Object.assign(Object.assign({}, option.textProps), { color: option.color }), children: option.label })] }), option.divider && (_jsx(Divider, {}))] }, option.label))) })] }));
};
export default IconsMenu;
