import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import Switcher from './Switcher';
const FormSwitcher = ({ name, switcherProps, rules }) => {
    return (_jsx(Controller, { name: name, rules: rules, render: ({ field: { value, onChange } }) => (_jsx(Switcher, Object.assign({}, switcherProps, { value: Boolean(value), onChange: onChange }))) }));
};
export default FormSwitcher;
