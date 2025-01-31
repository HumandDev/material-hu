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
import Autocomplete from './Autocomplete';
const FormAutocomplete = (_a) => {
    var { name, rules } = _a, _b = _a.autocompleteProps, { renderOption } = _b, other = __rest(_b, ["renderOption"]);
    return (_jsx(Controller, { render: ({ field, fieldState: { error, invalid } }) => (_jsx(Autocomplete, Object.assign({}, field, other, { hasError: invalid, helperText: error === null || error === void 0 ? void 0 : error.message }))), name: name, rules: rules, disabled: other === null || other === void 0 ? void 0 : other.disabled }));
};
export default FormAutocomplete;
