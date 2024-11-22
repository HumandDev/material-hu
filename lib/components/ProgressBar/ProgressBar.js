import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, LinearProgress, Typography } from '@mui/material';
import Title from '../Title/Title';
const ProgressBar = ({ title = '', description = '', helper = '', variant = 'indeterminate', current = 0, total = 100, hasPercentage = false, sx, }) => {
    const progress = (100 * current) / total;
    return (_jsxs(Stack, { sx: Object.assign({ gap: 0.5 }, sx), children: [(title || description) && (_jsx(Title, { variant: "S", title: title, description: description })), _jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center' }, children: [_jsx(LinearProgress, { sx: {
                            color: theme => { var _a; return (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[400]; },
                            backgroundColor: theme => { var _a; return (_a = theme.palette.border) === null || _a === void 0 ? void 0 : _a.neutralDivider; },
                            width: '100%',
                            borderRadius: 1,
                            my: 1,
                        }, variant: variant, value: Math.min(progress, 100) }), hasPercentage && (_jsx(Typography, { variant: "globalXS", sx: {
                            color: theme => { var _a; return (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.neutralTextLighter; },
                            ml: 0.5,
                        }, children: `${Math.round(progress)}%` }))] }), helper && (_jsx(Typography, { variant: "globalXXS", sx: { color: theme => { var _a; return (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.neutralTextLighter; } }, children: helper }))] }));
};
export default ProgressBar;
