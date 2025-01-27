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
import { useState, useEffect } from 'react';
import { Controller, useFormContext, } from 'react-hook-form';
import { useTranslation } from './i18n';
import { getCountryCallingCode, isPossiblePhoneNumber, } from 'libphonenumber-js';
import InputPhone from './InputPhone';
const FormInputPhone = props => {
    const { name, codeName = null, defaultCountry = 'AR', rules = {}, defaultValue, showErrors = false, disabled, fullWidth = true, maxRows, minRows, placeholder, size, label, autoFocus, ariaLabel, variant = 'outlined', onKeyDown, onPaste, inputProps, sx, margin, onClick, value: valueProp, helperText: helperTextProp, } = props;
    const [code, setCode] = useState(getCountryCallingCode(defaultCountry));
    const { control, trigger, setValue, formState: { isSubmitted }, getValues, } = useFormContext();
    const { t } = useTranslation();
    useEffect(() => {
        // Re-validate number when countryCode changes
        if (isSubmitted) {
            trigger(name);
        }
    }, [code]);
    const validationRules = Object.assign(Object.assign({}, rules), { validate: (value) => {
            // Run custom validate function if provided
            if (typeof rules.validate === 'function') {
                const customValidation = rules.validate(value, getValues);
                if (customValidation !== true)
                    return customValidation;
            }
            // Run phone number validation
            if (!value)
                return true;
            return isPossiblePhoneNumber(value) || t('INVALID_PHONE_NUMBER');
        } });
    return (_jsx(Controller, { render: (_a) => {
            var _b = _a.field, { ref, value, onChange } = _b, field = __rest(_b, ["ref", "value", "onChange"]), { fieldState: { error } } = _a;
            return (_jsx(InputPhone, Object.assign({}, field, { onChange: (newValue, countryCode) => {
                    onChange(newValue);
                    if (codeName && countryCode) {
                        setValue(codeName, countryCode);
                        setCode(countryCode);
                    }
                }, defaultCountry: defaultCountry, error: !!error, size: size, disabled: disabled, fullWidth: fullWidth, maxRows: maxRows, minRows: minRows, placeholder: placeholder, label: label, autoFocus: autoFocus, "aria-label": ariaLabel, variant: variant, onKeyDown: onKeyDown, onPaste: onPaste, inputProps: inputProps, margin: margin, onClick: onClick, sx: sx, helperText: helperTextProp || showErrors ? error === null || error === void 0 ? void 0 : error.message : undefined, value: valueProp || value, valid: isSubmitted ? !error : undefined })));
        }, name: name, control: control, defaultValue: defaultValue, rules: validationRules }));
};
export default FormInputPhone;
