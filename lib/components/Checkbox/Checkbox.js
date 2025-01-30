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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox as MuiCheckbox, Stack, Typography, useTheme, } from '@mui/material';
import { CheckBox as IconCheckbox, IndeterminateCheckBoxOutlined as IconIndeterminateCheckBox, } from '@mui/icons-material';
import { IconSquare } from '@tabler/icons-react';
const CheckboxInput = (_a) => {
    var _b, _c, _d;
    var { error, primaryColor, hoverBackgroundColor } = _a, props = __rest(_a, ["error", "primaryColor", "hoverBackgroundColor"]);
    const { palette } = useTheme();
    return (_jsx(MuiCheckbox, Object.assign({ size: "small", icon: _jsx(IconSquare, { stroke: 1 }), 
        // Doc says that fontSize defaults to medium, but when it's applied the layout changes :shrug:
        checkedIcon: _jsx(IconCheckbox, { fontSize: "medium" }), indeterminateIcon: _jsx(IconIndeterminateCheckBox, { fontSize: "medium" }), sx: Object.assign(Object.assign({ color: (_b = palette.textColors) === null || _b === void 0 ? void 0 : _b.neutralTextLighter, height: '24px', padding: 0 }, (error && { color: (_c = palette.graphics) === null || _c === void 0 ? void 0 : _c.errorText })), { '&:hover': {
                color: primaryColor,
                // We have have 2 different backgrounds: hover (inside checkbox) and focus (overflows a little)
                ':after': {
                    backgroundColor: hoverBackgroundColor,
                    borderRadius: 0.5,
                    content: "''",
                    height: '20px',
                    position: 'absolute',
                    width: '20px',
                },
            }, '&:focus-within': {
                color: primaryColor,
                ':after': {
                    backgroundColor: hoverBackgroundColor,
                    borderRadius: '50%',
                    content: "''",
                    height: '24px',
                    position: 'absolute',
                    width: '24px',
                },
            }, '&.Mui-checked': {
                color: primaryColor,
                '&:hover': {
                    color: primaryColor,
                    ':after': {
                        background: `radial-gradient(circle, transparent 50%, ${hoverBackgroundColor} 40%)`,
                    },
                },
                '&:focus-within': {
                    color: primaryColor,
                    ':after': {
                        background: `radial-gradient(circle, transparent 50%, ${hoverBackgroundColor} 40%)`,
                    },
                },
            }, '&.Mui-disabled': {
                color: (_d = palette.shadows) === null || _d === void 0 ? void 0 : _d['8dp'],
            }, 
            // Without these the stacking order would hide the hover and focus style on web and admin
            'input[type="checkbox"]': {
                zIndex: 2,
            }, '.tabler-icon, .MuiSvgIcon-root': {
                zIndex: 1,
            } }) }, props, { disableRipple: true })));
};
const Checkbox = (_a) => {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var { description, error = false, extraInfo, label } = _a, props = __rest(_a, ["description", "error", "extraInfo", "label"]);
    const { palette } = useTheme();
    const primaryColor = error
        ? (_b = palette.graphics) === null || _b === void 0 ? void 0 : _b.errorText
        : (_c = palette.buttons) === null || _c === void 0 ? void 0 : _c.buttonPrimaryEnabled;
    const hoverBackgroundColor = error
        ? (_d = palette.hugoBackground) === null || _d === void 0 ? void 0 : _d.errorBg
        : (_e = palette.border) === null || _e === void 0 ? void 0 : _e.primaryBorder;
    // In case only the checkbox is needed, eg. in a table
    if (!label && !description && !extraInfo) {
        return (_jsx(CheckboxInput, Object.assign({ error: error, primaryColor: primaryColor, hoverBackgroundColor: hoverBackgroundColor }, props)));
    }
    return (_jsxs(Stack, { sx: { flexDirection: 'row' }, children: [_jsx(CheckboxInput, Object.assign({ error: error, primaryColor: primaryColor, hoverBackgroundColor: hoverBackgroundColor }, props)), _jsxs(Stack, { sx: Object.assign({ pl: 0.5 }, (props.disabled && {
                    '.MuiTypography-root': {
                        color: (_f = palette.textColors) === null || _f === void 0 ? void 0 : _f.neutralTextDisabled,
                    },
                })), children: [label && (_jsx(Typography, { variant: "globalS", sx: Object.assign({ lineHeight: '24px' }, (error && { color: (_g = palette.textColors) === null || _g === void 0 ? void 0 : _g.errorText })), children: label })), description && (_jsx(Typography, { variant: "globalXS", sx: { color: (_h = palette.textColors) === null || _h === void 0 ? void 0 : _h.neutralTextLighter }, children: description }))] }), extraInfo && (_jsx(Typography, { variant: "globalXS", sx: {
                    color: (_j = palette.textColors) === null || _j === void 0 ? void 0 : _j.neutralTextLighter,
                    ml: 3.5,
                }, children: extraInfo }))] }));
};
export default Checkbox;
