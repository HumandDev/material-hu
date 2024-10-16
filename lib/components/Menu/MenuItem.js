import { jsx as _jsx } from "react/jsx-runtime";
import { MenuItem as MuiMenuItem, useTheme, } from '@mui/material';
export const MenuItem = ({ id, selected, disabled, onClick, sx, children, }) => {
    var _a;
    const theme = useTheme();
    return (_jsx(MuiMenuItem, { id: id, selected: selected, disabled: disabled, onClick: onClick, sx: Object.assign({ p: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', '&:hover': {
                backgroundColor: (_a = theme.palette.hugoBackground) === null || _a === void 0 ? void 0 : _a.neutralBgSecondary,
            } }, sx), children: children }));
};
export default MenuItem;
