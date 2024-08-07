import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography } from '@mui/material';
import { colorPalette } from '../theme/hugo/colors';
const adjustedCopetin = {
    globalXXS: 'globalXXS',
    globalXS: 'globalXXS',
    globalS: 'globalXXS',
    globalM: 'globalXXS',
    globalL: 'globalXS',
    globalXL: 'globalS',
    globalXXL: 'globalM',
};
const adjustedDescription = {
    globalXXS: 'globalXXS',
    globalXS: 'globalXXS',
    globalS: 'globalXS',
    globalM: 'globalXS',
    globalL: 'globalS',
    globalXL: 'globalM',
    globalXXL: 'globalM', // M o L?
};
const Title = ({ centered = false, copetin = '', description = '', title, variant, sx = {}, }) => {
    return (_jsxs(Stack, { sx: Object.assign({ textAlign: centered ? 'center' : 'left' }, sx), children: [copetin && (_jsx(Typography, { variant: adjustedCopetin[variant], sx: {
                    color: colorPalette.textColors.neutralTextLighter,
                }, children: copetin })), _jsx(Typography, { variant: variant, sx: {
                    color: colorPalette.textColors.neutralText,
                }, children: title }), description && (_jsx(Typography, { variant: adjustedDescription[variant], sx: {
                    color: colorPalette.textColors.neutralTextLighter,
                }, children: description }))] }));
};
export default Title;
