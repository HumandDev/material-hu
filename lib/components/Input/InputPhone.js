import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconAlertCircle, IconX, IconChevronDown } from '@tabler/icons-react';
import { Stack, Typography } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
const InputPhone = ({ defaultCountry = 'AR', value, onChange, disabled, fullWidth = true, maxRows, minRows, placeholder, size, label, autoFocus, ariaLabel, variant = 'outlined', onKeyDown, onPaste, inputProps, sx, margin, onClick, helperText, error, }) => {
    const handleChange = (newValue, country) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue, country === null || country === void 0 ? void 0 : country.countryCallingCode);
    };
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
            color: theme => {
                var _a, _b;
                return error
                    ? (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.errorText
                    : (_b = theme.palette.textColors) === null || _b === void 0 ? void 0 : _b.neutralText;
            },
        }, children: error ? (_jsx(IconAlertCircle, { size: 20 })) : (_jsx(IconX, { onClick: () => {
                alert('asdasd');
            }, size: 20 })) }));
    return (_jsxs(Stack, { children: [label && (_jsx(Typography, { sx: {
                    mb: 0.5,
                    color: theme => {
                        var _a, _b;
                        return error
                            ? (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.errorText
                            : (_b = theme.palette.textColors) === null || _b === void 0 ? void 0 : _b.neutralTextDisabled;
                    },
                    fontWeight: 'fontWeightSemiBold',
                }, children: label })), _jsxs(Stack, { sx: {
                    position: 'relative',
                }, children: [countryCodeIcon, phoneInputIcon, _jsx(MuiTelInput, { value: value, onChange: handleChange, disableFormatting: true, defaultCountry: defaultCountry, preferredCountries: ['AR', 'MX'], error: error, size: size, disabled: disabled, fullWidth: fullWidth, maxRows: maxRows, minRows: minRows, placeholder: placeholder, autoFocus: autoFocus, "aria-label": ariaLabel, forceCallingCode: true, variant: variant, onKeyDown: onKeyDown, onPaste: onPaste, margin: margin, onClick: onClick, inputProps: inputProps, sx: Object.assign(Object.assign({}, sx), { '&.MuiFormControl-root > div': {
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
                                        borderColor: theme => {
                                            var _a;
                                            return error
                                                ? (_a = theme.palette.graphics) === null || _a === void 0 ? void 0 : _a.errorText
                                                : theme.palette.primary.main;
                                        },
                                        boxShadow: 'none',
                                    },
                                    border: '1px solid',
                                    borderColor: theme => {
                                        var _a, _b;
                                        return error
                                            ? (_a = theme.palette.graphics) === null || _a === void 0 ? void 0 : _a.errorText
                                            : (_b = theme.palette.border) === null || _b === void 0 ? void 0 : _b.neutralBorder;
                                    },
                                    borderRadius: 1,
                                },
                            }, '& .MuiFormHelperText-root': {
                                marginLeft: 0,
                            } }), helperText: helperText })] })] }));
};
export default InputPhone;
