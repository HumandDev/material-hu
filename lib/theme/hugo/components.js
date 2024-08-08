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
    // Button
    // MuiButtonBase: {
    //   defaultProps: {
    //     size: 'large',
    //   },
    // },
    MuiButton: {
        defaultProps: {
            size: 'large',
            variant: 'contained',
        },
        styleOverrides: {
            // colorPrimary: ({ theme }) => ({
            //   color: theme.palette.base?.white,
            //   textTransform: 'capitalize',
            // }),
            contained: ({ theme }) => {
                var _a, _b;
                return ({
                    backgroundColor: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[400],
                    '&:hover': {
                        backgroundColor: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.blueBrand[600],
                    },
                });
            },
            outlined: ({ theme }) => {
                var _a, _b, _c;
                return ({
                    color: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[800],
                    borderColor: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.blueBrand[200],
                    '&:hover': {
                        backgroundColor: (_c = theme.palette.base) === null || _c === void 0 ? void 0 : _c.blueBrand[200],
                    },
                });
            },
            text: ({ theme }) => {
                var _a, _b;
                return ({
                    color: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[800],
                    '&:hover': {
                        backgroundColor: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.greyTransparent['300p50'],
                    },
                });
            },
        },
    },
};
