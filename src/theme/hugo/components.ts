import { ThemeOptions } from '@mui/material';

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
  /* MuiCircularProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        // Esto es solo un estilo de ejemplo que se aplicará globalmente
        // Los estilos específicos basados en `onDark` se manejan en el componente StyledCircularProgress
      }),
    },
  }, */
};
