import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InputAdornment, OutlinedInput, useFormControl, useTheme, } from '@mui/material';
import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons-react';
import { getBorderColor } from './utils';
const CustomInput = ({ value, onChange, placeholder, inputRef, maxLength, success, multiline = false, }) => {
    var _a, _b, _c, _d;
    const { focused, error } = useFormControl() || {};
    const hastEndAdornment = success || error || (focused && value.length > 0);
    const theme = useTheme();
    return (_jsx(OutlinedInput, { inputRef: inputRef, inputProps: { maxLength }, multiline: multiline, minRows: 5, endAdornment: hastEndAdornment && (_jsxs(InputAdornment, { sx: { alignSelf: multiline ? 'flex-start' : 'center' }, position: "end", children: [focused && (_jsx(IconX, { size: 20, onMouseDown: e => {
                        onChange === null || onChange === void 0 ? void 0 : onChange('');
                        e.preventDefault();
                    }, style: { cursor: 'pointer' } })), error && (_jsx(IconAlertCircle, { size: 20, color: (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.errorText })), success && (_jsx(IconCheck, { size: 20, color: (_b = theme.palette.textColors) === null || _b === void 0 ? void 0 : _b.successText }))] })), placeholder: placeholder, value: value, onChange: e => onChange(e.target.value), sx: {
            '& fieldset': {
                borderColor: getBorderColor(theme, focused, error, success),
                borderWidth: '1px !important',
            },
            'input, textarea': {
                '&::placeholder': {
                    color: (_c = theme.palette.textColors) === null || _c === void 0 ? void 0 : _c.neutralTextLighter,
                    opacity: 1,
                },
                color: (_d = theme.palette.textColors) === null || _d === void 0 ? void 0 : _d.neutralText,
            },
        } }));
};
export default CustomInput;
