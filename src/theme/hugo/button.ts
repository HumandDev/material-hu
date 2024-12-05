import { buttonClasses, Theme } from '@mui/material';
import { colorPalette } from './colors';

const customShadow = {
  outlinedFocusedVisible: '0px -4px 4px 0px #AAAABA73 inset',
  containedFocusedVisible: '0px -4px 4px 0px #00000040 inset',
};

const commonButtonRootStyle = (theme: Theme) => ({
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
      stroke: theme.palette.base?.grey[600],
    },
    color: theme.palette.base?.grey[600],
  },
});

const primaryVariantStyle = (theme: Theme) => ({
  color: theme.palette.base?.white,
  backgroundColor: theme.palette.base?.blueBrand[400],
  svg: {
    stroke: theme.palette.base?.white,
  },
  '&:hover': {
    backgroundColor: theme.palette.base?.blueBrand[600],
  },
  [`&.${buttonClasses.focusVisible}`]: {
    backgroundColor: theme.palette.base?.blueBrand[600],
    boxShadow: customShadow.containedFocusedVisible,
  },
  [`&.${buttonClasses.disabled}`]: {
    color: theme.palette.base?.grey[600],
    backgroundColor: theme.palette.base?.greyTransparent['300p50'],
  },
});

const secondaryVariantStyle = (theme: Theme) => ({
  border: '1px solid',
  color: theme.palette.base?.blueBrand[800],
  borderColor: theme.palette.base?.blueBrand[200],
  backgroundColor: theme.palette.base?.white,
  svg: {
    stroke: theme.palette.base?.blueBrand[800],
  },
  '&:hover': {
    backgroundColor: theme.palette.base?.blueBrand[100],
    borderColor: theme.palette.base?.blueBrand[200],
  },
  [`&.${buttonClasses.focusVisible}`]: {
    boxShadow: customShadow.outlinedFocusedVisible,
    backgroundColor: theme.palette.base?.blueBrand[100],
  },
  [`&.${buttonClasses.disabled}`]: {
    color: theme.palette.base?.grey[600],
    backgroundColor: theme.palette.base?.white,
    borderColor: theme.palette.base?.grey[300],
  },
});

const tertiaryVariantStyle = (theme: Theme) => ({
  color: theme.palette.base?.blueBrand[800],
  '&:hover': {
    backgroundColor: theme.palette.base?.greyTransparent['300p50'],
  },
  [`&.${buttonClasses.focusVisible}`]: {
    boxShadow: customShadow.outlinedFocusedVisible,
    backgroundColor: theme.palette.base?.greyTransparent['300p50'],
  },
});

const buttonVariants = (theme: Theme) => [
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

export {
  buttonVariants,
  commonButtonRootStyle,
  customShadow,
  primaryVariantStyle,
  secondaryVariantStyle,
  tertiaryVariantStyle,
};
