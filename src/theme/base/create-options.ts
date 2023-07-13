import { ThemeOptions, colors, type Direction } from '@mui/material';
import createTypography from './create-typography';
import createComponents from './create-components';

interface Config {
  direction?: Direction;
  color?: string
}

// Here we do not modify the "palette" and "shadows" because "light" and "dark" mode
// may have different values.

export const createOptions = (config: Config): ThemeOptions => {
  const { direction = 'ltr' } = config;

  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440
      }
    },
    components: createComponents(),
    direction,
    shape: {
      borderRadius: 8
    },
    typography: createTypography(),
    palette: {
      primary: {
        contrastText: '#ffffff',
        main: config?.color || 'blue',
      },
      secondary: {
        main: colors.grey[600]
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50'
      },
      text: {
        primary: '#111927',
        secondary: '#6C737F'
      },
      warning: {
        contrastText: '#ffffff',
        main: '#ff9800'
      }
    },
  };
};

export default createOptions;
