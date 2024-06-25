import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Avatar, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, } from '@mui/material';
import { ChevronRight, MoreVert as MoreVertIcon } from '@mui/icons-material';
export const IconsMenu = props => {
    const { options, onClick = () => null, onClose = () => null, disabled = false, chevron = false, } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const disabledStyles = {
        cursor: 'not-allowed',
        opacity: '38%',
    };
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
        callback();
    };
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { "aria-label": "menu", "aria-controls": "icon-menu", "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, id: "button-menu", onClick: disabled ? undefined : handleClick, disableRipple: disabled, children: _jsx(MoreVertIcon, { sx: disabled ? disabledStyles : undefined }) }), _jsx(Menu, { id: "icon-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                    'aria-labelledby': 'button-menu',
                }, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }, children: options.map(option => (_jsxs("div", { children: [_jsxs(MenuItem, { onClick: handleOptionClick(option.onClick), disabled: option.disabled, children: [option.icon && (_jsx(ListItemIcon, { sx: {
                                        '&>*': {
                                            color: option.disabled ? 'text.disabled' : option.color,
                                        },
                                    }, children: _jsx(Avatar, { sx: {
                                            bgcolor: option.disabled ? 'grey.300' : 'grey.200',
                                            width: 24,
                                            height: 24,
                                        }, children: option.icon }) })), _jsx(ListItemText, { sx: Object.assign(Object.assign({}, option.textProps), { color: option.disabled ? 'text.disabled' : option.color }), children: option.label }), chevron && (_jsx(ListItemIcon, { sx: {
                                        minWidth: 'auto',
                                        marginLeft: 'auto',
                                        color: option.disabled ? 'text.disabled' : 'inherit',
                                    }, children: _jsx(ChevronRight, {}) }))] }), option.divider && _jsx(Divider, { sx: { px: 1 } })] }, option.label))) })] }));
};
export default IconsMenu;
