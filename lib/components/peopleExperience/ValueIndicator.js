import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InfoOutlined } from '@mui/icons-material';
import { Skeleton, Stack, Tooltip, Typography, } from '@mui/material';
const ValueIndicator = ({ value, label, loading = false, description, slotProps = {}, }) => {
    const { container } = slotProps;
    return (_jsxs(Stack, Object.assign({}, container, { sx: Object.assign({ alignItems: 'center', gap: 1 }, container === null || container === void 0 ? void 0 : container.sx), children: [loading && (_jsx(Skeleton, { variant: "text", width: "2rem" })), !loading && (_jsx(Typography, { variant: "h5", component: "p", children: value.toLocaleString() })), _jsxs(Stack, { sx: { flexDirection: 'row', gap: 1, alignItems: 'center' }, children: [_jsx(Typography, { variant: "overline", sx: { color: theme => theme.palette.secondary.main }, children: label }), description && (_jsx(Tooltip, { title: description, placement: "right-end", slotProps: { tooltip: { sx: { maxWidth: '135px' } } }, children: _jsx(InfoOutlined, { fontSize: "small", color: "secondary" }) }))] })] })));
};
export default ValueIndicator;
