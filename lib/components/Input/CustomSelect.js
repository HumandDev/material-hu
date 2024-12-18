import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { alpha, InputAdornment, MenuItem, Select, useFormControl, useTheme, } from '@mui/material';
import { IconAlertCircle, IconChevronDown } from '@tabler/icons-react';
import { colorPalette } from '../../theme/hugo/colors';
import { getBorderColor } from './utils';
import { useTranslation } from './i18n';
const CustomSelect = ({ value, onChange, inputRef, placeholder, options, allowClear, disabled = false, }) => {
    var _a, _b, _c;
    const { focused, error } = useFormControl() || {};
    const theme = useTheme();
    const { t } = useTranslation();
    return (_jsxs(Select, { value: value || '', onChange: e => onChange(e.target.value), inputRef: inputRef, displayEmpty: true, renderValue: v => { var _a; return ((_a = options.find(o => o.value === v)) === null || _a === void 0 ? void 0 : _a.label) || placeholder; }, IconComponent: IconChevronDown, endAdornment: error && (_jsx(InputAdornment, { position: "end", children: _jsx(IconAlertCircle, { size: 20, color: (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.errorText }) })), sx: {
            color: !value
                ? (_b = theme.palette.textColors) === null || _b === void 0 ? void 0 : _b.neutralTextLighter
                : (_c = theme.palette.textColors) === null || _c === void 0 ? void 0 : _c.neutralText,
            '.MuiSelect-icon': {
                mr: error ? 5 : 'unset',
            },
            '& fieldset': {
                borderColor: getBorderColor(theme, focused, error, false),
                borderWidth: '1px !important',
            },
            backgroundColor: disabled
                ? alpha(colorPalette.border.neutralBorder, 0.5)
                : colorPalette.hugoBackground.neutralBgTerciary,
        }, children: [allowClear && (_jsx(MenuItem, { value: "", children: _jsx("em", { children: t('SELECT') }) }, "clear")), options.map(option => (_jsx(MenuItem, { value: option.value, children: option.label }, option.value)))] }));
};
export default CustomSelect;
