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
    MuiAvatarGroup: {
        styleOverrides: {
            avatar: () => ({
                position: 'static',
            }),
        },
    },
};
