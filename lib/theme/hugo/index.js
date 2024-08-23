import { createTheme as createMuiTheme, } from '@mui/material';
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
    return theme;
};
