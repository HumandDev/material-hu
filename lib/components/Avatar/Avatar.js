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
import { Avatar as AvatarMui, useTheme, } from '@mui/material';
import Badge from '../Badge/Badge';
const getSizeInPixels = (size) => {
    switch (size) {
        case 'small':
            return '32px';
        case 'large':
            return '60px';
        default:
            return '40px';
    }
};
const getColorsVariant = (color, palette) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    switch (color) {
        case 'primary':
            return {
                backgroundColor: (_a = palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[100],
                color: (_b = palette.base) === null || _b === void 0 ? void 0 : _b.blueBrand[800],
            };
        case 'highlight':
            return {
                backgroundColor: (_c = palette.base) === null || _c === void 0 ? void 0 : _c.lilac[100],
                color: (_d = palette.base) === null || _d === void 0 ? void 0 : _d.lilac[800],
            };
        case 'success':
            return {
                backgroundColor: (_e = palette.base) === null || _e === void 0 ? void 0 : _e.green[100],
                color: (_f = palette.base) === null || _f === void 0 ? void 0 : _f.green[800],
            };
        case 'error':
            return {
                backgroundColor: (_g = palette.base) === null || _g === void 0 ? void 0 : _g.red[100],
                color: (_h = palette.base) === null || _h === void 0 ? void 0 : _h.red[800],
            };
        case 'warning':
            return {
                backgroundColor: (_j = palette.base) === null || _j === void 0 ? void 0 : _j.yellow[100],
                color: (_k = palette.base) === null || _k === void 0 ? void 0 : _k.yellow[800],
            };
        default:
            return {
                backgroundColor: palette.grey[200],
                color: palette.grey[800],
            };
    }
};
const getOffset = (size, variant) => {
    if (variant === 'dot') {
        const dotLarge = '-4px';
        const dotSmallMedium = '-0.5px';
        const translateOffset = size === 'medium' || size === 'small' ? dotSmallMedium : dotLarge;
        return {
            '& .MuiBadge-badge': {
                transform: `translate(${translateOffset}, ${translateOffset})`,
            },
        };
    }
    else if (variant === 'standard') {
        const standardLarge = '0px';
        const standardMedium = '6px';
        const translateOffset = size === 'large' ? standardLarge : standardMedium;
        return {
            '& .MuiBadge-badge': {
                transform: `translate(${translateOffset}, ${translateOffset})`,
            },
        };
    }
    return {};
};
const Avatar = (_a) => {
    var { size = 'medium', color = 'default', withBadge = false, badgeProps = { variant: 'standard', color: 'primary' } } = _a, props = __rest(_a, ["size", "color", "withBadge", "badgeProps"]);
    const theme = useTheme();
    const sizeInPixels = getSizeInPixels(size);
    const colorsVariant = getColorsVariant(color, theme.palette);
    const roundedBorderRadius = theme.shape.borderRadius;
    const avatar = (_jsx(AvatarMui, Object.assign({ sx: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, props.sx), colorsVariant), { height: sizeInPixels, width: sizeInPixels }), (props.variant === 'rounded' && {
            borderRadius: roundedBorderRadius,
        })), (props.variant === 'square' && {
            borderRadius: 1,
        })), (!props.src && {
            // text style globalXS
            fontFamily: 'Roboto',
            fontSize: 14,
            lineHeight: '140%',
            fontWeight: 600,
            letterSpacing: 0.2,
        })) }, props)));
    const forcedVariant = size === 'small' || !badgeProps.badgeContent ? 'dot' : badgeProps === null || badgeProps === void 0 ? void 0 : badgeProps.variant;
    return withBadge ? (_jsx(Badge, Object.assign({}, badgeProps, { anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, sx: getOffset(size, forcedVariant), 
        // On DS3 the standard variant can be used with large and medium size
        variant: forcedVariant, badgeContent: badgeProps.badgeContent, children: avatar }))) : (avatar);
};
export default Avatar;
