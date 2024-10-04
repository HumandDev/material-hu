import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormHelperText, Stack, Typography, useFormControl, useTheme, } from '@mui/material';
import { IconExclamationCircle } from '@tabler/icons-react';
const CustomHelperText = ({ helperText, hasCounter, maxLength, value, success }) => {
    const { error, focused } = useFormControl() || {};
    const theme = useTheme();
    const showCounter = hasCounter && (focused || error);
    const getHelperColor = () => {
        var _a, _b, _c;
        if (error) {
            return (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.errorText;
        }
        if (success) {
            return (_b = theme.palette.textColors) === null || _b === void 0 ? void 0 : _b.successText;
        }
        return (_c = theme.palette.textColors) === null || _c === void 0 ? void 0 : _c.neutralTextLighter;
    };
    return (_jsx(FormHelperText, { sx: {
            mx: 0,
            mt: 0.5,
            color: getHelperColor(),
            '&.Mui-error': {
                color: getHelperColor(),
            },
        }, children: _jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 0.5 }, children: [error && _jsx(IconExclamationCircle, { size: 13 }), _jsx(Typography, { variant: "globalS", children: helperText }), showCounter && (_jsxs(Typography, { variant: "globalS", sx: { ml: 'auto' }, children: [value.length, "/", maxLength] }))] }) }));
};
export default CustomHelperText;
