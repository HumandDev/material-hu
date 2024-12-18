import { jsx as _jsx } from "react/jsx-runtime";
import { Typography, useFormControl, useTheme } from '@mui/material';
const CustomLabel = ({ label, success, }) => {
    const { error, disabled } = useFormControl() || {};
    const theme = useTheme();
    if (!label)
        return null;
    const getLabelColor = () => {
        var _a, _b, _c, _d;
        if (error) {
            return (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.errorText;
        }
        if (success) {
            return (_b = theme.palette.textColors) === null || _b === void 0 ? void 0 : _b.successText;
        }
        if (disabled) {
            return (_c = theme.palette.textColors) === null || _c === void 0 ? void 0 : _c.neutralTextDisabled;
        }
        return (_d = theme.palette.textColors) === null || _d === void 0 ? void 0 : _d.neutralText;
    };
    return (_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", sx: {
            color: getLabelColor(),
            mb: 0.5,
        }, children: label }));
};
export default CustomLabel;
