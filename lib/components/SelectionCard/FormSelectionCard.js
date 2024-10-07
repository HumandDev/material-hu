import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import SelectionCard from './SelectionCard';
const FormSelectionCard = props => {
    const { name, rules, children, isOnlyOption = false } = props;
    const { getValues, setValue } = useFormContext();
    const valueInput = getValues(name);
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
    return (_jsx(Controller, { render: ({ field: { onChange } }) => (_jsx(SelectionCard, { onClick: param => handleOnClick(onChange, param), checked: valueInput, children: children })), name: name, rules: rules }));
};
export default FormSelectionCard;
