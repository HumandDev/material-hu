import {
  Theme,
  ThemeOptions,
  createTheme as createMuiTheme,
} from '@mui/material';
import { createBaseColors } from './colors';
import { typography } from './typography';
import { shadows } from './shadows';
import { components } from './components';

const createThemeObject = (primaryColor?: string): ThemeOptions => ({
  palette: createBaseColors(primaryColor) as any,
  typography,
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  direction: 'ltr',
  shadows,
  components,
});

export const createHuGoTheme = (primaryColor?: string): Theme => {
  const themeObject = createThemeObject(primaryColor);
  let theme = createMuiTheme(themeObject);

  return theme;
};
