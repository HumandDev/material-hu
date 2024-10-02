import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InputAdornment, OutlinedInput, useFormControl, useTheme, } from '@mui/material';
import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons-react';
const CustomInput = ({ value, onChange, placeholder, inputRef, maxLength, success }) => {
    var _a, _b, _c, _d;
    const { focused, error } = useFormControl() || {};
    const hastEndAdornment = success || error || (focused && value.length > 0);
    const theme = useTheme();
    const getBorderColor = () => {
        var _a, _b, _c, _d;
        if (focused) {
            return (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[400];
        }
        if (error) {
            return (_b = theme.palette.graphics) === null || _b === void 0 ? void 0 : _b.errorText;
        }
        if (success) {
            return (_c = theme.palette.graphics) === null || _c === void 0 ? void 0 : _c.successText;
        }
        return (_d = theme.palette.border) === null || _d === void 0 ? void 0 : _d.neutralBorder;
    };
    return (_jsx(OutlinedInput, { inputRef: inputRef, inputProps: { maxLength: maxLength }, endAdornment: hastEndAdornment && (_jsxs(InputAdornment, { position: "end", children: [focused && (_jsx(IconX, { size: 20, onMouseDown: e => {
                        onChange === null || onChange === void 0 ? void 0 : onChange('');
                        e.preventDefault();
                    }, style: { cursor: 'pointer' } })), error && (_jsx(IconAlertCircle, { size: 20, color: (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.errorText })), success && (_jsx(IconCheck, { size: 20, color: (_b = theme.palette.textColors) === null || _b === void 0 ? void 0 : _b.successText }))] })), placeholder: placeholder, value: value, onChange: e => onChange(e.target.value), sx: {
            '& fieldset': {
                borderColor: getBorderColor(),
                borderWidth: '1px !important',
            },
            input: {
                '&::placeholder': {
                    color: (_c = theme.palette.textColors) === null || _c === void 0 ? void 0 : _c.neutralTextLighter,
                    opacity: 1,
                },
                color: (_d = theme.palette.textColors) === null || _d === void 0 ? void 0 : _d.neutralText,
            },
        } }));
};
export default CustomInput;
