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
import { colorPalette } from '../../theme/hugo/colors';
import { Tooltip as MuiTooltip, Stack, Typography } from '@mui/material';
const TooltipBody = ({ title, description }) => {
    return (_jsxs(Stack, { sx: { p: 1 }, children: [_jsx(Typography, { variant: "globalS", sx: {
                    fontWeight: 'semibold',
                    color: colorPalette.textColors.neutralTextInverted,
                }, children: title }), _jsx(Typography, { variant: "globalXS", sx: { color: colorPalette.textColors.neutralTextInverted }, children: description })] }));
};
const Tooltip = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { title = '', description = '', direction = 'top' } = props;
    return (_jsx(MuiTooltip, { arrow: true, placement: direction, sx: {
            maxWidth: '312px',
            minWidth: '150px',
        }, PopperProps: {
            sx: {
                '.MuiTooltip-tooltip': {
                    background: colorPalette.textColors.neutralText,
                },
                '.MuiTooltip-arrow': {
                    color: colorPalette.textColors.neutralText,
                },
            },
        }, title: _jsx(TooltipBody, { title: title, description: description }), children: children }));
};
export default Tooltip;
