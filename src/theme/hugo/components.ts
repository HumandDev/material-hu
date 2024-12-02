import { ThemeOptions, buttonClasses, alpha, Theme } from '@mui/material';
import { colorPalette } from './colors';

const customShadow = {
  outlinedFocusedVisible: '0px -4px 4px 0px #AAAABA73 inset',
  containedFocusedVisible: '0px -4px 4px 0px #00000040 inset',
};

const commonButtonRootStyle = (theme: Theme) => ({
  boxShadow: 'none',
  borderRadius: '8px',
  border: '1px solid',
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
  color: theme.palette.base?.blueBrand[800],
  borderColor: theme.palette.base?.blueBrand[200],
  backgroundColor: theme.palette.base?.white,
  svg: {
    stroke: theme.palette.base?.blueBrand[800],
  },
  '&:hover': {
    backgroundColor: theme.palette.base?.blueBrand[100],
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

export const components: ThemeOptions['components'] = {
  MuiTypography: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontFamily: theme.typography.fontFamily,
      }),
    },
  },
  MuiBadge: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.base?.white,
      }),
      colorPrimary: ({ theme }) => ({
        backgroundColor: theme.palette.base?.blueBrand[400],
      }),
      colorSuccess: ({ theme }) => ({
        backgroundColor: theme.palette.base?.green[400],
      }),
      colorWarning: ({ theme }) => ({
        backgroundColor: theme.palette.base?.yellow[400],
      }),
      colorError: ({ theme }) => ({
        backgroundColor: theme.palette.base?.red[400],
      }),
      dot: ({ theme }) => ({
        borderColor: theme.palette.base?.white,
        borderStyle: 'solid',
        borderWidth: 1,
      }),
      standard: () => ({
        // text style globalXXS to avoid a wrapper component
        fontFamily: 'Roboto',
        fontSize: 12,
        lineHeight: '140%',
        fontWeight: 400,
        letterSpacing: 0.2,
        // text style globalXXS
        maxHeight: 20,
        minHeight: 20,
        maxWidth: 25,
        minWidth: 20,
      }),
    },
  },
  MuiButton: {
    defaultProps: {
      size: 'large',
      disableRipple: true,
      variant: 'text', // TODO: change this with tertiary when HuGo Button is applied
    },
    styleOverrides: {
      root: ({ theme }) => ({
        textTransform: 'capitalize',
        ...commonButtonRootStyle(theme),
        variants: buttonVariants(theme),
      }),
      /* TODO: remove when HuGo Button is applied ↓ */
      contained: ({ theme }) => primaryVariantStyle(theme),
      outlined: ({ theme }) => secondaryVariantStyle(theme),
      text: ({ theme }) => tertiaryVariantStyle(theme),
      /* TODO: remove when HuGo Button is applied */
      sizeLarge: ({ theme }) => ({
        minWidth: '200px',
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      }),
      sizeSmall: ({ theme }) => ({
        minWidth: '104px',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
      }),
      startIcon: () => ({
        marginRight: '4px',
      }),
      endIcon: () => ({
        marginLeft: '4px',
      }),
    },
  },
  MuiFab: {
    defaultProps: {
      color: 'primary',
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        textTransform: 'capitalize',
        boxShadow: 'none',
        maxWidth: '224px',
        width: 'fit-content',
        height: 'fit-content',
        padding: theme.spacing(2),
        fontSize: '18px',
        lineHeight: 1,
        gap: 8,
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: theme.palette.base?.blueBrand[600],
        },
        [`&.${buttonClasses.focusVisible}`]: {
          boxShadow: customShadow.outlinedFocusedVisible,
          backgroundColor: theme.palette.base?.blueBrand[600],
        },
        [`&.${buttonClasses.disabled}`]: {
          svg: {
            stroke: theme.palette.base?.grey[600],
          },
        },
        ...(ownerState.size === 'large' && {
          maxWidth: '224px',
          padding: theme.spacing(2),
          fontSize: '18px',
          height: '52px',
          '& > svg': {
            height: 24,
            width: 24,
          },
        }),
      }),
      sizeSmall: ({ theme }) => ({
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        fontSize: '14px',
        height: '36px',
        '& > svg': {
          height: 16,
          width: 16,
        },
      }),
      circular: {
        borderRadius: '32px',
      },
      primary: ({ theme }) => ({
        backgroundColor: theme.palette.base?.blueBrand[400],
        color: theme.palette.base?.white,
        '&:hover': {
          backgroundColor: theme.palette.base?.blueBrand[600],
        },
        '&:disabled': {
          backgroundColor: theme.palette.base?.greyTransparent['300p50'],
          color: theme.palette.base?.grey[600],
        },
        '&:focus-visible': {
          boxShadow: customShadow.containedFocusedVisible,
        },
        svg: {
          stroke: theme.palette.base?.white,
        },
      }),
    },
  },
  MuiIconButton: {
    defaultProps: {
      size: 'large',
      disableRipple: true,
      variant: 'tertiary',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        ...commonButtonRootStyle(theme),
        variants: buttonVariants(theme),
      }),
      /* TODO: remove when HuGo Button is applied ↓ */
      colorPrimary: ({ theme }) => primaryVariantStyle(theme),
      colorSecondary: ({ theme }) => secondaryVariantStyle(theme),
      /* TODO: remove when HuGo Button is applied */
      sizeLarge: ({ theme }) => ({
        padding: theme.spacing(1),
      }),
      /* TODO: remove when HuGo Button is applied ↓ */
      sizeMedium: ({ theme }) => ({
        padding: theme.spacing(1),
      }),
      /* TODO: remove when HuGo Button is applied */
      sizeSmall: ({ theme }) => ({
        padding: theme.spacing(0.5),
        svg: {
          width: '16px',
          height: '16px',
        },
      }),
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: () => ({
        borderWidth: '1px',
        color: colorPalette.border.neutralDivider,
        height: 'auto',
      }),
    },
  },
  MuiSkeleton: {
    styleOverrides: {
      root: {
        backgroundColor: colorPalette.base.grey[300],
        '&:after': {
          background: `linear-gradient(90deg, transparent, ${alpha(colorPalette.base.white, 0.3)}, transparent)`,
        },
      },
    },
  },
};
