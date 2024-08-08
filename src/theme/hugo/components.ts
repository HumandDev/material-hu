import { ThemeOptions, buttonClasses } from '@mui/material';

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
  // Button
  // MuiButtonBase: {
  //   defaultProps: {
  //     size: 'large',
  //   },
  // },
  MuiButton: {
    defaultProps: {
      size: 'large',
      variant: 'contained',
    },
    styleOverrides: {
      // colorPrimary: ({ theme }) => ({
      //   color: theme.palette.base?.white,
      //   textTransform: 'capitalize',
      // }),
      root: {
        textTransform: 'capitalize',
        boxShadow: 'none',
        borderRadius: '8px',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      contained: ({ theme }) => ({
        backgroundColor: theme.palette.base?.blueBrand[400],
        '&:hover': {
          backgroundColor: theme.palette.base?.blueBrand[600],
        },
        [`&.${buttonClasses.focusVisible}`]: {
          boxShadow: '0px -4px 4px 0px #00000040 inset',
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
          boxShadow: '0px -4px 4px 0px #AAAABA73 inset',
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
          boxShadow: '0px -4px 4px 0px #AAAABA73 inset',
          backgroundColor: theme.palette.base?.greyTransparent['300p50'],
        },
        [`&.${buttonClasses.disabled}`]: {
          color: theme.palette.base?.grey[600],
        },
      }),
      sizeLarge: () => ({
        minWidth: '256px',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '16px',
        paddingRight: '16px',
      }),
      sizeMedium: () => ({
        minWidth: '104px',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '12px',
        paddingRight: '12px',
      }),
      startIcon: () => ({
        marginRight: '4px',
      }),
      endIcon: () => ({
        marginLeft: '4px',
      }),
    },
  },
};
