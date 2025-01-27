import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconAlertCircle, IconX, IconChevronDown, IconCheck, } from '@tabler/icons-react';
import { Stack, Typography } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { colorPalette } from '../../theme/hugo/colors';
const InputPhone = ({ defaultCountry = 'AR', value, onChange, disabled, fullWidth = true, maxRows, minRows, placeholder, size, label, autoFocus, ariaLabel, variant = 'outlined', onKeyDown, onPaste, inputProps, sx, margin, onClick, helperText, error, preferredCountries = ['AR', 'MX'], valid = false, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const handleChange = (newValue, country) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue, country === null || country === void 0 ? void 0 : country.countryCallingCode);
    };
    const reset = () => handleChange('', {});
    const valuesStrategies = {
        error: {
            phoneInputIcon: {
                color: (_a = colorPalette.textColors) === null || _a === void 0 ? void 0 : _a.errorText,
                clickable: false,
                icon: _jsx(IconAlertCircle, { size: 20 }),
            },
            border: (_b = colorPalette.graphics) === null || _b === void 0 ? void 0 : _b.errorText,
            focusedBorder: (_c = colorPalette.graphics) === null || _c === void 0 ? void 0 : _c.errorText,
            label: {
                color: (_d = colorPalette.textColors) === null || _d === void 0 ? void 0 : _d.errorText,
            },
        },
        valid: {
            phoneInputIcon: {
                color: (_e = colorPalette.textColors) === null || _e === void 0 ? void 0 : _e.successText,
                clickable: false,
                icon: _jsx(IconCheck, { size: 20 }),
            },
            border: (_f = colorPalette.graphics) === null || _f === void 0 ? void 0 : _f.successText,
            focusedBorder: (_g = colorPalette.graphics) === null || _g === void 0 ? void 0 : _g.successText,
            label: {
                color: (_h = colorPalette.textColors) === null || _h === void 0 ? void 0 : _h.successText,
            },
        },
        default: {
            phoneInputIcon: {
                color: (_j = colorPalette.textColors) === null || _j === void 0 ? void 0 : _j.neutralText,
                clickable: true,
                icon: (_jsx(IconX, { onClick: reset, size: 20 })),
            },
            border: (_k = colorPalette.border) === null || _k === void 0 ? void 0 : _k.neutralBorder,
            focusedBorder: (_l = colorPalette.base) === null || _l === void 0 ? void 0 : _l.blueBrand[400],
            label: {
                color: (_m = colorPalette.textColors) === null || _m === void 0 ? void 0 : _m.neutralText,
            },
        },
    };
    const values = (error && valuesStrategies.error) ||
        (valid && valuesStrategies.valid) ||
        valuesStrategies.default;
    const countryCodeIcon = (_jsx(Stack, { sx: {
            position: 'absolute',
            top: 8,
            left: 32,
        }, children: _jsx(IconChevronDown, {}) }));
    const phoneInputIcon = (_jsx(Stack, { sx: {
            position: 'absolute',
            top: 8,
            right: 8,
            width: 24,
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            color: values.phoneInputIcon.color,
            cursor: values.phoneInputIcon.clickable ? 'pointer' : 'inherit',
        }, children: values.phoneInputIcon.icon }));
    return (_jsxs(Stack, { children: [label && (_jsx(Typography, { sx: {
                    mb: 0.5,
                    color: values.label.color,
                    fontWeight: 'fontWeightSemiBold',
                }, children: label })), _jsxs(Stack, { sx: { position: 'relative' }, children: [countryCodeIcon, phoneInputIcon, _jsx(MuiTelInput, { value: value, onChange: handleChange, disableFormatting: true, defaultCountry: defaultCountry, preferredCountries: preferredCountries, error: error, size: size, disabled: disabled, fullWidth: fullWidth, maxRows: maxRows, minRows: minRows, placeholder: placeholder, autoFocus: autoFocus, "aria-label": ariaLabel, forceCallingCode: true, variant: variant, onKeyDown: onKeyDown, onPaste: onPaste, margin: margin, onClick: onClick, inputProps: inputProps, sx: Object.assign(Object.assign({}, sx), { '&.MuiFormControl-root > div': {
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
                                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                    },
                                    '&:focus-visible,&[aria-expanded="true"]': {
                                        borderColor: values.focusedBorder,
                                        boxShadow: 'none',
                                    },
                                    border: '1px solid',
                                    borderColor: values.border,
                                    borderRadius: 1,
                                },
                            }, '& .MuiFormHelperText-root': {
                                marginLeft: 0,
                            } }), helperText: helperText })] })] }));
};
export default InputPhone;
