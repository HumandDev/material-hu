import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material';
import createOptions from './base/create-options';
export const createNewTheme = (config = {}) => {
    let theme = createMuiTheme(
    // Base options available for both dark and light palette modes
    createOptions({
        direction: config.direction,
        color: config.colorPreset
    }));
    if (config.responsiveFontSizes) {
        theme = responsiveFontSizes(theme);
    }
    return theme;
};
