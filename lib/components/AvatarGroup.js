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
export const formatSurplus = (surplus) => {
    const thousandFraction = surplus / 1000;
    if (surplus > 9999 || surplus % 1000 === 0) {
        return `+${Math.trunc(thousandFraction).toString()}K`;
    }
    return surplus > 999
        ? `+${(Math.trunc(thousandFraction * 10) / 10).toString()}K`
        : `+${surplus}`;
};
const AvatarGroup = (_a) => {
    var { size = 'medium', spacing = 'medium' } = _a, props = __rest(_a, ["size", "spacing"]);
    const theme = useTheme();
    const sizeInPixels = getSizeInPixels(size);
    const colorsVariant = getColorsVariant('default', theme.palette);
    return (_jsx(AvatarGroupMui, Object.assign({ slotProps: {
            additionalAvatar: {
                sx: Object.assign({ height: sizeInPixels, width: sizeInPixels }, colorsVariant),
            },
        }, max: MAX_AVATARS, spacing: spacing, renderSurplus: formatSurplus }, props, { sx: Object.assign(Object.assign(Object.assign({}, props.sx), colorsVariant), { height: sizeInPixels, width: sizeInPixels, '& .MuiAvatarGroup-root': {
                backgroundColor: 'yellow',
                color: 'blue',
                position: 'static',
            } }) })));
};
export default AvatarGroup;
