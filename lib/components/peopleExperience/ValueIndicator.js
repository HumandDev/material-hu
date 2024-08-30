import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconInfoCircle as InfoIcon } from '@tabler/icons-react';
import { Skeleton, Stack, Tooltip, Typography, } from '@mui/material';
import { merge } from 'lodash';
const ValueIndicator = ({ value, label, loading = false, description, slotProps = {}, }) => {
    const { container } = slotProps;
    return (_jsxs(Stack, Object.assign({}, container, { sx: Object.assign({ alignItems: 'center', gap: 0.5 }, container === null || container === void 0 ? void 0 : container.sx), children: [loading && (_jsx(Skeleton, { variant: "text", width: "2rem" })), !loading && (_jsx(Typography, { variant: "h5", component: "p", children: value })), _jsxs(Stack, { sx: { flexDirection: 'row', gap: 0.5, alignItems: 'center' }, children: [_jsx(Typography, { variant: "overline", sx: { color: theme => theme.palette.secondary.main }, children: label }), description && (_jsx(Tooltip, Object.assign({}, merge({
                        title: description,
                        placement: 'right-end',
                        slotProps: { tooltip: { sx: { maxWidth: '135px' } } },
                    }, slotProps.description), { children: _jsx(InfoIcon, { fontSize: "small" }) })))] })] })));
};
export default ValueIndicator;
