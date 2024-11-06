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
import { Controller, useFormContext } from 'react-hook-form';
import RadioButton from './RadioButton';
const FormRadioButton = ({ name, radioButtonProps, rules, isOnlyOption = false, }) => {
    const { getValues, setValue } = useFormContext();
    const handleOnClick = (onChange, param) => {
        onChange(param);
        if (isOnlyOption) {
            const nameParts = name.split('.');
            const baseRoute = nameParts.slice(0, -1).join('.');
            const currentProperty = nameParts[nameParts.length - 1];
            const baseObject = getValues(baseRoute);
            Object.keys(baseObject).forEach(key => key !== currentProperty && setValue(`${baseRoute}.${key}`, false));
        }
    };
    return (_jsx(Controller, { name: name, rules: rules, render: (_a) => {
            var _b = _a.field, { value, ref, onChange } = _b, rest = __rest(_b, ["value", "ref", "onChange"]), { fieldState: { error } } = _a;
            return (_jsx(RadioButton, Object.assign({ isActive: Boolean(value), onChange: onChange }, rest, radioButtonProps, { inputRef: ref, error: !!error, onClick: param => handleOnClick(onChange, param) })));
        } }));
};
export default FormRadioButton;
