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
import { colorPalette } from '../../theme/hugo/colors';
import { Rating as MuiRating, } from '@mui/material';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
const mapSize = {
    small: 18,
    medium: 24,
    large: 30,
};
const Rating = (_a) => {
    var { max, size } = _a, props = __rest(_a, ["max", "size"]);
    const validMax = Math.max(max || 5, 1);
    const validSize = mapSize[size || 'medium'];
    return (_jsx(MuiRating, Object.assign({ sx: { color: colorPalette.buttons.buttonPrimaryEnabled, gap: 0.5 }, emptyIcon: _jsx(IconStar, { size: validSize }), icon: _jsx(IconStarFilled, { size: validSize }), max: validMax }, props, { precision: 1 })));
};
export default Rating;
