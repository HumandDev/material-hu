import { ThemeOptions, buttonClasses, alpha } from '@mui/material';
import { colorPalette } from './colors';

const customShadow = {
  outlinedFocusedVisible: '0px -4px 4px 0px #AAAABA73 inset',
  containedFocusedVisible: '0px -4px 4px 0px #00000040 inset',
};

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
    },
    styleOverrides: {
      root: {
        textTransform: 'capitalize',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
        borderRadius: '8px',
      },
      contained: ({ theme }) => ({
        backgroundColor: theme.palette.base?.blueBrand[400],
        '&:hover': {
          backgroundColor: theme.palette.base?.blueBrand[600],
        },
        [`&.${buttonClasses.focusVisible}`]: {
          boxShadow: customShadow.containedFocusedVisible,
        },
        [`&.${buttonClasses.disabled}`]: {
          color: theme.palette.base?.grey[600],
          backgroundColor: theme.palette.base?.greyTransparent['300p50'],
        },
      }),
      outlined: ({ theme }) => ({
        color: theme.palette.base?.blueBrand[800],
        borderColor: theme.palette.base?.blueBrand[200],
        '&:hover': {
          backgroundColor: theme.palette.base?.blueBrand[100],
          borderColor: theme.palette.base?.blueBrand[200],
        },
        [`&.${buttonClasses.focusVisible}`]: {
          boxShadow: customShadow.outlinedFocusedVisible,
        },
        [`&.${buttonClasses.disabled}`]: {
          color: theme.palette.base?.grey[600],
          backgroundColor: theme.palette.base?.white,
          borderColor: theme.palette.base?.grey[300],
        },
      }),
      text: ({ theme }) => ({
        color: theme.palette.base?.blueBrand[800],
        '&:hover': {
          backgroundColor: theme.palette.base?.greyTransparent['300p50'],
        },
        [`&.${buttonClasses.focusVisible}`]: {
          boxShadow: customShadow.outlinedFocusedVisible,
          backgroundColor: theme.palette.base?.greyTransparent['300p50'],
        },
        [`&.${buttonClasses.disabled}`]: {
          color: theme.palette.base?.grey[600],
        },
      }),
      sizeLarge: ({ theme }) => ({
        minWidth: '256px',
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      }),
      sizeMedium: ({ theme }) => ({
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
      root: ({ theme }) => ({
        textTransform: 'capitalize',
        boxShadow: 'none',
        maxWidth: '224px',
        width: 'fit-content',
        height: 'fit-content',
        padding: theme.spacing(2),
        fontSize: '18px',
        lineHeight: 1,
        '&:hover': {
          boxShadow: 'none',
        },
        '& > svg': {
          marginLeft: theme.spacing(0.5),
        },
      }),
      sizeMedium: ({ theme }) => ({
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        fontSize: '14px',
      }),
      circular: {
        borderRadius: '9999px',
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
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'transparent',
        svg: {
          stroke: theme.palette.base?.grey[800],
        },
        '&:hover': {
          backgroundColor: theme.palette.base?.greyTransparent['300p50'],
        },
        '&:disabled': {
          svg: {
            stroke: theme.palette.base?.grey[600],
          },
        },
        ':focus-visible': {
          backgroundColor: theme.palette.base?.greyTransparent['300p50'],
          boxShadow: customShadow.outlinedFocusedVisible,
        },
      }),
      colorSecondary: ({ theme }) => ({
        backgroundColor: theme.palette.base?.white,
        borderColor: theme.palette.base?.blueBrand[200],
        svg: {
          stroke: theme.palette.base?.blueBrand[800],
        },
        '&:hover': {
          backgroundColor: theme.palette.base?.lilac[100],
        },
        '&:disabled': {
          borderColor: theme.palette.base?.grey[300],
        },
      }),
      colorPrimary: ({ theme }) => ({
        backgroundColor: theme.palette.base?.blueBrand[400],
        svg: {
          stroke: theme.palette.base?.white,
        },
        '&:hover': {
          backgroundColor: theme.palette.base?.blueBrand[600],
        },
        '&:disabled': {
          backgroundColor: theme.palette.base?.greyTransparent['300p50'],
        },
        '&:focus-visible': {
          backgroundColor: theme.palette.base?.blueBrand[600],
          boxShadow: customShadow.containedFocusedVisible,
        },
      }),
      sizeLarge: ({ theme }) => ({
        padding: theme.spacing(1),
      }),
      sizeMedium: ({ theme }) => ({
        padding: theme.spacing(0.5),
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
  MuiBreadcrumbs: {
    defaultProps: {
      maxItems: 5,
    },
  },
};
