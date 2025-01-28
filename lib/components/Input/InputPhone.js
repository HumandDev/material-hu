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
import { IconAlertCircle, IconX, IconChevronDown, IconCheck, } from '@tabler/icons-react';
import { alpha, Stack } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { colorPalette } from '../../theme/hugo/colors';
import CustomLabel from './CustomLabel';
const InputPhone = props => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const { label, onChange, success, fullWidth = true, disabled = false, sx = {}, defaultCountry = 'AR', preferredCountries = ['AR', 'MX'] } = props, telInputProps = __rest(props, ["label", "onChange", "success", "fullWidth", "disabled", "sx", "defaultCountry", "preferredCountries"]);
    const handleChange = (newValue, country) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue, country === null || country === void 0 ? void 0 : country.countryCallingCode);
    };
    const reset = () => handleChange('', {});
    const valuesStrategies = {
        error: {
            phoneInputIcon: {
                display: 'flex',
                color: (_a = colorPalette.textColors) === null || _a === void 0 ? void 0 : _a.errorText,
                clickable: false,
                icon: _jsx(IconAlertCircle, { size: 20 }),
            },
            border: (_b = colorPalette.graphics) === null || _b === void 0 ? void 0 : _b.errorText,
            focusedBorder: (_c = colorPalette.graphics) === null || _c === void 0 ? void 0 : _c.errorText,
            helperText: {
                color: (_d = colorPalette.textColors) === null || _d === void 0 ? void 0 : _d.errorText,
                icon: _jsx(IconAlertCircle, { size: 16 }),
                marginLeft: '17px',
            },
        },
        success: {
            phoneInputIcon: {
                display: 'flex',
                color: (_e = colorPalette.textColors) === null || _e === void 0 ? void 0 : _e.successText,
                clickable: false,
                icon: _jsx(IconCheck, { size: 20 }),
            },
            border: (_f = colorPalette.graphics) === null || _f === void 0 ? void 0 : _f.successText,
            focusedBorder: (_g = colorPalette.graphics) === null || _g === void 0 ? void 0 : _g.successText,
            helperText: {
                color: (_h = colorPalette.textColors) === null || _h === void 0 ? void 0 : _h.successText,
                icon: _jsx(IconCheck, { size: 16 }),
                marginLeft: '17px',
            },
        },
        default: {
            phoneInputIcon: {
                display: telInputProps.value ? 'flex' : 'none',
                color: (_j = colorPalette.textColors) === null || _j === void 0 ? void 0 : _j.neutralText,
                clickable: true,
                icon: (_jsx(IconX, { onClick: reset, size: 20 })),
            },
            border: (_k = colorPalette.border) === null || _k === void 0 ? void 0 : _k.neutralBorder,
            focusedBorder: (_l = colorPalette.base) === null || _l === void 0 ? void 0 : _l.blueBrand[400],
            helperText: {
                color: (_m = colorPalette.textColors) === null || _m === void 0 ? void 0 : _m.neutralTextLighter,
                icon: null,
                marginLeft: 0,
            },
        },
    };
    const uiValues = (telInputProps.error && valuesStrategies.error) ||
        (success && valuesStrategies.success) ||
        valuesStrategies.default;
    const countryCodeIcon = (_jsx(Stack, { sx: {
            position: 'absolute',
            top: 8,
            left: 32,
        }, children: _jsx(IconChevronDown, {}) }));
    const phoneInputIcon = (_jsx(Stack, { sx: {
            display: uiValues.phoneInputIcon.display,
            position: 'absolute',
            top: 8,
            right: 8,
            width: 24,
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            color: uiValues.phoneInputIcon.color,
            cursor: uiValues.phoneInputIcon.clickable ? 'pointer' : 'inherit',
        }, children: uiValues.phoneInputIcon.icon }));
    const helperTextIcon = uiValues.helperText.icon && (_jsx(Stack, { sx: {
            display: telInputProps.helperText ? 'flex' : 'none',
            position: 'absolute',
            bottom: 3,
            left: 0,
            width: 16,
            height: 16,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            color: uiValues.helperText.color,
            cursor: 'inherit',
        }, children: uiValues.helperText.icon }));
    return (_jsxs(Stack, { children: [label && (_jsx(Stack, { sx: {
                    '& .MuiTypography-root': {
                        color: uiValues.helperText.color,
                    },
                }, children: _jsx(CustomLabel, { label: label, success: success }) })), _jsxs(Stack, { sx: { position: 'relative' }, children: [countryCodeIcon, phoneInputIcon, helperTextIcon, _jsx(MuiTelInput, Object.assign({}, telInputProps, { onChange: handleChange, defaultCountry: defaultCountry, disableFormatting: true, preferredCountries: preferredCountries, disabled: disabled, fullWidth: fullWidth, forceCallingCode: true, sx: Object.assign(Object.assign({}, sx), { '&.MuiFormControl-root > div': {
                                p: 0,
                                '& fieldset': {
                                    '&,&:focus-visible,&:hover': {
                                        border: 'none',
                                        outline: 'none',
                                    },
                                },
                                // country code input
                                '.MuiTelInput-IconButton': {
                                    p: 1.5,
                                    pr: '32px', // make space for IconChevronDown
                                },
                                // phone input
                                '& input': {
                                    p: 1,
                                },
                                // country + phone inputs
                                '.MuiInputAdornment-root .MuiTelInput-IconButton, & input': {
                                    '&.Mui-disabled': {
                                        backgroundColor: alpha(colorPalette.hugoBackground.neutralBgTransparent, 0.5),
                                    },
                                    '&:focus-visible,&[aria-expanded="true"]': {
                                        borderColor: uiValues.focusedBorder,
                                        boxShadow: 'none',
                                    },
                                    border: '1px solid',
                                    borderColor: uiValues.border,
                                    borderRadius: 1,
                                },
                            }, '& .MuiFormHelperText-root': {
                                marginLeft: uiValues.helperText.marginLeft,
                                color: uiValues.helperText.color,
                            } }) }))] })] }));
};
export default InputPhone;
