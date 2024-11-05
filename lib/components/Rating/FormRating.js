import { jsx as _jsx } from "react/jsx-runtime";
import Rating from './Rating';
import { Controller } from 'react-hook-form';
const FormRating = ({ name, inputProps = {} }) => {
    return (_jsx(Controller, { render: ({ field }) => (_jsx(Rating, Object.assign({}, field, inputProps))), name: name }));
};
export default FormRating;
