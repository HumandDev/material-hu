import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import SelectionCard from './SelectionCard';
const FormSelectionCard = props => {
    const { name, rules, children, isOnlyOption = false } = props;
    const { getValues, setValue } = useFormContext();
    const valueInput = getValues(name);
    const handleOnClick = (onChange, param) => {
        if (isOnlyOption) {
            const values = getValues();
            const allInputs = Object.keys(values);
            allInputs.forEach(key => {
                if (name === key) {
                    setValue(key, true);
                }
                else {
                    setValue(key, false);
                }
            });
        }
        else {
            onChange(param);
        }
    };
    return (_jsx(Controller, { render: ({ field: { onChange }, fieldState: { error } }) => (_jsx(SelectionCard, { onClick: param => handleOnClick(onChange, param), error: !!error, errorText: error === null || error === void 0 ? void 0 : error.message, checked: valueInput, children: children })), name: name, rules: rules }));
};
export default FormSelectionCard;
