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
import { Controller, useFormContext, } from 'react-hook-form';
import { useTranslation } from './i18n';
import { isPossiblePhoneNumber } from 'libphonenumber-js';
import InputPhone from './InputPhone';
const FormInputPhone = props => {
    const { name, defaultCountry = 'AR', rules = {}, defaultValue, showErrors = false, disabled, fullWidth = true, placeholder, label, autoFocus, onKeyDown, onPaste, inputProps, sx, margin, onClick, value: valueProp, helperText: helperTextProp, } = props;
    const { control, formState: { isSubmitted }, } = useFormContext();
    const { t } = useTranslation();
    return (_jsx(Controller, { render: (_a) => {
            var _b = _a.field, { ref, value, onChange } = _b, field = __rest(_b, ["ref", "value", "onChange"]), { fieldState: { error } } = _a;
            return (_jsx(InputPhone, Object.assign({}, field, { onChange: newValue => onChange(newValue), defaultCountry: defaultCountry, error: !!error, disabled: disabled, fullWidth: fullWidth, placeholder: placeholder, label: label, autoFocus: autoFocus, onKeyDown: onKeyDown, onPaste: onPaste, inputProps: inputProps, margin: margin, onClick: onClick, sx: sx, helperText: helperTextProp || showErrors ? error === null || error === void 0 ? void 0 : error.message : undefined, value: valueProp || value, success: isSubmitted ? !error : undefined })));
        }, name: name, control: control, defaultValue: defaultValue, rules: Object.assign(Object.assign({}, rules), { validate: Object.assign(Object.assign({}, rules.validate), { isPossiblePhoneNumber: input => isPossiblePhoneNumber(input) || t('INVALID_PHONE_NUMBER') }) }) }));
};
export default FormInputPhone;
