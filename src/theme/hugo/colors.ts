import { alpha } from '@mui/material';

const createBaseColors = () => {
  const preBaseColors = {
    white: '#FFFFFF',
    grey: {
      100: '#FAFAFC',
      200: '#F2F2F7',
      300: '#E9E9F4',
      400: '#AAAABA',
      600: '#676779',
      800: '#3A3A45',
      900: '#17171C',
    },
    blueBrand: {
      100: '#EFF2FF',
      200: '#CAD5FE',
      400: '#496BE3',
      600: '#334FB3',
      800: '#213478',
    },
    green: {
      100: '#E8FCEB',
      200: '#C3EECA',
      400: '#4ED364',
      600: '#1CA332',
      800: '#006611',
    },
    red: {
      100: '#FFEFEF',
      200: '#FFD1D1',
      400: '#E74444',
      600: '#C52D2D',
      800: '#7F0B0B',
    },
    yellow: {
      100: '#FFF9E9',
      200: '#FFEBB8',
      400: '#F0B623',
      600: '#B88B1A',
      800: '#8A6300',
    },
    lilac: {
      100: '#F2EFFF',
      200: '#DAD1FF',
      400: '#886BFF',
      600: '#6347D1',
      800: '#311F7A',
    },
    lightBlue: {
      100: '#EFFCFF',
      200: '#D1F7FF',
      400: '#6FD1E7',
      600: '#30A2BC',
      800: '#1F6A7A',
    },
  };

  const base = {
    ...preBaseColors,
    greyTransparent: {
      '300p20': alpha(preBaseColors.grey[300], 0.2),
      '300p50': alpha(preBaseColors.grey[300], 0.5),
      '300p80': alpha(preBaseColors.grey[300], 0.8),
      '900p40': alpha(preBaseColors.grey[900], 0.4),
    },
  };

  const background = {
    neutralBg: base.grey[100],
    neutralBgSecondary: base.grey[200],
    neutralBgTransparent: base.greyTransparent['300p20'],
    neutralBgTerciary: base.white,
    primaryBgLighter: base.blueBrand[100],
    successBg: base.green[200],
    errorBg: base.red[100],
    warningBg: base.yellow[100],
    secondaryBg: base.lilac[100],
    infoBg: base.lightBlue[100],
  };

  const border = {
    neutralBorder: base.grey[300],
    neutralDivider: base.grey[300],
    primaryBorder: base.blueBrand[200],
    successBorder: base.green[200],
    errorBorder: base.red[200],
    warningBorder: base.yellow[200],
    secondaryBorder: base.lilac[200],
    infoBorder: base.lightBlue[200],
  };

  const textColors = {
    neutralText: base.grey[800],
    neutralTextLighter: base.grey[600],
    neutralTextDisasbled: base.grey[600],
    primaryText: base.blueBrand[800],
    neutralTextInverted: base.white,
    successText: base.green[800],
    errorText: base.red[800],
    warningText: base.yellow[800],
    secondaryText: base.lilac[800],
    infoText: base.lightBlue[800],
  };

  const graphics = {
    neutralGraphic: base.grey[600],
    primaryGraphic: base.blueBrand[600],
    successText: base.green[600],
    errorText: base.red[600],
    warningText: base.yellow[600],
    secondaryText: base.lilac[600],
    infoText: base.lightBlue[600],
  };

  const ilustrations = {
    neutralIlus: base.grey[400],
    primaryIlus: base.blueBrand[400],
    succIlus: base.green[400],
    erIlus: base.red[400],
    warnIlus: base.yellow[400],
    secondIlus: base.lilac[400],
    infoIlus: base.lightBlue[400],
  };

  const shadows = {
    '4dp': base.greyTransparent['900p40'],
    '8dp': base.grey[900],
    inverted: base.grey[900],
  };

  const buttons = {
    buttonPrimaryEnabled: base.blueBrand['400'],
    buttonPrimaryHover: base.blueBrand['600'],
    buttonSecondaryEnabled: base.greyTransparent['900p40'],
    buttonSecondaryHover: base.white,
    buttonTertiaryHover: base.blueBrand['100'],
  };

  return {
    base,
    background,
    border,
    textColors,
    graphics,
    ilustrations,
    shadows,
    buttons,
  };
};

export const colorPalette = createBaseColors();
export type BaseColorType = typeof colorPalette;
