var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Avatar from '../Avatar/Avatar';
import CardContainer from '../CardContainer/CardContainer';
import Title from '../Title/Title';
import { IconZoomExclamation } from '@tabler/icons-react';
export const StateCard = (_a) => {
    var { sx, Icon = IconZoomExclamation } = _a, titleProps = __rest(_a, ["sx", "Icon"]);
    return (_jsxs(CardContainer, { sx: Object.assign({ width: '100%', '& .MuiCardContent-root': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
            } }, sx), children: [_jsx(Avatar, { size: "large", Icon: Icon }), _jsx(Title, Object.assign({ variant: "S", centered: true }, titleProps))] }));
};
export default StateCard;
