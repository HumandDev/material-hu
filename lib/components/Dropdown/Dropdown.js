import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Popover, Stack, } from '@mui/material';
import { useId, useRef, useState } from 'react';
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
const Dropdown = ({ children, label, open, onOpen, onClose, onClick, buttonType = 'secondary', position = 'left', buttonSize = 'medium', hasIcon = true, sx = {}, popoverSx = {}, buttonProps = {}, }) => {
    const id = useId();
    const isControlled = open !== undefined;
    const [anchorEl, setAnchorEl] = useState(null);
    const buttonRef = useRef(null);
    // Determine the open state and anchor element based on controlled mode
    const isOpen = isControlled ? open : Boolean(anchorEl);
    const menuId = isOpen ? id : undefined;
    const anchorElement = isControlled ? buttonRef.current : anchorEl;
    const handleClick = (event) => {
        if (isControlled) {
            // In controlled mode, notify parent if open state should change
            if (open === false && onOpen) {
                onOpen();
            }
        }
        else {
            // In uncontrolled mode, manage internal state
            setAnchorEl(event.currentTarget);
        }
        // Call onClick prop if provided
        if (onClick) {
            onClick(event);
        }
    };
    const handleClose = () => {
        if (isControlled) {
            // In controlled mode, notify parent if open state should change
            if (open === true && onClose) {
                onClose();
            }
        }
        else {
            // In uncontrolled mode, manage internal state
            setAnchorEl(null);
        }
        // Call onClose prop if provided
        if (onClose) {
            onClose();
        }
    };
    const buttonVariant = buttonType === 'secondary' ? 'contained' : 'text';
    const containedButtonSx = {
        backgroundColor: colorPalette.hugoBackground.neutralBgTerciary,
        border: `1px solid ${colorPalette.border.primaryBorder}`,
        '&:hover': {
            backgroundColor: colorPalette.buttons.buttonSecondaryHover,
        },
    };
    const positionValues = positionMap[position];
    const anchorOrigin = positionValues.anchorOrigin;
    const transformOrigin = positionValues.transformOrigin;
    return (_jsxs(Stack, { sx: Object.assign({ flexDirection: 'row', alignItems: 'center', gap: '4px' }, sx), children: [_jsx(Button, Object.assign({ ref: buttonRef, size: buttonSize, "aria-describedby": menuId, variant: buttonVariant, onClick: handleClick, sx: Object.assign({ color: colorPalette.textColors.primaryText }, (buttonVariant === 'contained' && containedButtonSx)), endIcon: hasIcon ? (_jsx(KeyboardArrowDownIcon, { sx: {
                        color: colorPalette.textColors.primaryText,
                        transform: !isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
                        transition: 'transform 0.3s ease',
                    } })) : null }, buttonProps, { children: label })), _jsx(Popover, { id: menuId, open: isOpen, anchorEl: anchorElement, onClose: handleClose, sx: Object.assign({ mt: 1, boxShadow: `-1px 8px 16px 0px ${colorPalette.shadows['8dp']}` }, popoverSx), anchorOrigin: anchorOrigin, transformOrigin: transformOrigin, children: _jsx(Stack, { children: children }) })] }));
};
export default Dropdown;
