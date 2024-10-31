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
import { Link as MuiLink, Stack, useTheme, } from '@mui/material';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { colorPalette } from '../../theme/hugo/colors';
const Link = (_a) => {
    var { children, hasIcon = false, iconSize = 16, disabled = false, stackSx = {} } = _a, props = __rest(_a, ["children", "hasIcon", "iconSize", "disabled", "stackSx"]);
    const theme = useTheme();
    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        if (props.onClick) {
            props.onClick(e);
        }
    };
    return (_jsxs(Stack, { sx: Object.assign({ flexDirection: 'row', alignItems: 'center', gap: '2px' }, stackSx), children: [_jsx(MuiLink, Object.assign({ color: disabled ? colorPalette.textColors.neutralTextDisabled : 'primary', sx: {
                    cursor: disabled ? 'not-allowed' : 'pointer',
                }, onClick: e => handleClick(e) }, props, { children: children })), hasIcon && (_jsx(IconArrowNarrowRight, { color: theme.palette.primary.main, size: iconSize }))] }));
};
export default Link;
