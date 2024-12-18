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
import { RadioGroup } from '@mui/material';
import CardContainer from '../CardContainer/CardContainer';
import RadioButton from './RadioButton';
const FormRadioButtonGroup = props => {
    const { name, options, radioProps, rules } = props, other = __rest(props, ["name", "options", "radioProps", "rules"]);
    const { control, setValue, watch } = useFormContext();
    const groupName = watch(name);
    return (_jsx(Controller, { name: name, control: control, rules: rules, render: (_a) => {
            var _b = _a.field, { onChange } = _b, field = __rest(_b, ["onChange"]);
            return (_jsx(RadioGroup, Object.assign({}, field, other, { children: options.map(option => (_jsx(CardContainer, { sx: { width: '100%', cursor: 'pointer' }, onClick: () => {
                        var _a;
                        // Prevent triggering selection when user is selecting text
                        if (((_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.type) !== 'Range') {
                            setValue(name, option.value, { shouldDirty: true });
                        }
                    }, children: _jsx(RadioButton, Object.assign({}, radioProps, { label: option.label, onClick: () => {
                            setValue(name, option.value, { shouldDirty: true });
                        }, description: option.helperText, value: option.value, isActive: groupName === option.value })) }, option.value))) })));
        } }));
};
export default FormRadioButtonGroup;
