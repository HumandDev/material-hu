import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography } from '@mui/material';
const ResultContainer = ({ title, children, subtitle, actions, sx, }) => (_jsxs(Stack, { sx: Object.assign({ p: 4, gap: 4 }, sx), children: [_jsxs(Stack, { sx: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }, children: [_jsxs(Stack, { children: [_jsx(Typography, { variant: "h5", component: "h3", children: title }), _jsx(Typography, { component: "h4", children: subtitle })] }), actions] }), children] }));
export default ResultContainer;
