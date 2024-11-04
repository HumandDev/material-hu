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
import { Radio, Stack, Typography, } from '@mui/material';
import { colorPalette } from '../../theme/hugo/colors';
const RadioButton = (_a) => {
    var { error = false, disabled = false, isActive = false, label, extraData, description, onClick, stackSx = {}, labelProps = {} } = _a, props = __rest(_a, ["error", "disabled", "isActive", "label", "extraData", "description", "onClick", "stackSx", "labelProps"]);
    let radioBorderColor = colorPalette.textColors.neutralTextLighter;
    if (error)
        radioBorderColor = colorPalette.textColors.errorText;
    if (disabled)
        radioBorderColor = colorPalette.hugoBackground.neutralBgTerciary;
    const hasHoverEffect = !disabled && !error;
    const handleClick = () => onClick(!isActive);
    return (_jsxs(Stack, { sx: Object.assign({ alignItems: 'flex-start', flexDirection: 'row', gap: '4px' }, stackSx), children: [_jsx(Radio, Object.assign({}, props, { value: isActive, disabled: disabled, checked: isActive, onClick: handleClick, sx: Object.assign({ padding: 0, color: radioBorderColor }, (hasHoverEffect && {
                    '&:hover': {
                        color: colorPalette.textColors.primaryText,
                        backgroundColor: colorPalette.hugoBackground.primaryBgLighter,
                    },
                })) })), _jsxs(Stack, { sx: { gap: '2px' }, children: [_jsxs(Stack, { sx: {
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: '4px',
                        }, children: [_jsx(Typography, Object.assign({ variant: "globalS", sx: {
                                    color: error
                                        ? colorPalette.textColors.errorText
                                        : colorPalette.textColors.neutralText,
                                    minWidth: '200px',
                                } }, labelProps, { children: label })), extraData && (_jsx(Typography, { variant: "globalXS", sx: { color: colorPalette.textColors.neutralTextLighter }, children: extraData }))] }), description && (_jsx(Typography, { variant: "globalXS", sx: {
                            color: colorPalette.textColors.neutralTextLighter,
                        }, children: description }))] })] }));
};
export default RadioButton;
