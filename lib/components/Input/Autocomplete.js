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
import { Fragment } from 'react';
import { IconChevronDown, IconExclamationCircle, IconX, } from '@tabler/icons-react';
import { autocompleteClasses, FormControl, Autocomplete as MUIAutocomplete, Stack, TextField, Typography, useTheme, } from '@mui/material';
import CustomLabel from './CustomLabel';
import CustomHelperText from './CustomHelperText';
import Title from '../Title/Title';
import { useTranslation } from './i18n';
const normalizeText = (text) => {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
};
export const isEqualText = (textA, textB) => {
    return normalizeText(textA) === normalizeText(textB);
};
const ErrorIcon = IconExclamationCircle;
const Autocomplete = (props) => {
    var _a;
    const theme = useTheme();
    const { t } = useTranslation();
    const { noOptionsTitle = t('NO_RESULTS_FOUND'), noOptionsDescription = t('SELECT_OPTION_IN_LIST'), hasError, helperText, placeholder, label, fieldRef, getCreatableOption, onCreate, onChange, loadMoreElem, getOptionLabel: fieldGetOptionLabel } = props, fieldProps = __rest(props, ["noOptionsTitle", "noOptionsDescription", "hasError", "helperText", "placeholder", "label", "fieldRef", "getCreatableOption", "onCreate", "onChange", "loadMoreElem", "getOptionLabel"]);
    const getStatusTextColor = () => {
        var _a, _b, _c;
        if (fieldProps.disabled) {
            return (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.neutralTextDisabled;
        }
        return hasError
            ? (_b = theme.palette.textColors) === null || _b === void 0 ? void 0 : _b.errorText
            : (_c = theme.palette.textColors) === null || _c === void 0 ? void 0 : _c.neutralTextLighter;
    };
    const statusTextColor = getStatusTextColor();
    const hasCreatableFeat = onCreate;
    return (_jsxs(FormControl, { error: hasError, fullWidth: (_a = fieldProps.fullWidth) !== null && _a !== void 0 ? _a : true, disabled: fieldProps.disabled, children: [label && _jsx(CustomLabel, { label: label }), _jsx(MUIAutocomplete, Object.assign({ fullWidth: true, selectOnFocus: true, handleHomeEndKeys: true, clearOnBlur: true, ListboxProps: {
                    sx: { maxHeight: 240 },
                }, popupIcon: _jsx(IconChevronDown, { size: 20 }), clearIcon: _jsx(IconX, { size: 20 }), filterOptions: (options, params) => {
                    const filtered = Array.from(options);
                    if (hasCreatableFeat) {
                        const { inputValue, getOptionLabel } = params;
                        const trimmedInput = inputValue.trim();
                        const isExisting = filtered.some(option => isEqualText(inputValue, getOptionLabel(option)));
                        if (!isExisting && trimmedInput) {
                            filtered.unshift(Object.assign(Object.assign({}, getCreatableOption === null || getCreatableOption === void 0 ? void 0 : getCreatableOption(trimmedInput)), { isCreatable: true, inputValue: trimmedInput }));
                        }
                    }
                    return filtered;
                }, renderOption: (_a, option, state) => {
                    var { key } = _a, optionProps = __rest(_a, ["key"]);
                    const { index } = state;
                    const content = [
                        _jsx(Stack, Object.assign({ component: "li" }, optionProps, { sx: {
                                flexDirection: 'row',
                                [`&.${autocompleteClasses.option}`]: {
                                    padding: theme.spacing(2),
                                },
                            }, children: _jsx(Typography, { variant: "globalS", children: fieldGetOptionLabel(option) }) }), key),
                    ];
                    const optionsLen = onCreate
                        ? fieldProps.options.length
                        : fieldProps.options.length - 1;
                    const shouldRenderTrigger = index === optionsLen && loadMoreElem;
                    if (shouldRenderTrigger) {
                        content.push(_jsx(Stack, Object.assign({ component: "li" }, optionProps, { children: loadMoreElem })));
                    }
                    return content;
                }, disableCloseOnSelect: fieldProps.multiple, onChange: (event, nextValue, reason) => {
                    if (reason === 'selectOption' && nextValue.isCreatable) {
                        onCreate === null || onCreate === void 0 ? void 0 : onCreate(nextValue.inputValue);
                    }
                    else {
                        onChange(event, nextValue, reason);
                    }
                }, getOptionLabel: option => {
                    var _a;
                    return ((_a = option.inputValue) !== null && _a !== void 0 ? _a : fieldGetOptionLabel(option));
                } }, fieldProps, { ref: fieldRef, renderInput: params => {
                    var _a, _b, _c;
                    return (_jsx(TextField, Object.assign({}, params, { error: hasError, helperText: _jsx(CustomHelperText, { helperText: helperText, value: "", hasCounter: false }), placeholder: placeholder, InputProps: Object.assign(Object.assign({}, params.InputProps), { endAdornment: (_jsxs(Fragment, { children: [params.InputProps.endAdornment, hasError && (_jsx(ErrorIcon, { size: 20, style: {
                                            color: statusTextColor,
                                        } }))] })), sx: Object.assign(Object.assign({}, (fieldProps.disabled && {
                                bgcolor: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.greyTransparent['300p50'],
                                border: `1px solid ${(_b = theme.palette.border) === null || _b === void 0 ? void 0 : _b.neutralBorder}`,
                            })), { color: (_c = theme.palette.textColors) === null || _c === void 0 ? void 0 : _c.neutralText, fontSize: 'globalS' }) }), InputLabelProps: {
                            shrink: params.inputProps.ref
                                .current === document.activeElement ||
                                !!params.inputProps.value ||
                                fieldProps.loading,
                        } })));
                }, noOptionsText: _jsx(Title, { variant: "S", title: noOptionsTitle, description: noOptionsDescription }) }))] }));
};
export default Autocomplete;
