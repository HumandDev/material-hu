import { createTheme as createMuiTheme, responsiveFontSizes, } from '@mui/material';
import { colorPalette } from './colors';
import { typography } from './typography';
import { shadows } from './shadows';
import { components } from './components';
const themeObject = {
    palette: colorPalette,
    typography,
    shape: {
        borderRadius: 8,
    },
    spacing: 8,
    direction: 'ltr',
    shadows,
    components,
};
export const createHuGoTheme = () => {
    let theme = createMuiTheme(themeObject);
    if (false) {
        theme = responsiveFontSizes(theme);
    }
    return theme;
};
