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
import { useTheme } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { IconCalendarDue, IconChevronLeft, IconChevronRight, IconChevronDown, } from '@tabler/icons-react';
const CustomDatePicker = (_a) => {
    var _b, _c, _d;
    var { value, helperText } = _a, props = __rest(_a, ["value", "helperText"]);
    const theme = useTheme();
    return (_jsx(DatePicker, Object.assign({ value: value, slotProps: {
            textField: {
                helperText,
            },
            day: {
                sx: {
                    color: (_b = theme.palette.textColors) === null || _b === void 0 ? void 0 : _b.primaryText,
                    borderRadius: '8px',
                    '&.Mui-selected': {
                        bgcolor: `${(_c = theme.palette.buttons) === null || _c === void 0 ? void 0 : _c.buttonPrimaryEnabled} !important`,
                    },
                    '&.MuiPickersDay-today': {
                        borderColor: `${(_d = theme.palette.border) === null || _d === void 0 ? void 0 : _d.primaryBorder} !important`,
                    },
                },
            },
        }, slots: {
            openPickerIcon: IconCalendarDue,
            leftArrowIcon: IconChevronLeft,
            rightArrowIcon: IconChevronRight,
            switchViewIcon: IconChevronDown,
        } }, props)));
};
export default CustomDatePicker;
