/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { ThemeOptions } from '@mui/material';

// TYPOGRAPHY
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

const typographyWeight = {
  fontWeightRegular: 400,
  fontWeightSemiBold: 500,
};

export const typography: ThemeOptions['typography'] = {
  ...typographyWeight,
  fontFamily: 'Roboto',
  globalXXS: {
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: '140%',
    fontWeight: typographyWeight.fontWeightRegular,
    letterSpacing: 0.2,
  },
  globalXS: {
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: '140%',
    fontWeight: typographyWeight.fontWeightRegular,
    letterSpacing: 0.2,
  },
  globalS: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: '140%',
    fontWeight: typographyWeight.fontWeightRegular,
    letterSpacing: 0.2,
  },
  globalM: {
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: '140%',
    fontWeight: typographyWeight.fontWeightRegular,
    letterSpacing: 0.2,
  },
  globalL: {
    fontFamily: 'Roboto',
    fontSize: 24,
    lineHeight: '140%',
    fontWeight: typographyWeight.fontWeightRegular,
    letterSpacing: 0.2,
  },
  globalXL: {
    fontFamily: 'Roboto',
    fontSize: 32,
    lineHeight: '130%',
    fontWeight: typographyWeight.fontWeightRegular,
    letterSpacing: 0.2,
  },
  globalXXL: {
    fontFamily: 'Roboto',
    fontSize: 36,
    lineHeight: '140%',
    fontWeight: typographyWeight.fontWeightRegular,
    letterSpacing: 0.2,
  },
};
