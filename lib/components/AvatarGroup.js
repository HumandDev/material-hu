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
import { AvatarGroup as AvatarGroupMui, useTheme, } from '@mui/material';
import { getColorsVariant, getSizeInPixels, } from './Avatar';
const MAX_AVATARS = 4;
const AvatarGroup = (_a) => {
    var { size = 'medium' } = _a, props = __rest(_a, ["size"]);
    const theme = useTheme();
    const sizeInPixels = getSizeInPixels(size);
    const colorsVariant = getColorsVariant('default', theme.palette);
    return (_jsx(AvatarGroupMui, Object.assign({ sx: Object.assign(Object.assign(Object.assign({}, props.sx), colorsVariant), { height: sizeInPixels, width: sizeInPixels, position: 'static' }), slotProps: {
            additionalAvatar: {
                sx: Object.assign({ height: sizeInPixels, width: sizeInPixels }, colorsVariant),
            },
        }, max: MAX_AVATARS }, props)));
};
export default AvatarGroup;
