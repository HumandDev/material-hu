import { Theme, createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material';
import createOptions from './base/create-options';

declare module '@mui/material/styles/createPalette' {
  interface ColorRange {
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
  }

  interface Palette {
    neutral: ColorRange;
  }

  interface PaletteColor {
    lightest?: string;
    darkest?: string;
    alpha4?: string;
    alpha8?: string;
    alpha12?: string;
    alpha30?: string;
    alpha50?: string;
  }

  interface PaletteOptions {
    neutral?: ColorRange;
  }

  interface TypeBackground {
    paper: string;
    default: string;
  }
}

export type ColorPreset = 'blue' | 'green' | 'indigo' | 'purple';

export type Contrast = 'normal' | 'high';

export type Direction = 'ltr' | 'rtl';

export type PaletteMode = 'dark' | 'light';

interface ThemeConfig {
  responsiveFontSizes?: boolean;
  colorPreset?: string,
  contrast?: Contrast;
  direction?: Direction;
  paletteMode?: PaletteMode;
}

export const createNewTheme = (config: ThemeConfig = {}): Theme => {
  
  let theme = createMuiTheme(
    // Base options available for both dark and light palette modes
    createOptions({
      direction: config.direction,
      color: config.colorPreset
    })
  );


  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
