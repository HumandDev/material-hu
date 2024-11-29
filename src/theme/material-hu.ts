/* eslint-disable @typescript-eslint/consistent-type-definitions */
import {
  Theme,
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from '@mui/material';
import createOptions from './base/create-options';
import { BaseColorType } from './hugo/colors';

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

declare module '@mui/material/TableCell' {
  interface TableCellPropsVariantOverrides {
    titleField: true;
    shortField: true;
    userField: true;
  }
}
type ThemeConfig = {
  responsiveFontSizes?: boolean;
  colorPreset?: string;
  contrast?: Contrast;
  direction?: Direction;
  paletteMode?: PaletteMode;
};

declare module '@mui/material/styles' {
  interface Palette extends Partial<BaseColorType> {
    humand: Palette['primary'];
  }

  interface PaletteOptions extends Partial<BaseColorType> {
    humand?: PaletteOptions['primary'];
  }

  interface TypographyOptions {
    globalXXS?: React.CSSProperties;
    globalXS?: React.CSSProperties;
    globalS?: React.CSSProperties;
    globalM?: React.CSSProperties;
    globalL?: React.CSSProperties;
    globalXL?: React.CSSProperties;
    globalXXL?: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    globalXXS?: React.CSSProperties;
    globalXS?: React.CSSProperties;
    globalS?: React.CSSProperties;
    globalM?: React.CSSProperties;
    globalL?: React.CSSProperties;
    globalXL?: React.CSSProperties;
    globalXXL?: React.CSSProperties;
  }

  interface ButtonVariantsOptions {
    primary: React.CSSProperties;
    secondary: React.CSSProperties;
    tertiary: React.CSSProperties;
  }

  interface LoadingButtonVariantsOptions {
    primary: React.CSSProperties;
    secondary: React.CSSProperties;
    tertiary: React.CSSProperties;
  }

  interface IconButtonVariantsOptions {
    primary: React.CSSProperties;
    secondary: React.CSSProperties;
    tertiary: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    globalXXS: true;
    globalXS: true;
    globalS: true;
    globalM: true;
    globalL: true;
    globalXL: true;
    globalXXL: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    humand: true;
  }
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    /* TODO: uncomment when the HuGo is applied in all Humand
    outlined: false;
    contained: false;
    text: false;
    */
  }

  interface ButtonPropsSizeOverrides {
    /* TODO: uncomment when the HuGo is applied in all Humand
    medium: false;
    */
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    humand: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    humand: true;
  }
  interface IconButtonPropsSizeOverrides {
    /* TODO: uncomment when the HuGo is applied in all Humand
    medium: false;
    */
  }

  interface IconButtonOwnProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
  }
}

declare module '@mui/material/Fab' {
  interface FabPropsSizeOverrides {
    /* TODO: uncomment when the HuGo is applied in all Humand
    medium: false;
    */
    large: true;
  }
}

declare module '@mui/material/Radio' {
  interface RadioPropsColorOverrides {
    humand: true;
  }
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
