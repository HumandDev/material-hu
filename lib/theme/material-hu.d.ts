/// <reference types="react" />
import { Theme } from '@mui/material';
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
}
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
}
declare module '@mui/material/Radio' {
    interface RadioPropsColorOverrides {
        humand: true;
    }
}
declare module '@mui/material/CircularProgress' {
    interface CircularProgressProps {
        dark?: boolean;
        sizes?: 'small' | 'medium';
    }
}
export declare const createNewTheme: (config?: ThemeConfig) => Theme;
export {};
