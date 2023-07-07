import { ThemeOptions, colors } from '../..';
import type { Direction } from '../material-hu';
import { createTypography } from './create-typography';
import { createComponents } from './create-components';

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
        // lighter: '#DFEDFF'
      },
      secondary: {
        main: colors.grey[600]// '#757575',
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50'
      },
      text: {
        primary: '#172b4d',
        secondary: '#6b778c'
      },
      warning: {
        contrastText: '#ffffff',
        main: '#ff9800'
      }
    },
  };
};
