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
import { round } from 'lodash';
import { LinearProgress, Stack, Typography, } from '@mui/material';
const LinearProgressWithLabel = (_a) => {
    var { linearProgressProps, value = 0 } = _a, other = __rest(_a, ["linearProgressProps", "value"]);
    const mappedValue = value * 100;
    return (_jsxs(Stack, Object.assign({}, other, { sx: Object.assign({ flexDirection: 'row', alignItems: 'center', width: '100%', gap: 1 }, other.sx), children: [_jsx(LinearProgress, Object.assign({ sx: { width: '100%' }, variant: "determinate" }, linearProgressProps, { value: mappedValue })), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { flexShrink: 0 }, children: `${round(mappedValue, 1)}%` })] })));
};
export default LinearProgressWithLabel;
