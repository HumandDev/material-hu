import { jsx as _jsx } from "react/jsx-runtime";
import { InputAdornment, MenuItem, Select, useFormControl, useTheme, } from '@mui/material';
import { getBorderColor } from './utils';
import { IconAlertCircle, IconChevronDown } from '@tabler/icons-react';
const CustomSelect = ({ value, onChange, inputRef, placeholder, options }) => {
    var _a, _b, _c;
    const { focused, error } = useFormControl() || {};
    const theme = useTheme();
    return (_jsx(Select, { value: value || '', onChange: e => onChange(e.target.value), inputRef: inputRef, displayEmpty: true, renderValue: v => { var _a; return ((_a = options.find(o => o.value === v)) === null || _a === void 0 ? void 0 : _a.label) || placeholder; }, IconComponent: IconChevronDown, endAdornment: error && (_jsx(InputAdornment, { position: "end", children: _jsx(IconAlertCircle, { size: 20, color: (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.errorText }) })), sx: {
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
        }, children: options.map(option => (_jsx(MenuItem, { value: option.value, children: option.label }, option.value))) }));
};
export default CustomSelect;
