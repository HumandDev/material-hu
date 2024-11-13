import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Toggle from '../Toggle/Toggle';
import { Stack, Typography, useTheme } from '@mui/material';
const Switcher = props => {
    const { title, description, disabled = false, value, onChange, sx } = props;
    const theme = useTheme();
    const textColors = theme.palette.textColors;
    const colors = {
        title: disabled ? textColors === null || textColors === void 0 ? void 0 : textColors.neutralTextDisabled : textColors === null || textColors === void 0 ? void 0 : textColors.neutralText,
        description: disabled
            ? textColors === null || textColors === void 0 ? void 0 : textColors.neutralTextDisabled
            : textColors === null || textColors === void 0 ? void 0 : textColors.neutralTextLighter,
    };
    return (_jsxs(Stack, { sx: Object.assign({ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }, sx), children: [_jsxs(Stack, { children: [_jsx(Typography, { variant: "globalS", color: colors.title, children: title }), _jsx(Typography, { variant: "globalXS", color: colors.description, children: description })] }), _jsx(Stack, { sx: { justifyContent: 'center' }, children: _jsx(Toggle, { disabled: disabled, checked: !!value, onChange: onChange }) })] }));
};
export default Switcher;
