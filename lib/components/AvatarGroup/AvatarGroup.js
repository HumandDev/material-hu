import { jsx as _jsx } from "react/jsx-runtime";
import { AvatarGroup as AvatarGroupMui, useTheme } from '@mui/material';
import Avatar, { getColorsVariant, getSizeInPixels, } from '../Avatar/Avatar';
const MAX_AVATARS = 4;
export const formatSurplus = (surplus) => {
    const thousandFraction = surplus / 1000;
    if (surplus > 9999 || surplus % 1000 === 0) {
        return `+${Math.trunc(thousandFraction).toString()}K`;
    }
    return surplus > 999
        ? `+${(Math.trunc(thousandFraction * 10) / 10).toString()}K`
        : `+${surplus}`;
};
const AvatarGroup = ({ size = 'medium', avatars }) => {
    const theme = useTheme();
    const sizeInPixels = getSizeInPixels(size);
    const colorsVariant = getColorsVariant('default', theme.palette);
    return (_jsx(AvatarGroupMui, { sx: {
            justifyContent: 'start',
            '& .MuiAvatar-root': {
                height: sizeInPixels,
                width: sizeInPixels,
                position: 'static',
            },
        }, slotProps: {
            additionalAvatar: {
                sx: Object.assign({ height: sizeInPixels, width: sizeInPixels }, colorsVariant),
            },
        }, max: MAX_AVATARS, renderSurplus: formatSurplus, children: avatars.map((a, index) => (_jsx(Avatar, Object.assign({}, a), index))) }));
};
export default AvatarGroup;
