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
import { styled } from '@mui/system';
const StyledCircularProgress = styled(CircularProgress)(({ theme, onDark }) => {
    var _a, _b;
    return ({
        color: onDark
            ? (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.white
            : (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.blueBrand[400],
    });
});
const CenteredCircularProgress = (_a) => {
    var { centered = false, onDark = false } = _a, props = __rest(_a, ["centered", "onDark"]);
    const circularProgress = (_jsx(StyledCircularProgress, Object.assign({}, props, { onDark: onDark })));
    return centered ? (_jsx(Stack, { direction: "row", sx: { justifyContent: 'center', alignItems: 'center' }, children: circularProgress })) : (circularProgress);
};
export default CenteredCircularProgress;
