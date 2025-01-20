import { colorPalette } from './colors';
const typographyWeight = {
    fontWeightRegular: 400,
    fontWeightSemiBold: 600,
};
export const typography = Object.assign(Object.assign({}, typographyWeight), { fontFamily: 'Roboto', globalXXS: {
        fontFamily: 'Roboto',
        fontSize: 12,
        lineHeight: '140%',
        fontWeight: typographyWeight.fontWeightRegular,
        letterSpacing: 0.2,
        color: colorPalette.textColors.neutralText,
    }, globalXS: {
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: '140%',
        fontWeight: typographyWeight.fontWeightRegular,
        letterSpacing: 0.2,
        color: colorPalette.textColors.neutralText,
    }, globalS: {
        fontFamily: 'Roboto',
        fontSize: 16,
        lineHeight: '140%',
        fontWeight: typographyWeight.fontWeightRegular,
        letterSpacing: 0.2,
        color: colorPalette.textColors.neutralText,
    }, globalM: {
        fontFamily: 'Roboto',
        fontSize: 18,
        lineHeight: '140%',
        fontWeight: typographyWeight.fontWeightRegular,
        letterSpacing: 0.2,
        color: colorPalette.textColors.neutralText,
    }, globalL: {
        fontFamily: 'Roboto',
        fontSize: 24,
        lineHeight: '140%',
        fontWeight: typographyWeight.fontWeightRegular,
        letterSpacing: 0.2,
        color: colorPalette.textColors.neutralText,
    }, globalXL: {
        fontFamily: 'Roboto',
        fontSize: 32,
        lineHeight: '130%',
        fontWeight: typographyWeight.fontWeightRegular,
        letterSpacing: 0.2,
        color: colorPalette.textColors.neutralText,
    }, globalXXL: {
        fontFamily: 'Roboto',
        fontSize: 36,
        lineHeight: '140%',
        fontWeight: typographyWeight.fontWeightRegular,
        letterSpacing: 0.2,
        color: colorPalette.textColors.neutralText,
    } });
