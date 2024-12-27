import { jsx as _jsx } from "react/jsx-runtime";
import { Chip as MuiChip, Typography, useTheme, } from '@mui/material';
import { IconX, IconCheck } from '@tabler/icons-react';
const Chip = ({ label, size = 'medium', disabled, onDelete, isSelected, onClick, sx, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const theme = useTheme();
    const isSmall = size === 'small';
    const textColor = disabled
        ? (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.neutralTextDisabled
        : (_b = theme.palette.textColors) === null || _b === void 0 ? void 0 : _b.primaryText;
    const backgroundColor = isSelected
        ? (_c = theme.palette.border) === null || _c === void 0 ? void 0 : _c.primaryBorder
        : (_d = theme.palette.hugoBackground) === null || _d === void 0 ? void 0 : _d.primaryBgLighter;
    const iconStyle = {
        width: '16px',
        height: '16px',
        color: textColor,
    };
    return (_jsx(MuiChip, { label: _jsx(Typography, { variant: isSmall ? 'globalXXS' : 'globalXS', fontWeight: "fontWeightSemiBold", color: textColor, children: label }), size: size, onDelete: onDelete, onClick: onClick, disabled: disabled, icon: isSelected ? _jsx(IconCheck, { style: iconStyle }) : undefined, sx: Object.assign({ borderRadius: 1, borderColor: disabled
                ? (_e = theme.palette.border) === null || _e === void 0 ? void 0 : _e.neutralBorder
                : (_f = theme.palette.border) === null || _f === void 0 ? void 0 : _f.primaryBorder, borderStyle: 'solid', borderWidth: '1px', backgroundColor: disabled
                ? (_g = theme.palette.hugoBackground) === null || _g === void 0 ? void 0 : _g.neutralBgTransparent
                : backgroundColor, ':hover': {
                backgroundColor: (_h = theme.palette.border) === null || _h === void 0 ? void 0 : _h.primaryBorder,
            }, ':focus-visible': {
                backgroundColor: (_j = theme.palette.border) === null || _j === void 0 ? void 0 : _j.primaryBorder,
                borderColor: textColor,
                borderWidth: '2px',
            }, '.MuiChip-label': {
                px: 0.5,
                verticalAlign: 'sub',
            }, '.MuiChip-deleteIcon': {
                m: 0,
                pr: 0.5,
            }, '.MuiChip-icon': {
                m: 0,
                pl: 0.5,
            }, px: isSmall ? 0.5 : 1 }, sx), deleteIcon: onDelete && _jsx(IconX, { style: iconStyle }) }));
};
export default Chip;
