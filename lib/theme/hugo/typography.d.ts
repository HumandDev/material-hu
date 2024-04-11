/// <reference types="react" />
import { ThemeOptions } from '@mui/material';
declare module '@mui/material/styles' {
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
export declare const typography: ThemeOptions['typography'];
