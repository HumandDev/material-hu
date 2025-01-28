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
    const { name } = props, _a = props.inputProps, { showErrors = false } = _a, inputPhoneProps = __rest(_a, ["showErrors"]), { rules = {}, defaultValue, disabled } = props;
    const { control, formState: { isSubmitted }, } = useFormContext();
    const { t } = useTranslation();
    return (_jsx(Controller, { render: (_a) => {
            var _b = _a.field, { ref, value, onChange } = _b, field = __rest(_b, ["ref", "value", "onChange"]), { fieldState: { error } } = _a;
            return (_jsx(InputPhone, Object.assign({}, field, inputPhoneProps, { onChange: newValue => onChange(newValue), error: !!error, disabled: disabled, helperText: inputPhoneProps.helperText || showErrors
                    ? error === null || error === void 0 ? void 0 : error.message
                    : undefined, value: inputPhoneProps.value || value, success: isSubmitted ? !error : undefined })));
        }, name: name, control: control, defaultValue: defaultValue, rules: Object.assign(Object.assign({}, rules), { validate: Object.assign(Object.assign({}, rules.validate), { isPossiblePhoneNumber: input => isPossiblePhoneNumber(input) || t('INVALID_PHONE_NUMBER') }) }) }));
};
export default FormInputPhone;
