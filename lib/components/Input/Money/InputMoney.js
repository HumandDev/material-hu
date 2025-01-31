import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from '@mui/material';
import InputClassic from '../InputClassic';
const InputMoney = ({ sx = {}, label, value, helperText, errorText, onChange, placeholder, inputRef, error, success, maxLength = 100, hasCounter = false, fullWidth = true, disabled = false, currency = '$', transform, }) => {
    return (_jsx(InputClassic, { disabled: disabled, error: error, errorText: errorText, fullWidth: fullWidth, hasCounter: hasCounter, helperText: helperText, inputRef: inputRef, label: label, maxLength: maxLength, onChange: inputValue => {
            onChange === null || onChange === void 0 ? void 0 : onChange((transform === null || transform === void 0 ? void 0 : transform.input) ? transform.input(inputValue) : inputValue);
        }, placeholder: placeholder, success: success, sx: sx, value: (transform === null || transform === void 0 ? void 0 : transform.output) ? transform.output(value) : value, startAdornment: 
        // TODO: Replace with currency selector.
        _jsx(Typography, { fontWeight: "fontWeightSemiBold", sx: {
                mr: 1,
            }, children: currency }) }));
};
export default InputMoney;
