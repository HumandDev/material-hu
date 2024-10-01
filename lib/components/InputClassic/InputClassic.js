import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, InputAdornment, OutlinedInput, Typography, useFormControl, FormHelperText, useTheme, Stack, } from '@mui/material';
import { IconAlertCircle, IconExclamationCircle, IconX, } from '@tabler/icons-react';
const CustomLabel = ({ label }) => {
    const { error } = useFormControl() || {};
    if (!label)
        return null;
    return (_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", sx: {
            color: theme => {
                var _a, _b;
                return error
                    ? (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.errorText
                    : (_b = theme.palette.textColors) === null || _b === void 0 ? void 0 : _b.neutralText;
            },
            mb: 0.5,
        }, children: label }));
};
const CustomHelperText = ({ helperText, hasCounter, maxLength, value }) => {
    const { error, focused } = useFormControl() || {};
    const showCounter = hasCounter && (focused || error);
    return (_jsx(FormHelperText, { sx: {
            mx: 0,
            mt: 0.5,
            color: theme => { var _a; return (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.neutralTextLighter; },
            '&.Mui-error': {
                color: theme => { var _a; return (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.errorText; },
            },
        }, children: _jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 0.5 }, children: [error && _jsx(IconExclamationCircle, { size: 13 }), _jsx(Typography, { variant: "globalS", children: helperText }), showCounter && (_jsxs(Typography, { variant: "globalS", sx: { ml: 'auto' }, children: [value.length, "/", maxLength] }))] }) }));
};
const CustomInput = ({ value, onChange, placeholder, inputRef, maxLength }) => {
    var _a, _b, _c;
    const { focused, error } = useFormControl() || {};
    const hastEndAdornment = error || (focused && value.length > 0);
    const theme = useTheme();
    const getBorderColor = () => {
        var _a, _b, _c;
        if (focused) {
            return (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[400];
        }
        if (error) {
            return (_b = theme.palette.graphics) === null || _b === void 0 ? void 0 : _b.errorText;
        }
        return (_c = theme.palette.border) === null || _c === void 0 ? void 0 : _c.neutralBorder;
    };
    return (_jsx(OutlinedInput, { inputRef: inputRef, inputProps: { maxLength: maxLength }, endAdornment: hastEndAdornment && (_jsxs(InputAdornment, { position: "end", children: [focused && (_jsx(IconX, { size: 20, onMouseDown: e => {
                        onChange === null || onChange === void 0 ? void 0 : onChange('');
                        e.preventDefault();
                    }, style: { cursor: 'pointer' } })), error && (_jsx(IconAlertCircle, { size: 20, color: (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.errorText }))] })), placeholder: placeholder, value: value, onChange: e => onChange(e.target.value), sx: {
            '& fieldset': {
                borderColor: getBorderColor(),
                borderWidth: '1px !important',
            },
            input: {
                '&::placeholder': {
                    color: (_b = theme.palette.textColors) === null || _b === void 0 ? void 0 : _b.neutralTextLighter,
                    opacity: 1,
                },
                color: (_c = theme.palette.textColors) === null || _c === void 0 ? void 0 : _c.neutralText,
            },
        } }));
};
const InputClassic = ({ sx = {}, label, value, helperText, errorText, onChange, placeholder, inputRef, error, maxLength = 100, hasCounter = true, fullWidth = true, }) => {
    return (_jsxs(FormControl, { sx: sx, error: error, fullWidth: fullWidth, children: [_jsx(CustomLabel, { label: label }), _jsx(CustomInput, { value: value, onChange: onChange, placeholder: placeholder, inputRef: inputRef, maxLength: maxLength }), _jsx(CustomHelperText, { helperText: error ? errorText : helperText, hasCounter: hasCounter, maxLength: maxLength, value: value })] }));
};
export default InputClassic;
