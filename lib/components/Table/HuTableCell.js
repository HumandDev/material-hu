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
import { TableCell, Typography } from '@mui/material';
import Tooltip from '../Tooltip/Tooltip';
const HuTableCell = (_a) => {
    var { children, sx, tooltip, tooltipProps = {}, headerCell = false, actionable = false, selectionCell = false } = _a, props = __rest(_a, ["children", "sx", "tooltip", "tooltipProps", "headerCell", "actionable", "selectionCell"]);
    const hoverStyles = actionable
        ? {
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#E9E9F4',
            },
        }
        : {};
    return (_jsx(Tooltip, Object.assign({ title: tooltip, disableTooltip: !tooltip, direction: "bottom" }, tooltipProps, { children: _jsxs(TableCell, Object.assign({ align: selectionCell ? 'center' : 'left', sx: Object.assign(Object.assign(Object.assign({ py: 2, px: 3 }, (selectionCell
                ? {
                    borderRight: theme => { var _a; return `4px solid ${(_a = theme.palette.border) === null || _a === void 0 ? void 0 : _a.neutralBorder}`; },
                    p: 1,
                }
                : {})), hoverStyles), sx) }, props, { children: [headerCell && (_jsx(Typography, { variant: "globalS", fontWeight: "semibold", sx: { color: theme => { var _a; return (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.neutralText; } }, children: children })), !headerCell && children] })) })));
};
export default HuTableCell;
