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
import { TableContainer } from '@mui/material';
const TableContainerHu = (_a) => {
    var { hasToolbar = false, children, sx } = _a, props = __rest(_a, ["hasToolbar", "children", "sx"]);
    return (_jsx(TableContainer, Object.assign({ sx: Object.assign({ border: theme => { var _a; return `1px solid ${(_a = theme.palette.border) === null || _a === void 0 ? void 0 : _a.neutralBorder}`; }, borderRadius: '16px' }, sx) }, props, { children: children })));
};
export default TableContainerHu;
