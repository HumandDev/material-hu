import { ThemeOptions, buttonClasses, alpha } from '@mui/material';
import { colorPalette } from './colors';
import {
  buttonVariants,
  commonButtonRootStyle,
  customShadow,
  primaryVariantStyle,
  secondaryVariantStyle,
  tertiaryVariantStyle,
} from './button';

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
      disableRipple: true,
      size: 'medium', // TODO: change this with large when HuGo Button is applied
      variant: 'text', // TODO: change this with tertiary when HuGo Button is applied
    },
    styleOverrides: {
      root: ({ theme }) => ({
        textTransform: 'none',
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
      /* TODO: remove when HuGo Button is applied ↓ */
      sizeMedium: ({ theme }) => ({
        minWidth: '104px',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
      }),
      /* TODO: remove when HuGo Button is applied */
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
        /* TODO: remove when HuGo Button is applied ↓ */
        ...tertiaryVariantStyle(theme),
        /* TODO: remove when HuGo Button is applied */
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
      root: ({ ownerState: { orientation } }) => ({
        backgroundColor: colorPalette.border.neutralDivider,
        borderColor: colorPalette.border.neutralDivider,
        height: orientation === 'vertical' ? 'auto' : 0,
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
