/// <reference path="./mui.d.ts" />

import { Theme, createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material';
import createOptions from './base/create-options';

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

