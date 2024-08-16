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
import { Box, Button, Card, CardActions, CardContent, Typography, useTheme, } from '@mui/material';
import { AddBoxOutlined as AddIcon, Check as CheckIcon, ChevronRight, ErrorOutline as ErrorIcon, InfoOutlined as InfoIcon, WarningAmberRounded as WarningIcon, } from '@mui/icons-material';
const getBadgeProps = (type, palette) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    switch (type) {
        case 'success':
            return {
                icon: CheckIcon,
                backgroundColor: (_a = palette.base) === null || _a === void 0 ? void 0 : _a.green[100],
                borderColor: (_b = palette.base) === null || _b === void 0 ? void 0 : _b.green[200],
                fontColor: (_c = palette.base) === null || _c === void 0 ? void 0 : _c.green[800],
            };
        case 'warning':
            return {
                icon: WarningIcon,
                backgroundColor: (_d = palette.base) === null || _d === void 0 ? void 0 : _d.yellow[100],
                borderColor: (_e = palette.base) === null || _e === void 0 ? void 0 : _e.yellow[200],
                fontColor: (_f = palette.base) === null || _f === void 0 ? void 0 : _f.yellow[800],
            };
        case 'info':
            return {
                icon: InfoIcon,
                backgroundColor: (_g = palette.base) === null || _g === void 0 ? void 0 : _g.lightBlue[100],
                borderColor: (_h = palette.base) === null || _h === void 0 ? void 0 : _h.lightBlue[200],
                fontColor: (_j = palette.base) === null || _j === void 0 ? void 0 : _j.lightBlue[800],
            };
        case 'highlight':
            return {
                icon: AddIcon,
                backgroundColor: (_k = palette.base) === null || _k === void 0 ? void 0 : _k.lilac[100],
                borderColor: (_l = palette.base) === null || _l === void 0 ? void 0 : _l.lilac[200],
                fontColor: (_m = palette.base) === null || _m === void 0 ? void 0 : _m.lilac[800],
            };
        case 'error':
        default:
            return {
                icon: ErrorIcon,
                backgroundColor: (_o = palette.base) === null || _o === void 0 ? void 0 : _o.red[100],
                borderColor: (_p = palette.base) === null || _p === void 0 ? void 0 : _p.red[200],
                fontColor: (_q = palette.base) === null || _q === void 0 ? void 0 : _q.red[800],
            };
    }
};
const getFooterActions = (footer) => {
    if (!footer)
        return null;
    if ('action2' in footer) {
        return (_jsxs(_Fragment, { children: [_jsx(Button, Object.assign({ variant: "text" }, footer.action2, { children: footer.action2.title })), _jsx(Button, Object.assign({ variant: "contained" }, footer.action1, { children: footer.action1.title }))] }));
    }
    else {
        return (_jsxs(_Fragment, { children: [_jsx(Typography, { children: footer.text }), _jsx(Button, Object.assign({ variant: "text" }, footer.action1, { endIcon: _jsx(ChevronRight, { fontSize: "small" }), children: footer.action1.title }))] }));
    }
};
const CardContainer = (_a) => {
    var { badge = undefined, footer = undefined, children } = _a, props = __rest(_a, ["badge", "footer", "children"]);
    const theme = useTheme();
    const badgeProps = badge ? getBadgeProps(badge.type, theme.palette) : null;
    const footerActions = getFooterActions(footer);
    return (_jsxs(Card, { sx: Object.assign({ borderRadius: '16px', width: 328, border: '1px solid #E9E9F4', boxShadow: '-1px 4px 8px 0px #E9E9F4', my: 2 }, props), children: [_jsx(CardContent, { children: children }), footer && (_jsx(CardActions, { sx: {
                    justifyContent: 'space-between',
                    borderTop: '1px solid #E9E9F4',
                    p: '8px 16px 8px 16px',
                }, children: footerActions })), badge && badgeProps && (_jsxs(Box, { sx: {
                    padding: '4px 16px 4px 16px',
                    borderBottomLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '25px',
                    backgroundColor: badgeProps.backgroundColor,
                    border: `1px solid ${badgeProps.borderColor}`,
                }, children: [_jsx(badgeProps.icon, { sx: {
                            color: badgeProps.fontColor,
                            fontSize: 'small',
                            mr: 0.5,
                        } }), _jsx(Typography, { sx: { color: badgeProps.fontColor /*, fontSize: '12px'*/ }, variant: "globalXXS", children: badge.label })] }))] }));
};
export default CardContainer;
