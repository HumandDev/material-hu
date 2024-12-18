import { buttonClasses, alpha } from '@mui/material';
import { colorPalette } from './colors';
import { buttonVariants, commonButtonRootStyle, customShadow, primaryVariantStyle, secondaryVariantStyle, tertiaryVariantStyle, } from './button';
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
            disableRipple: true,
            size: 'medium',
            variant: 'text', // TODO: change this with tertiary when HuGo Button is applied
        },
        styleOverrides: {
            root: ({ theme }) => (Object.assign(Object.assign({ textTransform: 'none' }, commonButtonRootStyle(theme)), { variants: buttonVariants(theme) })),
            /* TODO: remove when HuGo Button is applied ↓ */
            contained: ({ theme }) => primaryVariantStyle(theme),
            outlined: ({ theme }) => secondaryVariantStyle(theme),
            text: ({ theme }) => tertiaryVariantStyle(theme),
            /* TODO: remove when HuGo Button is applied */
            sizeLarge: ({ theme }) => ({
                minWidth: '200px',
                paddingTop: theme.spacing(1.5),
                paddingBottom: theme.spacing(1.5),
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
            }),
            /* TODO: remove when HuGo Button is applied ↓ */
            sizeMedium: ({ theme }) => ({
                minWidth: '104px',
                paddingTop: theme.spacing(1),
                paddingBottom: theme.spacing(1),
                paddingLeft: theme.spacing(1.5),
                paddingRight: theme.spacing(1.5),
            }),
            /* TODO: remove when HuGo Button is applied */
            sizeSmall: ({ theme }) => ({
                minWidth: '104px',
                paddingTop: theme.spacing(1),
                paddingBottom: theme.spacing(1),
                paddingLeft: theme.spacing(1.5),
                paddingRight: theme.spacing(1.5),
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
            root: ({ theme, ownerState }) => {
                var _a, _b, _c;
                return (Object.assign({ textTransform: 'capitalize', boxShadow: 'none', maxWidth: '224px', width: 'fit-content', height: 'fit-content', padding: theme.spacing(2), fontSize: '18px', lineHeight: 1, gap: 8, '&:hover': {
                        boxShadow: 'none',
                        backgroundColor: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[600],
                    }, [`&.${buttonClasses.focusVisible}`]: {
                        boxShadow: customShadow.outlinedFocusedVisible,
                        backgroundColor: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.blueBrand[600],
                    }, [`&.${buttonClasses.disabled}`]: {
                        svg: {
                            stroke: (_c = theme.palette.base) === null || _c === void 0 ? void 0 : _c.grey[600],
                        },
                    } }, (ownerState.size === 'large' && {
                    maxWidth: '224px',
                    padding: theme.spacing(2),
                    fontSize: '18px',
                    height: '52px',
                    '& > svg': {
                        height: 24,
                        width: 24,
                    },
                })));
            },
            sizeSmall: ({ theme }) => ({
                paddingTop: theme.spacing(1),
                paddingBottom: theme.spacing(1),
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                fontSize: '14px',
                height: '36px',
                '& > svg': {
                    height: 16,
                    width: 16,
                },
            }),
            circular: {
                borderRadius: '32px',
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
                        boxShadow: customShadow.containedFocusedVisible,
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
            variant: 'tertiary',
        },
        styleOverrides: {
            root: ({ theme }) => (Object.assign(Object.assign(Object.assign({}, commonButtonRootStyle(theme)), tertiaryVariantStyle(theme)), { 
                /* TODO: remove when HuGo Button is applied */
                variants: buttonVariants(theme) })),
            /* TODO: remove when HuGo Button is applied ↓ */
            colorPrimary: ({ theme }) => primaryVariantStyle(theme),
            colorSecondary: ({ theme }) => secondaryVariantStyle(theme),
            /* TODO: remove when HuGo Button is applied */
            sizeLarge: ({ theme }) => ({
                padding: theme.spacing(1),
            }),
            /* TODO: remove when HuGo Button is applied ↓ */
            sizeMedium: ({ theme }) => ({
                padding: theme.spacing(1),
            }),
            /* TODO: remove when HuGo Button is applied */
            sizeSmall: ({ theme }) => ({
                padding: theme.spacing(0.5),
                svg: {
                    width: '16px',
                    height: '16px',
                },
            }),
        },
    },
    MuiDivider: {
        styleOverrides: {
            root: () => ({
                borderWidth: '1px',
                backgroundColor: colorPalette.border.neutralDivider,
                height: 'auto',
            }),
        },
    },
    MuiSkeleton: {
        styleOverrides: {
            root: {
                backgroundColor: colorPalette.base.grey[300],
                '&:after': {
                    background: `linear-gradient(90deg, transparent, ${alpha(colorPalette.base.white, 0.3)}, transparent)`,
                },
            },
        },
    },
};
