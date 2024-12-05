import { buttonClasses } from '@mui/material';
import { colorPalette } from './colors';
const customShadow = {
    outlinedFocusedVisible: '0px -4px 4px 0px #AAAABA73 inset',
    containedFocusedVisible: '0px -4px 4px 0px #00000040 inset',
};
const commonButtonRootStyle = (theme) => {
    var _a, _b;
    return ({
        // text style globalS/semiBold to avoid a wrapper component
        fontFamily: 'Roboto',
        fontSize: 16,
        lineHeight: '140%',
        fontWeight: 600,
        letterSpacing: 0.2,
        color: colorPalette.textColors.neutralText,
        // text style globalS/semiBold
        boxShadow: 'none',
        borderRadius: '8px',
        borderColor: 'transparent',
        '&:hover': {
            boxShadow: 'none',
        },
        [`&.${buttonClasses.disabled}`]: {
            svg: {
                stroke: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.grey[600],
            },
            color: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.grey[600],
        },
    });
};
const primaryVariantStyle = (theme) => {
    var _a, _b, _c, _d, _e, _f, _g;
    return ({
        color: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.white,
        backgroundColor: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.blueBrand[400],
        svg: {
            stroke: (_c = theme.palette.base) === null || _c === void 0 ? void 0 : _c.white,
        },
        '&:hover': {
            backgroundColor: (_d = theme.palette.base) === null || _d === void 0 ? void 0 : _d.blueBrand[600],
        },
        [`&.${buttonClasses.focusVisible}`]: {
            backgroundColor: (_e = theme.palette.base) === null || _e === void 0 ? void 0 : _e.blueBrand[600],
            boxShadow: customShadow.containedFocusedVisible,
        },
        [`&.${buttonClasses.disabled}`]: {
            color: (_f = theme.palette.base) === null || _f === void 0 ? void 0 : _f.grey[600],
            backgroundColor: (_g = theme.palette.base) === null || _g === void 0 ? void 0 : _g.greyTransparent['300p50'],
        },
    });
};
const secondaryVariantStyle = (theme) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return ({
        border: '1px solid',
        color: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[800],
        borderColor: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.blueBrand[200],
        backgroundColor: (_c = theme.palette.base) === null || _c === void 0 ? void 0 : _c.white,
        svg: {
            stroke: (_d = theme.palette.base) === null || _d === void 0 ? void 0 : _d.blueBrand[800],
        },
        '&:hover': {
            backgroundColor: (_e = theme.palette.base) === null || _e === void 0 ? void 0 : _e.blueBrand[100],
            borderColor: (_f = theme.palette.base) === null || _f === void 0 ? void 0 : _f.blueBrand[200],
        },
        [`&.${buttonClasses.focusVisible}`]: {
            boxShadow: customShadow.outlinedFocusedVisible,
            backgroundColor: (_g = theme.palette.base) === null || _g === void 0 ? void 0 : _g.blueBrand[100],
        },
        [`&.${buttonClasses.disabled}`]: {
            color: (_h = theme.palette.base) === null || _h === void 0 ? void 0 : _h.grey[600],
            backgroundColor: (_j = theme.palette.base) === null || _j === void 0 ? void 0 : _j.white,
            borderColor: (_k = theme.palette.base) === null || _k === void 0 ? void 0 : _k.grey[300],
        },
    });
};
const tertiaryVariantStyle = (theme) => {
    var _a, _b, _c;
    return ({
        color: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[800],
        '&:hover': {
            backgroundColor: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.greyTransparent['300p50'],
        },
        [`&.${buttonClasses.focusVisible}`]: {
            boxShadow: customShadow.outlinedFocusedVisible,
            backgroundColor: (_c = theme.palette.base) === null || _c === void 0 ? void 0 : _c.greyTransparent['300p50'],
        },
    });
};
const buttonVariants = (theme) => [
    {
        props: { variant: 'primary' },
        style: primaryVariantStyle(theme),
    },
    {
        props: { variant: 'secondary' },
        style: secondaryVariantStyle(theme),
    },
    {
        props: { variant: 'tertiary' },
        style: tertiaryVariantStyle(theme),
    },
];
export { buttonVariants, commonButtonRootStyle, customShadow, primaryVariantStyle, secondaryVariantStyle, tertiaryVariantStyle, };
