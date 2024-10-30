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
import RadioButton from './RadioButton';
const FormRadioButton = ({ name, radioButtonProps, rules }) => {
    return (_jsx(Controller, { name: name, rules: rules, render: (_a) => {
            var _b = _a.field, { value, ref } = _b, field = __rest(_b, ["value", "ref"]), { fieldState: { error } } = _a;
            return (_jsx(RadioButton, Object.assign({ isActive: Boolean(value) }, field, radioButtonProps, { inputRef: ref, error: !!error })));
        } }));
};
export default FormRadioButton;
