import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Popper, Paper, Link, Typography, ClickAwayListener, Box, useTheme, } from '@mui/material';
import { useState } from 'react';
import { colorPalette } from '../../theme/hugo/colors';
const CollapsedItemsPopper = ({ id, open, anchorEl, collapsedLinks, }) => {
    return (_jsx(Popper, { id: id, open: open, anchorEl: anchorEl, children: _jsx(Paper, { sx: {
                mt: 1,
                maxWidth: 200,
                display: 'flex',
                flexDirection: 'column',
            }, elevation: 2, children: collapsedLinks.map((link, index) => (_jsx(Link, { href: link.href, sx: {
                    p: 1,
                    ':hover': {
                        backgroundColor: colorPalette.hugoBackground.neutralBgSecondary,
                    },
                    textDecoration: 'none',
                    color: 'inherit',
                }, children: _jsx(Typography, { variant: "globalS", fontWeight: 600, children: link.title }) }, index))) }) }));
};
export const CustomCollapsedIcon = ({ collapsedLinks, darkBackground, }) => {
    var _a;
    const [popperAnchorEl, setPopperAnchorEl] = useState(null);
    const theme = useTheme();
    const open = Boolean(popperAnchorEl);
    const id = open ? 'simple-popper' : undefined;
    const onClickEllipsis = (event) => {
        event.stopPropagation();
        setPopperAnchorEl(popperAnchorEl ? null : event.currentTarget);
    };
    const onClickAway = () => {
        setPopperAnchorEl(null);
    };
    return (_jsx(Link, { sx: {
            textDecoration: 'underline',
            // make underline white
            color: darkBackground ? (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.white : 'inherit',
            cursor: 'pointer',
        }, "aria-describedby": id, children: _jsx(ClickAwayListener, { onClickAway: onClickAway, children: _jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(Box, { onClick: onClickEllipsis, children: "..." }), popperAnchorEl ? (_jsx(CollapsedItemsPopper, { id: id, open: open, anchorEl: popperAnchorEl, collapsedLinks: collapsedLinks })) : null] }) }) }));
};
