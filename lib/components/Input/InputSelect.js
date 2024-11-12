import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl } from '@mui/material';
import CustomLabel from './CustomLabel';
import CustomHelperText from './CustomHelperText';
import CustomSelect from './CustomSelect';
const InputSelect = ({ sx = {}, label, value, helperText, errorText, onChange, placeholder, inputRef, error, fullWidth = true, options, disabled, }) => {
    return (_jsxs(FormControl, { sx: sx, error: error, fullWidth: fullWidth, disabled: disabled, children: [_jsx(CustomLabel, { label: label }), _jsx(CustomSelect, { value: value, onChange: onChange, inputRef: inputRef, placeholder: placeholder, options: options }), _jsx(CustomHelperText, { helperText: error ? errorText : helperText, value: value })] }));
};
export default InputSelect;
