import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, useTheme } from '@mui/material';
import CardContainer from '../CardContainer';
const SelectionCard = props => {
    var _a, _b, _c, _d, _e;
    const { onClick, children, checked = false, error, errorText } = props;
    const theme = useTheme();
    const handleOnClick = () => onClick(!checked);
    return (_jsxs(_Fragment, { children: [_jsx(CardContainer, { onClick: handleOnClick, sx: {
                    '&.MuiPaper-root': {
                        cursor: 'pointer',
                        backgroundColor: checked
                            ? (_a = theme.palette.hugoBackground) === null || _a === void 0 ? void 0 : _a.primaryBgLighter
                            : (_b = theme.palette.hugoBackground) === null || _b === void 0 ? void 0 : _b.neutralBgTerciary,
                        borderColor: checked
                            ? (_c = theme.palette.border) === null || _c === void 0 ? void 0 : _c.primaryBorder
                            : (_d = theme.palette.border) === null || _d === void 0 ? void 0 : _d.neutralBorder,
                    },
                }, children: children }), error && (_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", sx: {
                    color: (_e = theme.palette.textColors) === null || _e === void 0 ? void 0 : _e.errorText,
                    mb: 0.5,
                }, children: errorText }))] }));
};
export default SelectionCard;
