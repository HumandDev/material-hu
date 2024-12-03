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
import { forwardRef, Fragment } from 'react';
import { assign, concat, merge } from 'lodash';
import { IconChevronDown, IconExclamationCircle } from '@tabler/icons-react';
import { createFilterOptions, FormControl, Autocomplete as MUIAutocomplete, Stack, TextField, Typography, useTheme, } from '@mui/material';
import CustomLabel from './CustomLabel';
const defaultProps = {
    selectOnFocus: true,
    handleHomeEndKeys: true,
    clearOnBlur: true,
    ListboxProps: {
        sx: { maxHeight: 240 },
    },
    popupIcon: _jsx(IconChevronDown, { size: 20 }),
    fullWidth: true,
};
const ErrorIcon = IconExclamationCircle;
const Autocomplete = (_a, ref) => {
    var _b;
    var { error: hasError, noOptionsPrimary, noOptionsSecondary, canCreate, placeholder, label, helperText, getCreatableOption, renderCreatableOption, onCreate, renderLoadElementTrigger } = _a, props = __rest(_a, ["error", "noOptionsPrimary", "noOptionsSecondary", "canCreate", "placeholder", "label", "helperText", "getCreatableOption", "renderCreatableOption", "onCreate", "renderLoadElementTrigger"]);
    const theme = useTheme();
    const getStatusTextColor = () => {
        var _a, _b, _c;
        if (props.disabled) {
            return (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.neutralTextDisabled;
        }
        return hasError
            ? (_b = theme.palette.textColors) === null || _b === void 0 ? void 0 : _b.errorText
            : (_c = theme.palette.textColors) === null || _c === void 0 ? void 0 : _c.neutralTextLighter;
    };
    const statusTextColor = getStatusTextColor();
    const helperTextTitle = (_jsx(Typography, { variant: "globalS", sx: {
            color: statusTextColor,
        }, children: helperText }));
    const helperTextMessage = hasError ? (_jsxs(Stack, { component: "span", sx: { gap: 0.5, flexDirection: 'row', alignItems: 'center' }, children: [_jsx(ErrorIcon, { size: 16, style: { color: statusTextColor } }), helperTextTitle] })) : (helperTextTitle);
    const filterOptions = (_b = props.filterOptions) !== null && _b !== void 0 ? _b : createFilterOptions();
    const hasExtendedFeatures = canCreate || onCreate;
    const extendedFeaturesProps = {
        filterOptions: (options, state) => {
            const filteredOptions = filterOptions(options, state);
            const creatableOption = assign(getCreatableOption === null || getCreatableOption === void 0 ? void 0 : getCreatableOption(options, state), {
                isCreatable: true,
            });
            return concat(canCreate ? creatableOption : [], filteredOptions);
        },
        renderOption: (...args) => {
            var _a;
            const optionElement = (_a = props.renderOption) === null || _a === void 0 ? void 0 : _a.call(props, ...args);
            const [, option] = args;
            return concat(option.isCreatable && (renderCreatableOption === null || renderCreatableOption === void 0 ? void 0 : renderCreatableOption(...args)), optionElement, renderLoadElementTrigger === null || renderLoadElementTrigger === void 0 ? void 0 : renderLoadElementTrigger(...args));
        },
        onChange: onCreate
            ? (...args) => {
                var _a;
                const [, nextValue] = args;
                if (nextValue === null || nextValue === void 0 ? void 0 : nextValue.isCreatable) {
                    onCreate === null || onCreate === void 0 ? void 0 : onCreate(...args);
                }
                else {
                    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, ...args);
                }
            }
            : props.onChange,
    };
    const baseProps = merge(defaultProps, hasExtendedFeatures && extendedFeaturesProps, props);
    return (_jsxs(FormControl, { error: hasError, fullWidth: baseProps.fullWidth, disabled: baseProps.disabled, children: [label && _jsx(CustomLabel, { label: label }), _jsx(MUIAutocomplete, Object.assign({}, baseProps, { ref: ref, renderInput: params => {
                    var _a, _b, _c;
                    return (_jsx(TextField, Object.assign({}, params, { error: hasError, helperText: helperTextMessage, placeholder: placeholder, InputProps: Object.assign(Object.assign({}, params.InputProps), { endAdornment: (_jsxs(Fragment, { children: [params.InputProps.endAdornment, hasError && (_jsx(ErrorIcon, { size: 20, style: {
                                            color: statusTextColor,
                                        } }))] })), sx: Object.assign(Object.assign({}, (props.disabled && {
                                bgcolor: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.greyTransparent['300p50'],
                                border: `1px solid ${(_b = theme.palette.border) === null || _b === void 0 ? void 0 : _b.neutralBorder}`,
                            })), { color: (_c = theme.palette.textColors) === null || _c === void 0 ? void 0 : _c.neutralText, fontSize: 'globalS' }) }) })));
                }, noOptionsText: _jsxs(Stack, { children: [_jsx(Typography, { variant: "globalS", fontWeight: "semiBold", children: noOptionsPrimary }), _jsx(Typography, { variant: "globalXS", color: "neutralTextLighter", children: noOptionsSecondary })] }) }))] }));
};
export default forwardRef(Autocomplete);
