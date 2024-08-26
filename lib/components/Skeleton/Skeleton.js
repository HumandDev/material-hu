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
const getBorderRadius = (variant) => {
    // This method repeats MUI's internal code for the 'circular' variant but is necessary to set a diferent border radius default
    switch (variant) {
        case 'circular':
            return '50%';
        case 'rectangular':
            return undefined;
        default:
            return 0.5;
    }
};
const Skeleton = (_a) => {
    var { isLoading = true, variant = 'rounded', // Safer default that the MUI default 'text' which is not very useful beyond single lines of text (see variant definition at https://mui.com/material-ui/react-skeleton/#variants)
    sx } = _a, skeletonProps = __rest(_a, ["isLoading", "variant", "sx"]);
    return isLoading ? (_jsx(MuiSkeleton, Object.assign({ animation: 'wave', sx: Object.assign(Object.assign({}, sx), { borderRadius: getBorderRadius(variant) }), variant: variant }, skeletonProps))) : (_jsx(_Fragment, { children: skeletonProps === null || skeletonProps === void 0 ? void 0 : skeletonProps.children }));
};
export default Skeleton;
