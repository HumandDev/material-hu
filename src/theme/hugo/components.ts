import { ThemeOptions } from '@mui/material';
import { getSizeInPixels } from '../../components/Avatar';

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
  MuiAvatarGroup: {
    styleOverrides: {
      root: () => ({
        position: 'static',
      }),
      avatar: ({ ownerState }) => ({
        position: 'static',
        height: getSizeInPixels(ownerState.size),
        width: getSizeInPixels(ownerState.size),
        // size
        // quiero evitar armar el wrapper porque hay que mantener la misma logica
        // con la que venimos laburando. Asi que voy a buscar la forma de mandar los sizes
        // y que impacten en los avatars hijos y ver si se puede evitar dos veces las mismas cosas
      }),
    },
  },
};
