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
import { FormControl } from '@mui/material';
import CustomLabel from './CustomLabel';
import CustomDatePicker from './CustomDatePicker';
const DatePicker = (_a) => {
    var { sx = {}, label, value, helperText, errorText, onChange, inputRef, error, fullWidth = true, disabled } = _a, props = __rest(_a, ["sx", "label", "value", "helperText", "errorText", "onChange", "inputRef", "error", "fullWidth", "disabled"]);
    return (_jsxs(FormControl, { sx: sx, error: error, fullWidth: fullWidth, disabled: disabled, children: [_jsx(CustomLabel, { label: label }), _jsx(CustomDatePicker, Object.assign({ value: value, onChange: onChange, inputRef: inputRef, helperText: error ? errorText : helperText, disabled: disabled }, props))] }));
};
export default DatePicker;
