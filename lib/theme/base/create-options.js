import { colors } from '@mui/material';
import createTypography from './create-typography';
import createComponents from './create-components';
// Here we do not modify the "palette" and "shadows" because "light" and "dark" mode
// may have different values.
export const createOptions = (config) => {
    const { direction = 'ltr' } = config;
    return {
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1440
            }
        },
        components: createComponents(),
        direction,
        shape: {
            borderRadius: 8
        },
        typography: createTypography(),
        palette: {
            primary: {
                contrastText: '#ffffff',
                main: (config === null || config === void 0 ? void 0 : config.color) || 'blue',
                // lighter: '#DFEDFF'
            },
            secondary: {
                main: colors.grey[600] // '#757575',
            },
            success: {
                contrastText: '#ffffff',
                main: '#4caf50'
            },
            text: {
                primary: '#172b4d',
                secondary: '#6b778c'
            },
            warning: {
                contrastText: '#ffffff',
                main: '#ff9800'
            }
        },
    };
};
export default createOptions;
