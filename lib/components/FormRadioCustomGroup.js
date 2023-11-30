var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormContext, Controller } from 'react-hook-form';
import { RadioGroup, Radio, FormControlLabel, FormHelperText, Typography, Stack, useTheme, } from '@mui/material';
export const FormRadioCustomGroup = (props) => {
    const { name, options, radioProps = {}, labelProps = {}, helperTextProps = {}, optionContainerProps = {}, column = false, fullWidth = true } = props, other = __rest(props, ["name", "options", "radioProps", "labelProps", "helperTextProps", "optionContainerProps", "column", "fullWidth"]);
    const { control } = useFormContext();
    const theme = useTheme();
    return (_jsx(Controller, { name: name, control: control, render: ({ field }) => (_jsx(RadioGroup, Object.assign({}, other, field, { sx: Object.assign({ flexDirection: column ? 'column' : 'row', width: fullWidth ? '100%' : undefined }, other === null || other === void 0 ? void 0 : other.sx), children: options.map((option, index) => (_jsx(Stack, Object.assign({}, optionContainerProps, { sx: Object.assign({ px: 0, py: 0.5, mb: index === options.length - 1 ? 0 : 2, width: fullWidth ? '100%' : undefined, boxShadow: theme.shadows[2], borderRadius: 1, borderWidth: '1px', borderStyle: 'solid', borderColor: option.value === field.value
                        ? theme.palette.humand.dark
                        : 'rgba(0, 0, 0, 0.12)', backgroundColor: option.value === field.value
                        ? '#F5F7FF'
                        : theme.palette.background.paper, '& .MuiFormControlLabel-root': {
                        padding: theme.spacing(1, 2),
                        width: '100%',
                        height: '100%',
                        alignItems: 'flex-start',
                    } }, optionContainerProps.sx), children: _jsx(FormControlLabel, Object.assign({}, labelProps, { "aria-describedby": option.helperText
                        ? `${name}-${option.value}-helper-text`
                        : undefined, control: (_jsx(Radio, Object.assign({ color: "humand" }, radioProps, { sx: Object.assign({ mx: 1 }, radioProps === null || radioProps === void 0 ? void 0 : radioProps.sx) }))), label: (_jsxs(Stack, { children: [_jsx(Typography, { variant: "subtitle2", fontSize: "1rem", children: option.label }), option.helperText && (_jsx(FormHelperText, Object.assign({}, helperTextProps, { id: `${name}-${option.value}-helper-text`, children: _jsx(Typography, { variant: "body2", component: "span", color: theme.palette.text.secondary, children: option.helperText }) })))] })), value: option.value })) }), option.value))) }))) }));
};
export default FormRadioCustomGroup;
