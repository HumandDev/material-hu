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
import { jsx as _jsx } from "react/jsx-runtime";
import { Stack, CircularProgress } from '@mui/material';
const CenteredCircularProgress = (_a) => {
    var { centered = true, darkBackground = false, size = 'medium' } = _a, props = __rest(_a, ["centered", "darkBackground", "size"]);
    const auxSize = size === 'small' ? 24 : 32;
    const circularProgress = (_jsx(CircularProgress, Object.assign({ sx: {
            color: theme => {
                var _a, _b;
                return darkBackground
                    ? (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.white
                    : (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.blueBrand[400];
            },
        } }, props, { size: auxSize })));
    return centered ? (_jsx(Stack, { direction: "row", sx: { justifyContent: 'center', alignItems: 'center' }, children: circularProgress })) : (circularProgress);
};
export default CenteredCircularProgress;
