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
import { useFormContext, Controller } from 'react-hook-form';
import Pagination from './Pagination';
export const FormPagination = (_a) => {
    var { name } = _a, _b = _a.inputProps, _c = _b === void 0 ? {} : _b, { onChangePage = () => null, onChangeLimit = () => null } = _c, inputProps = __rest(_c, ["onChangePage", "onChangeLimit"]), { rules } = _a;
    const { setValue, watch } = useFormContext();
    const handleChangePage = (newPage) => {
        setValue(`${name}.page`, newPage);
        onChangePage(newPage);
    };
    const handleChangeLimit = (newLimit) => {
        setValue(`${name}.limit`, newLimit);
        onChangeLimit(newLimit);
    };
    const { page, limit } = watch(name);
    return (_jsx(Controller, { render: (_a) => {
            var _b = _a.field, { value } = _b, field = __rest(_b, ["value"]);
            return (_jsx(Pagination, Object.assign({}, field, inputProps, { page: page, limit: limit, onChangePage: handleChangePage, onChangeLimit: handleChangeLimit })));
        }, name: name, rules: rules }));
};
export default FormPagination;
