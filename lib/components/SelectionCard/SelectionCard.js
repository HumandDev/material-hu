import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '@mui/material';
import CardContainer from '../CardContainer';
const SelectionCard = props => {
    var _a, _b, _c, _d, _e, _f;
    const { onClick, children, checked = false, sx } = props;
    const theme = useTheme();
    const handleOnClick = () => onClick(!checked);
    return (_jsx(CardContainer, { onClick: handleOnClick, sx: Object.assign(Object.assign({ '&': {
                cursor: 'pointer',
                backgroundColor: checked
                    ? (_a = theme.palette.hugoBackground) === null || _a === void 0 ? void 0 : _a.primaryBgLighter
                    : (_b = theme.palette.hugoBackground) === null || _b === void 0 ? void 0 : _b.neutralBgTerciary,
                borderColor: checked
                    ? (_c = theme.palette.base) === null || _c === void 0 ? void 0 : _c.blueBrand[400]
                    : (_d = theme.palette.border) === null || _d === void 0 ? void 0 : _d.neutralBorder,
            } }, (!checked && {
            '&:hover': {
                backgroundColor: (_e = theme.palette.hugoBackground) === null || _e === void 0 ? void 0 : _e.neutralBgTerciary,
                borderColor: (_f = theme.palette.border) === null || _f === void 0 ? void 0 : _f.primaryBorder,
            },
        })), sx), children: children }));
};
export default SelectionCard;
