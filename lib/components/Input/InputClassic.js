import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl } from '@mui/material';
import CustomLabel from './CustomLabel';
import CustomInput from './CustomInput';
import CustomHelperText from './CustomHelperText';
const InputClassic = ({ sx = {}, label, value, helperText, errorText, onChange, placeholder, inputRef, error, success, maxLength = 100, hasCounter = true, fullWidth = true, }) => {
    return (_jsxs(FormControl, { sx: sx, error: error, fullWidth: fullWidth, children: [_jsx(CustomLabel, { label: label, success: success }), _jsx(CustomInput, { value: value, onChange: onChange, placeholder: placeholder, inputRef: inputRef, maxLength: maxLength, success: success }), _jsx(CustomHelperText, { helperText: error ? errorText : helperText, hasCounter: hasCounter, maxLength: maxLength, value: value, success: success })] }));
};
export default InputClassic;
