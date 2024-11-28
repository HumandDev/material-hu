import { buttonClasses, alpha } from '@mui/material';
import { colorPalette } from './colors';
const customShadow = {
    outlinedFocusedVisible: '0px -4px 4px 0px #AAAABA73 inset',
    containedFocusedVisible: '0px -4px 4px 0px #00000040 inset',
};
const commonButtonRootStyle = (theme) => {
    var _a, _b;
    return ({
        boxShadow: 'none',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'transparent',
        '&:hover': {
            boxShadow: 'none',
        },
        [`&.${buttonClasses.disabled}`]: {
            svg: {
                stroke: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.grey[600],
            },
            color: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.grey[600],
        },
    });
};
const buttonVariants = (theme) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    return [
        {
            props: { variant: 'primary' },
            style: {
                color: (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.white,
                backgroundColor: (_b = theme.palette.base) === null || _b === void 0 ? void 0 : _b.blueBrand[400],
                svg: {
                    stroke: (_c = theme.palette.base) === null || _c === void 0 ? void 0 : _c.white,
                },
                '&:hover': {
                    backgroundColor: (_d = theme.palette.base) === null || _d === void 0 ? void 0 : _d.blueBrand[600],
                },
                [`&.${buttonClasses.focusVisible}`]: {
                    backgroundColor: (_e = theme.palette.base) === null || _e === void 0 ? void 0 : _e.blueBrand[600],
                    boxShadow: customShadow.containedFocusedVisible,
                },
                [`&.${buttonClasses.disabled}`]: {
                    color: (_f = theme.palette.base) === null || _f === void 0 ? void 0 : _f.grey[600],
                    backgroundColor: (_g = theme.palette.base) === null || _g === void 0 ? void 0 : _g.greyTransparent['300p50'],
                },
            },
        },
        {
            props: { variant: 'secondary' },
            style: {
                color: (_h = theme.palette.base) === null || _h === void 0 ? void 0 : _h.blueBrand[800],
                borderColor: (_j = theme.palette.base) === null || _j === void 0 ? void 0 : _j.blueBrand[200],
                backgroundColor: (_k = theme.palette.base) === null || _k === void 0 ? void 0 : _k.white,
                svg: {
                    stroke: (_l = theme.palette.base) === null || _l === void 0 ? void 0 : _l.blueBrand[800],
                },
                '&:hover': {
                    backgroundColor: (_m = theme.palette.base) === null || _m === void 0 ? void 0 : _m.blueBrand[100],
                },
                [`&.${buttonClasses.focusVisible}`]: {
                    boxShadow: customShadow.outlinedFocusedVisible,
                    backgroundColor: (_o = theme.palette.base) === null || _o === void 0 ? void 0 : _o.blueBrand[100],
                },
                [`&.${buttonClasses.disabled}`]: {
                    color: (_p = theme.palette.base) === null || _p === void 0 ? void 0 : _p.grey[600],
                    backgroundColor: (_q = theme.palette.base) === null || _q === void 0 ? void 0 : _q.white,
                    borderColor: (_r = theme.palette.base) === null || _r === void 0 ? void 0 : _r.grey[300],
                },
            },
        },
        {
            props: { variant: 'tertiary' },
            style: {
                color: (_s = theme.palette.base) === null || _s === void 0 ? void 0 : _s.blueBrand[800],
                '&:hover': {
                    backgroundColor: (_t = theme.palette.base) === null || _t === void 0 ? void 0 : _t.greyTransparent['300p50'],
                },
                [`&.${buttonClasses.focusVisible}`]: {
                    boxShadow: customShadow.outlinedFocusedVisible,
                    backgroundColor: (_u = theme.palette.base) === null || _u === void 0 ? void 0 : _u.greyTransparent['300p50'],
                },
            },
        },
    ];
};
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
            variant: 'tertiary',
        },
        styleOverrides: {
            root: ({ theme }) => (Object.assign(Object.assign({ textTransform: 'capitalize' }, commonButtonRootStyle(theme)), { variants: buttonVariants(theme) })),
            sizeLarge: ({ theme }) => ({
                minWidth: '200px',
                paddingTop: theme.spacing(1.5),
                paddingBottom: theme.spacing(1.5),
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
            }),
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
            variant: 'primary',
        },
        styleOverrides: {
            root: ({ theme }) => (Object.assign(Object.assign({}, commonButtonRootStyle(theme)), { variants: buttonVariants(theme) })),
            sizeLarge: ({ theme }) => ({
                padding: theme.spacing(1),
            }),
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
                color: colorPalette.border.neutralDivider,
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
