import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Popover, Stack, } from '@mui/material';
import { useId, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { colorPalette } from '../../theme/hugo/colors';
const positionMap = {
    left: {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
        },
    },
    right: {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'right',
        },
    },
    center: {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'center',
        },
    },
};
const Dropdown = ({ children, label, onClick, onClose, buttonType = 'secondary', position = 'left', buttonSize = 'medium', hasIcon = true, containerSx = {}, popoverSx = {}, buttonProps = {}, }) => {
    const id = useId();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const menuId = open ? id : undefined;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        onClick && onClick(event);
    };
    const handleClose = () => {
        setAnchorEl(null);
        onClose && onClose();
    };
    const buttonVariant = buttonType === 'secondary' ? 'contained' : 'text';
    const containedButtonSx = {
        color: colorPalette.textColors.primaryText,
        backgroundColor: colorPalette.hugoBackground.neutralBgTerciary,
        border: `1px solid ${colorPalette.border.primaryBorder}`,
        '&:hover': {
            backgroundColor: colorPalette.buttons.buttonSecondaryHover,
        },
    };
    const textButtonSx = {
        color: colorPalette.textColors.primaryText,
    };
    const positionValues = positionMap[position];
    const anchorOrigin = positionValues.anchorOrigin;
    const transformOrigin = positionValues.transformOrigin;
    return (_jsxs(Stack, { sx: Object.assign({ flexDirection: 'row', alignItems: 'center', gap: '4px' }, containerSx), children: [_jsx(Button, Object.assign({ size: buttonSize, "aria-describedby": menuId, variant: buttonVariant, onClick: handleClick, sx: Object.assign({}, (buttonVariant === 'contained' ? containedButtonSx : textButtonSx)), endIcon: hasIcon ? (_jsx(KeyboardArrowDownIcon, { sx: {
                        color: colorPalette.textColors.primaryText,
                        transform: !open ? 'rotate(0deg)' : 'rotate(180deg)',
                        transition: 'transform 0.3s ease',
                    } })) : null }, buttonProps, { children: label })), _jsx(Popover, { id: menuId, open: open, anchorEl: anchorEl, onClose: handleClose, sx: Object.assign({ mt: 1, boxShadow: `-1px 8px 16px 0px ${colorPalette.shadows['8dp']}` }, popoverSx), anchorOrigin: anchorOrigin, transformOrigin: transformOrigin, children: _jsx(Stack, { children: children }) })] }));
};
export default Dropdown;
