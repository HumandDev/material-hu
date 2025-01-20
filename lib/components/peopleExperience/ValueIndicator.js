import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InfoOutlined } from '@mui/icons-material';
import { Skeleton, Stack, Tooltip, Typography, } from '@mui/material';
import { merge, omit } from 'lodash';
const ValueIndicator = ({ value, label, loading = false, description, slotProps = {}, }) => {
    const { container, value: valueProps, label: labelProps, description: descriptionProps, } = slotProps;
    return (_jsxs(Stack, Object.assign({}, container, { sx: Object.assign({ alignItems: 'center', gap: 0.5 }, container === null || container === void 0 ? void 0 : container.sx), children: [loading && (_jsx(Skeleton, { variant: "text", width: "2rem" })), !loading && (_jsxs(Stack, { sx: { gap: 1, flexDirection: 'row', alignItems: 'center' }, children: [_jsx(Typography, Object.assign({ variant: "h5", component: "p" }, omit(valueProps, 'endAdornment'), { children: value })), valueProps === null || valueProps === void 0 ? void 0 : valueProps.endAdornment] })), _jsxs(Stack, { sx: { flexDirection: 'row', gap: 0.5, alignItems: 'center' }, children: [_jsx(Typography, Object.assign({ variant: "overline" }, merge({
                        sx: { color: (theme) => theme.palette.secondary.main },
                    }, labelProps), { children: label })), description && (_jsx(Tooltip, Object.assign({}, merge({
                        title: description,
                        placement: 'right-end',
                        slotProps: { tooltip: { sx: { maxWidth: '135px' } } },
                    }, descriptionProps), { children: _jsx(InfoOutlined, { fontSize: "small", color: "secondary" }) })))] })] })));
};
export default ValueIndicator;
