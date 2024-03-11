import {
  Theme,
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from '@mui/material';
import createOptions from './base/create-options';

declare module '@mui/material/styles/createPalette' {
  type ColorRange = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  type Palette = {
    neutral: ColorRange;
  };

  type PaletteColor = {
    lightest?: string;
    darkest?: string;
    alpha4?: string;
    alpha8?: string;
    alpha12?: string;
    alpha30?: string;
    alpha50?: string;
  };

  type PaletteOptions = {
    neutral?: ColorRange;
  };

  type TypeBackground = {
    paper: string;
    default: string;
  };
}

export type ColorPreset = 'blue' | 'green' | 'indigo' | 'purple';

export type Contrast = 'normal' | 'high';

export type Direction = 'ltr' | 'rtl';

export type PaletteMode = 'dark' | 'light';

declare module '@mui/material/TableCell' {
  type TableCellPropsVariantOverrides = {
    titleField: true;
    shortField: true;
    userField: true;
  };
}
type ThemeConfig = {
  responsiveFontSizes?: boolean;
  colorPreset?: string;
  contrast?: Contrast;
  direction?: Direction;
  paletteMode?: PaletteMode;
};

declare module '@mui/material/styles' {
  type Palette = {
    humand: Palette['primary'];
  };

  type PaletteOptions = {
    humand?: PaletteOptions['primary'];
  };
}

declare module '@mui/material/Button' {
  type ButtonPropsColorOverrides = {
    humand: true;
  };
}

declare module '@mui/material/SvgIcon' {
  type SvgIconPropsColorOverrides = {
    humand: true;
  };
}

declare module '@mui/material/IconButton' {
  type IconButtonPropsColorOverrides = {
    humand: true;
  };
}

declare module '@mui/material/Radio' {
  type RadioPropsColorOverrides = {
    humand: true;
  };
}

export const createNewTheme = (config: ThemeConfig = {}): Theme => {
  let theme = createMuiTheme(
    // Base options available for both dark and light palette modes
    createOptions({
      direction: config.direction,
      color: config.colorPreset,
    }),
  );

  theme = createMuiTheme(theme, {
    // Custom colors created with augmentColor go here
    palette: {
      humand: theme.palette.augmentColor({
        color: {
          main: '#1976D2',
        },
        name: 'humand',
      }),
    },
  });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
