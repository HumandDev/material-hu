import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconAlertCircle, IconX, IconChevronDown, IconCheck, } from '@tabler/icons-react';
import { alpha, Stack, Typography } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { colorPalette } from '../../theme/hugo/colors';
const InputPhone = ({ defaultCountry = 'AR', value, onChange, disabled, fullWidth = true, maxRows, minRows, placeholder, size, label, autoFocus, ariaLabel, variant = 'outlined', onKeyDown, onPaste, inputProps, sx, margin, onClick, helperText, error, preferredCountries = ['AR', 'MX'], valid = false, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
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
            label: {
                color: (_d = colorPalette.textColors) === null || _d === void 0 ? void 0 : _d.errorText,
            },
            helperText: {
                color: (_e = colorPalette.textColors) === null || _e === void 0 ? void 0 : _e.errorText,
                icon: _jsx(IconAlertCircle, { size: 16 }),
                marginLeft: '17px',
            },
        },
        valid: {
            phoneInputIcon: {
                display: 'flex',
                color: (_f = colorPalette.textColors) === null || _f === void 0 ? void 0 : _f.successText,
                clickable: false,
                icon: _jsx(IconCheck, { size: 20 }),
            },
            border: (_g = colorPalette.graphics) === null || _g === void 0 ? void 0 : _g.successText,
            focusedBorder: (_h = colorPalette.graphics) === null || _h === void 0 ? void 0 : _h.successText,
            label: {
                color: (_j = colorPalette.textColors) === null || _j === void 0 ? void 0 : _j.successText,
            },
            helperText: {
                color: (_k = colorPalette.textColors) === null || _k === void 0 ? void 0 : _k.successText,
                icon: _jsx(IconCheck, { size: 16 }),
                marginLeft: '17px',
            },
        },
        default: {
            phoneInputIcon: {
                display: value ? 'flex' : 'none',
                color: (_l = colorPalette.textColors) === null || _l === void 0 ? void 0 : _l.neutralText,
                clickable: true,
                icon: (_jsx(IconX, { onClick: reset, size: 20 })),
            },
            border: (_m = colorPalette.border) === null || _m === void 0 ? void 0 : _m.neutralBorder,
            focusedBorder: (_o = colorPalette.base) === null || _o === void 0 ? void 0 : _o.blueBrand[400],
            label: {
                color: (_p = colorPalette.textColors) === null || _p === void 0 ? void 0 : _p.neutralText,
            },
            helperText: {
                color: (_q = colorPalette.textColors) === null || _q === void 0 ? void 0 : _q.neutralTextLighter,
                icon: null,
                marginLeft: 0,
            },
        },
    };
    const uiValues = (error && valuesStrategies.error) ||
        (valid && valuesStrategies.valid) ||
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
            display: helperText ? 'flex' : 'none',
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
    return (_jsxs(Stack, { children: [label && (_jsx(Typography, { sx: {
                    mb: 0.5,
                    color: uiValues.label.color,
                    fontWeight: 'fontWeightSemiBold',
                }, children: label })), _jsxs(Stack, { sx: { position: 'relative' }, children: [countryCodeIcon, phoneInputIcon, helperTextIcon, _jsx(MuiTelInput, { value: value, onChange: handleChange, disableFormatting: true, defaultCountry: defaultCountry, preferredCountries: preferredCountries, error: error, size: size, disabled: disabled, fullWidth: fullWidth, maxRows: maxRows, minRows: minRows, placeholder: placeholder, autoFocus: autoFocus, "aria-label": ariaLabel, forceCallingCode: true, variant: variant, onKeyDown: onKeyDown, onPaste: onPaste, margin: margin, onClick: onClick, inputProps: inputProps, sx: Object.assign(Object.assign({}, sx), { '&.MuiFormControl-root > div': {
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
                            } }), helperText: helperText })] })] }));
};
export default InputPhone;
