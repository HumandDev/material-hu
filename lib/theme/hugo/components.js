import { buttonClasses } from '@mui/material';
export const components = {
    MuiTypography: {
        styleOverrides: {
            root: ({ theme }) => ({
                fontFamily: theme.typography.fontFamily,
            }),
        },
    },
    MuiBadge: {
        styleOverrides: {
            root: ({ theme }) => {
                var _a;
                return ({
                    color: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.white,
                });
            },
            colorPrimary: ({ theme }) => {
                var _a;
                return ({
                    backgroundColor: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[400],
                });
            },
            colorSuccess: ({ theme }) => {
                var _a;
                return ({
                    backgroundColor: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.green[400],
                });
            },
            colorWarning: ({ theme }) => {
                var _a;
                return ({
                    backgroundColor: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.yellow[400],
                });
            },
            colorError: ({ theme }) => {
                var _a;
                return ({
                    backgroundColor: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.red[400],
                });
            },
            dot: ({ theme }) => {
                var _a;
                return ({
                    borderColor: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.white,
                    borderStyle: 'solid',
                    borderWidth: 1,
                });
            },
            standard: () => ({
                // text style globalXXS to avoid a wrapper component
                fontFamily: 'Roboto',
                fontSize: 12,
                lineHeight: '140%',
                fontWeight: 400,
                letterSpacing: 0.2,
                // text style globalXXS
                maxHeight: 20,
                minHeight: 20,
                maxWidth: 25,
                minWidth: 20,
            }),
        },
    },
    MuiButton: {
        defaultProps: {
            size: 'large',
            disableRipple: true,
        },
        styleOverrides: {
            root: {
                textTransform: 'capitalize',
                boxShadow: 'none',
                '&:hover': {
                    boxShadow: 'none',
                },
                borderRadius: '8px',
            },
            contained: ({ theme }) => {
                var _a, _b, _c, _d;
                return ({
                    backgroundColor: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[400],
                    '&:hover': {
                        backgroundColor: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.blueBrand[600],
                    },
                    [`&.${buttonClasses.focusVisible}`]: {
                        boxShadow: '0px -4px 4px 0px #00000040 inset',
                    },
                    [`&.${buttonClasses.disabled}`]: {
                        color: (_c = theme.palette.base) === null || _c === void 0 ? void 0 : _c.grey[600],
                        backgroundColor: (_d = theme.palette.base) === null || _d === void 0 ? void 0 : _d.greyTransparent['300p50'],
                    },
                });
            },
            outlined: ({ theme }) => {
                var _a, _b, _c, _d, _e, _f, _g;
                return ({
                    color: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[800],
                    borderColor: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.blueBrand[200],
                    '&:hover': {
                        backgroundColor: (_c = theme.palette.base) === null || _c === void 0 ? void 0 : _c.blueBrand[100],
                        borderColor: (_d = theme.palette.base) === null || _d === void 0 ? void 0 : _d.blueBrand[200],
                    },
                    [`&.${buttonClasses.focusVisible}`]: {
                        boxShadow: '0px -4px 4px 0px #AAAABA73 inset',
                    },
                    [`&.${buttonClasses.disabled}`]: {
                        color: (_e = theme.palette.base) === null || _e === void 0 ? void 0 : _e.grey[600],
                        backgroundColor: (_f = theme.palette.base) === null || _f === void 0 ? void 0 : _f.white,
                        borderColor: (_g = theme.palette.base) === null || _g === void 0 ? void 0 : _g.grey[300],
                    },
                });
            },
            text: ({ theme }) => {
                var _a, _b, _c, _d;
                return ({
                    color: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[800],
                    '&:hover': {
                        backgroundColor: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.greyTransparent['300p50'],
                    },
                    [`&.${buttonClasses.focusVisible}`]: {
                        boxShadow: '0px -4px 4px 0px #AAAABA73 inset',
                        backgroundColor: (_c = theme.palette.base) === null || _c === void 0 ? void 0 : _c.greyTransparent['300p50'],
                    },
                    [`&.${buttonClasses.disabled}`]: {
                        color: (_d = theme.palette.base) === null || _d === void 0 ? void 0 : _d.grey[600],
                    },
                });
            },
            sizeLarge: () => ({
                minWidth: '256px',
                paddingTop: '12px',
                paddingBottom: '12px',
                paddingLeft: '16px',
                paddingRight: '16px',
            }),
            sizeMedium: () => ({
                minWidth: '104px',
                paddingTop: '8px',
                paddingBottom: '8px',
                paddingLeft: '12px',
                paddingRight: '12px',
            }),
            startIcon: () => ({
                marginRight: '4px',
            }),
            endIcon: () => ({
                marginLeft: '4px',
            }),
        },
    },
    MuiFab: {
        defaultProps: {
            color: 'primary',
            disableRipple: true,
        },
        styleOverrides: {
            root: {
                textTransform: 'capitalize',
                boxShadow: 'none',
                maxWidth: '224px',
                width: 'fit-content',
                height: 'fit-content',
                padding: '16px',
                fontSize: '18px',
                lineHeight: 1,
                '&:hover': {
                    boxShadow: 'none',
                },
            },
            sizeMedium: {
                paddingTop: '8px',
                paddingBottom: '8px',
                paddingLeft: '16px',
                paddingRight: '16px',
                fontSize: '14px',
            },
            circular: {
                borderRadius: '9999px',
            },
            primary: ({ theme }) => {
                var _a, _b, _c, _d, _e, _f;
                return ({
                    backgroundColor: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[400],
                    color: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.white,
                    '&:hover': {
                        backgroundColor: (_c = theme.palette.base) === null || _c === void 0 ? void 0 : _c.blueBrand[600],
                    },
                    '&:disabled': {
                        backgroundColor: (_d = theme.palette.base) === null || _d === void 0 ? void 0 : _d.greyTransparent['300p50'],
                        color: (_e = theme.palette.base) === null || _e === void 0 ? void 0 : _e.grey[600],
                    },
                    '&:focus-visible': {
                        boxShadow: '0px -4px 4px 0px #00000040 inset',
                    },
                    svg: {
                        stroke: (_f = theme.palette.base) === null || _f === void 0 ? void 0 : _f.white,
                    },
                });
            },
        },
    },
    MuiIconButton: {
        defaultProps: {
            size: 'large',
            disableRipple: true,
        },
        styleOverrides: {
            root: ({ theme }) => {
                var _a, _b, _c, _d;
                return ({
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'transparent',
                    svg: {
                        stroke: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.grey[800],
                    },
                    '&:hover': {
                        backgroundColor: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.greyTransparent['300p50'],
                    },
                    '&:disabled': {
                        svg: {
                            stroke: (_c = theme.palette.base) === null || _c === void 0 ? void 0 : _c.grey[600],
                        },
                    },
                    ':focus-visible': {
                        backgroundColor: (_d = theme.palette.base) === null || _d === void 0 ? void 0 : _d.greyTransparent['300p50'],
                        boxShadow: '0px -4px 4px 0px #AAAABA73 inset',
                    },
                });
            },
            colorSecondary: ({ theme }) => {
                var _a, _b, _c, _d, _e;
                return ({
                    backgroundColor: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.white,
                    borderColor: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.blueBrand[200],
                    svg: {
                        stroke: (_c = theme.palette.base) === null || _c === void 0 ? void 0 : _c.blueBrand[800],
                    },
                    '&:hover': {
                        backgroundColor: (_d = theme.palette.base) === null || _d === void 0 ? void 0 : _d.lilac[100],
                    },
                    '&:disabled': {
                        borderColor: (_e = theme.palette.base) === null || _e === void 0 ? void 0 : _e.grey[300],
                    },
                });
            },
            colorPrimary: ({ theme }) => {
                var _a, _b, _c, _d, _e;
                return ({
                    backgroundColor: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[400],
                    svg: {
                        stroke: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.white,
                    },
                    '&:hover': {
                        backgroundColor: (_c = theme.palette.base) === null || _c === void 0 ? void 0 : _c.blueBrand[600],
                    },
                    '&:disabled': {
                        backgroundColor: (_d = theme.palette.base) === null || _d === void 0 ? void 0 : _d.greyTransparent['300p50'],
                    },
                    '&:focus-visible': {
                        backgroundColor: (_e = theme.palette.base) === null || _e === void 0 ? void 0 : _e.blueBrand[600],
                        boxShadow: '0px -4px 4px 0px #00000040 inset',
                    },
                });
            },
            sizeLarge: {
                padding: '8px',
            },
            sizeMedium: {
                padding: '4px',
            },
        },
    },
};
