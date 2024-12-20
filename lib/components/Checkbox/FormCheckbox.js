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
import { Controller } from 'react-hook-form';
import Checkbox from './Checkbox';
const FormCheckbox = ({ name, checkBoxProps, rules }) => {
    return (_jsx(Controller, { render: (_a) => {
            var _b = _a.field, { value, ref } = _b, field = __rest(_b, ["value", "ref"]), { fieldState: { error } } = _a;
            return (_jsx(Checkbox, Object.assign({ checked: Boolean(value) }, field, checkBoxProps, { inputRef: ref, error: !!error })));
        }, name: name, rules: rules }));
};
export default FormCheckbox;
