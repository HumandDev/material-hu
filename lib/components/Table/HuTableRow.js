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
import { TableRow, useTheme } from '@mui/material';
import { colorPalette } from '../../theme/hugo/colors';
const getBackgroundColor = (headerRow, selected) => {
    var _a, _b, _c, _d, _e;
    if (headerRow) {
        return {
            backgroundColor: (_a = colorPalette.hugoBackground) === null || _a === void 0 ? void 0 : _a.neutralBgSecondary,
            '&:hover': {
                backgroundColor: (_b = colorPalette.hugoBackground) === null || _b === void 0 ? void 0 : _b.neutralBgSecondary,
            },
        };
    }
    if (selected == null) {
        return {
            backgroundColor: colorPalette.hugoBackground.neutralBgTerciary,
            '&:hover': {
                backgroundColor: colorPalette.hugoBackground.neutralBgTerciary,
            },
        };
    }
    if (selected) {
        return {
            backgroundColor: (_c = colorPalette.buttons) === null || _c === void 0 ? void 0 : _c.buttonSecondaryHover,
            '&:hover': {
                backgroundColor: (_d = colorPalette.buttons) === null || _d === void 0 ? void 0 : _d.buttonSecondaryHover,
            },
        };
    }
    return {
        backgroundColor: colorPalette.hugoBackground.neutralBgTerciary,
        '&:hover': {
            backgroundColor: (_e = theme.palette.buttons) === null || _e === void 0 ? void 0 : _e.buttonTertiaryHover,
        },
    };
};
const TableRowHu = (_a) => {
    var _b;
    var { children, sx, headerRow = false, selected } = _a, props = __rest(_a, ["children", "sx", "headerRow", "selected"]);
    const theme = useTheme();
    const backgroundStyles = getBackgroundColor(headerRow, selected);
    return (_jsx(TableRow, Object.assign({ sx: Object.assign(Object.assign({ borderBottom: `1px solid ${(_b = theme.palette.border) === null || _b === void 0 ? void 0 : _b.neutralBorder}` }, backgroundStyles), sx), selected: selected }, props, { children: children })));
};
export default TableRowHu;
