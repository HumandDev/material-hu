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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { List as BaseList, Divider, } from '@mui/material';
const ListWithDivider = (_a) => {
    var { items, dividerProps } = _a, other = __rest(_a, ["items", "dividerProps"]);
    return (_jsx(BaseList, Object.assign({}, other, { children: items.map(item => (_jsxs(_Fragment, { children: [item, _jsx(Divider, Object.assign({ variant: "middle" }, dividerProps, { sx: Object.assign({ '&:last-of-type': { visibility: 'hidden' } }, dividerProps === null || dividerProps === void 0 ? void 0 : dividerProps.sx) }))] }))) })));
};
export default ListWithDivider;
