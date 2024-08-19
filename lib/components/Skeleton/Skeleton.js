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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Skeleton as MuiSkeleton } from '@mui/material';
const Skeleton = (_a) => {
    var { children = undefined, isLoading = true, animation = 'wave' } = _a, skeletonProps = __rest(_a, ["children", "isLoading", "animation"]);
    return isLoading || !children ? (_jsx(MuiSkeleton, Object.assign({}, skeletonProps, { animation: animation }))) : (_jsx(_Fragment, { children: children }));
};
export default Skeleton;
