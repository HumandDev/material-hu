import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Stack, Breadcrumbs as MuiBreadcrumbs, Typography, useTheme, } from '@mui/material';
import Link from '../Link/Link';
import { useMemo } from 'react';
import { CustomCollapsedIcon } from './CustomCollapsedIcon';
import React from 'react';
const LinkBox = ({ children, darkBackground, breadcrumbIcon, }) => {
    var _a, _b;
    const theme = useTheme();
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            alignItems: 'center',
        }, children: [children, breadcrumbIcon
                ? React.createElement(breadcrumbIcon, {
                    sx: {
                        ml: 0.25,
                        width: 16,
                        height: 16,
                        color: darkBackground
                            ? (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.white
                            : (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.blueBrand[400],
                    },
                })
                : null] }));
};
const BreadCrumbs = ({ links, darkBackground }) => {
    var _a;
    const theme = useTheme();
    const collapsedLinks = useMemo(() => links.slice(1, -2), [links]);
    return (_jsx(MuiBreadcrumbs, { "aria-label": "breadcrumb", sx: {
            '& .MuiLink-root': {
                textDecoration: 'underline',
                cursor: 'pointer',
            },
            '& .MuiButtonBase-root': {
                '&, &:hover': {
                    backgroundColor: 'transparent',
                },
            },
            '& .MuiBreadcrumbs-separator': {
                mx: 0.5,
                color: darkBackground ? (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.white : 'inherit',
            },
        }, maxItems: 4, itemsAfterCollapse: 2, separator: _jsx(Typography, { variant: "globalS", mx: 0.5, children: "/" }), slots: { CollapsedIcon: CustomCollapsedIcon }, 
        // @ts-ignore - Mui does not recognize the CustomCollapsedIcon props
        slotProps: { collapsedIcon: { collapsedLinks, darkBackground } }, children: links.map((link, index) => {
            var _a, _b, _c;
            return (_jsxs(LinkBox, { breadcrumbIcon: link.icon, darkBackground: darkBackground, children: [index < links.length - 1 && (_jsx(Link, { color: darkBackground ? (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.white : 'primary.main', href: link.href, onClick: link.onClick, children: link.title })), index === links.length - 1 && (_jsx(Typography, { variant: "globalS", color: darkBackground
                            ? (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.white
                            : (_c = theme.palette.base) === null || _c === void 0 ? void 0 : _c.grey[800], children: link.title }))] }, index));
        }) }));
};
export default BreadCrumbs;
