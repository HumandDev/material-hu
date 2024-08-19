import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography } from '@mui/material';
import { colorPalette } from '../../theme/hugo/colors';
const adjustedCopetin = {
    XL: 'globalS',
    L: 'globalXS',
    M: 'globalXXS',
    S: 'globalXXS',
};
const adjustedDescription = {
    XL: 'globalM',
    L: 'globalS',
    M: 'globalXS',
    S: 'globalXS',
};
const Title = ({ centered = false, copetin = '', description = '', title, variant, sx = {}, }) => {
    return (_jsxs(Stack, { sx: Object.assign({ textAlign: centered ? 'center' : 'left' }, sx), children: [copetin && (_jsx(Typography, { variant: adjustedCopetin[variant], sx: {
                    color: colorPalette.textColors.neutralTextLighter,
                }, children: copetin })), _jsx(Typography, { variant: `global${variant}`, sx: {
                    color: colorPalette.textColors.neutralText,
                }, children: title }), description && (_jsx(Typography, { variant: adjustedDescription[variant], sx: {
                    color: colorPalette.textColors.neutralTextLighter,
                }, children: description }))] }));
};
export default Title;
