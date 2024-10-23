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
import { jsx as _jsx } from "react/jsx-runtime";
import DatePicker from './DatePicker';
import { Controller } from 'react-hook-form';
const FormDatePicker = ({ name, inputProps, rules }) => {
    return (_jsx(Controller, { render: (_a) => {
            var _b = _a.field, { ref, onBlur } = _b, field = __rest(_b, ["ref", "onBlur"]), { fieldState: { error } } = _a;
            return (_jsx(DatePicker, Object.assign({}, field, inputProps, { inputRef: ref, error: !!error, errorText: error === null || error === void 0 ? void 0 : error.message })));
        }, name: name, rules: rules }));
};
export default FormDatePicker;
