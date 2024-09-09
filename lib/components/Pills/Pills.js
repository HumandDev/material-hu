import { jsx as _jsx } from "react/jsx-runtime";
import { Chip, Typography, useTheme } from '@mui/material';
import { IconAlertSquareRounded, IconBulb, IconCheck, IconExclamationCircle, IconInfoCircle, IconInfoTriangle, } from '@tabler/icons-react';
const getPillProps = (type, palette) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    switch (type) {
        case 'success':
            return {
                icon: IconCheck,
                backgroundColor: (_a = palette.base) === null || _a === void 0 ? void 0 : _a.green[100],
                borderColor: (_b = palette.base) === null || _b === void 0 ? void 0 : _b.green[200],
                fontColor: (_c = palette.base) === null || _c === void 0 ? void 0 : _c.green[800],
            };
        case 'warning':
            return {
                icon: IconInfoTriangle,
                backgroundColor: (_d = palette.base) === null || _d === void 0 ? void 0 : _d.yellow[100],
                borderColor: (_e = palette.base) === null || _e === void 0 ? void 0 : _e.yellow[200],
                fontColor: (_f = palette.base) === null || _f === void 0 ? void 0 : _f.yellow[800],
            };
        case 'info':
            return {
                icon: IconInfoCircle,
                backgroundColor: (_g = palette.base) === null || _g === void 0 ? void 0 : _g.lightBlue[100],
                borderColor: (_h = palette.base) === null || _h === void 0 ? void 0 : _h.lightBlue[200],
                fontColor: (_j = palette.base) === null || _j === void 0 ? void 0 : _j.lightBlue[800],
            };
        case 'highlight':
            return {
                icon: IconBulb,
                backgroundColor: (_k = palette.base) === null || _k === void 0 ? void 0 : _k.lilac[100],
                borderColor: (_l = palette.base) === null || _l === void 0 ? void 0 : _l.lilac[200],
                fontColor: (_m = palette.base) === null || _m === void 0 ? void 0 : _m.lilac[800],
            };
        case 'neutral':
            return {
                icon: IconAlertSquareRounded,
                backgroundColor: (_o = palette.base) === null || _o === void 0 ? void 0 : _o.white,
                borderColor: (_p = palette.base) === null || _p === void 0 ? void 0 : _p.grey[300],
                fontColor: (_q = palette.base) === null || _q === void 0 ? void 0 : _q.grey[600],
            };
        case 'disabled':
            return {
                backgroundColor: (_r = palette.base) === null || _r === void 0 ? void 0 : _r.grey[200],
                borderColor: (_s = palette.base) === null || _s === void 0 ? void 0 : _s.grey[300],
                fontColor: (_t = palette.base) === null || _t === void 0 ? void 0 : _t.grey[600],
            };
        case 'error':
        default:
            return {
                icon: IconExclamationCircle,
                backgroundColor: (_u = palette.base) === null || _u === void 0 ? void 0 : _u.red[100],
                borderColor: (_v = palette.base) === null || _v === void 0 ? void 0 : _v.red[200],
                fontColor: (_w = palette.base) === null || _w === void 0 ? void 0 : _w.red[800],
            };
    }
};
const Pills = ({ label, type = 'default', size = 'medium', hasIcon = true, sx, }) => {
    const theme = useTheme();
    const pillProps = getPillProps(type, theme.palette);
    const isSmall = size === 'small';
    return (_jsx(Chip, { label: _jsx(Typography
        // variant: isSmall ? 'globalXXS' : 'globalXS',
        // fontWeight: 'fontWeightSemiBold',
        , { 
            // variant: isSmall ? 'globalXXS' : 'globalXS',
            // fontWeight: 'fontWeightSemiBold',
            sx: Object.assign({ margin: 0, padding: 0, lineHeight: 'normal', color: pillProps.fontColor, fontSize: isSmall ? '12px' : '14px', fontWeight: 500 }, sx), children: label }), size: size, icon: hasIcon && pillProps.icon ? (_jsx(pillProps.icon, { style: {
                color: pillProps.fontColor,
                marginLeft: '0',
                marginRight: '4px',
                fontSize: '14px',
            }, width: "16px" })) : undefined, sx: {
            border: `1px solid ${pillProps.borderColor}`,
            backgroundColor: `${pillProps.backgroundColor}`,
            borderRadius: 2,
            px: isSmall ? 1 : 1.5,
            py: isSmall ? 0.5 : 1,
            '& .MuiChip-label': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        } }));
};
export default Pills;
