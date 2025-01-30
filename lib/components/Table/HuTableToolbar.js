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
import { Stack } from '@mui/material';
const HuTableToolbar = (_a) => {
    var { children, sx = {} } = _a, props = __rest(_a, ["children", "sx"]);
    return (_jsx(Stack, Object.assign({ sx: Object.assign({ px: 2, py: 3, color: theme => { var _a; return (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.neutralTextLighter; }, backgroundColor: theme => { var _a; return (_a = theme.palette.hugoBackground) === null || _a === void 0 ? void 0 : _a.neutralBgTerciary; } }, sx) }, props, { children: children })));
};
export default HuTableToolbar;
