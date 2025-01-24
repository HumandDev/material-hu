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
import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from '../i18n';
import { Button, Stack, IconButton } from '@mui/material';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
export const PaginationItem = (_a) => {
    var { page, type, selected, disabled = false } = _a, item = __rest(_a, ["page", "type", "selected", "disabled"]);
    const { t } = useTranslation();
    let children = null;
    if (type.includes('ellipsis')) {
        children = (_jsx(Button, Object.assign({}, item, { variant: "tertiary", disabled: true, size: "small", sx: {
                minWidth: '36px',
            }, children: '...' })));
    }
    if (type === 'page') {
        children = (_jsx(Button, Object.assign({}, item, { variant: selected ? 'secondary' : 'tertiary', size: "small", disabled: disabled, sx: {
                minWidth: '36px',
            }, children: page })));
    }
    if (type === 'previous') {
        children = (_jsx(IconButton, Object.assign({}, item, { "aria-label": t('PREVIOUS'), size: "small", disabled: disabled, children: _jsx(IconChevronLeft, {}) })));
    }
    if (type === 'next') {
        children = (_jsx(IconButton, Object.assign({}, item, { "aria-label": t('NEXT'), size: "small", disabled: disabled, children: _jsx(IconChevronRight, {}) })));
    }
    return (_jsx(Stack, { component: "li", sx: { listStyle: 'none' }, children: children }));
};
export default PaginationItem;
