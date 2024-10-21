import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography } from '@mui/material';
import Tooltip from '../Tooltip/Tooltip';
import { colorPalette } from '../../theme/hugo/colors';
import { IconInfoCircle } from '@tabler/icons-react';
const tooltipSize = {
    XL: {
        copetin: 16,
        description: 18,
    },
    L: {
        copetin: 14,
        description: 16,
    },
    M: {
        copetin: 12,
        description: 14,
    },
    S: {
        copetin: 12,
        description: 14,
    },
};
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
export const Title = ({ centered = false, copetin = '', copetinTooltip = '', description = '', descriptionTooltip = '', title, variant, sx = {}, }) => {
    return (_jsxs(Stack, { sx: Object.assign({ textAlign: centered ? 'center' : 'left' }, sx), children: [copetin && (_jsxs(Typography, { variant: adjustedCopetin[variant], sx: {
                    color: colorPalette.textColors.neutralTextLighter,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                }, children: [copetin, copetinTooltip && (_jsx(Tooltip, { direction: "top", description: copetinTooltip, children: _jsx(IconInfoCircle, { size: tooltipSize[variant].copetin, color: colorPalette.textColors.neutralTextLighter }) }))] })), _jsx(Typography, { variant: `global${variant}`, sx: {
                    color: colorPalette.textColors.neutralText,
                }, fontWeight: 'fontWeightSemiBold', children: title }), description && (_jsxs(Typography, { variant: adjustedDescription[variant], sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: colorPalette.textColors.neutralTextLighter,
                }, children: [description, descriptionTooltip && (_jsx(Tooltip, { direction: "bottom", description: descriptionTooltip, children: _jsx(IconInfoCircle, { size: tooltipSize[variant].description, color: colorPalette.textColors.neutralTextLighter }) }))] }))] }));
};
export default Title;
