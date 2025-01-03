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
import { Stack, Divider, ListItem as MuiListItem, ListItemButton as MuiListItemButton, IconButton as MuiIconButton, } from '@mui/material';
import ListItemSkeleton from './ListItemSkeleton';
import { Title } from '../Title/Title';
import { Avatar } from '../Avatar/Avatar';
export const ListItem = ({ id, sx, loading = false, onClick, text, avatar, action, divider, sideContent, }) => {
    const Container = onClick
        ? (props) => (_jsx(MuiListItemButton, Object.assign({}, props, { onClick: onClick })))
        : (props) => _jsx(MuiListItem, Object.assign({}, props));
    const handleClick = (callback) => (event) => {
        event.stopPropagation();
        callback && callback(event);
    };
    const _a = action || {}, { Icon: ActionIcon } = _a, actionRest = __rest(_a, ["Icon"]);
    return (_jsxs(Stack, { id: id, sx: Object.assign({ minHeight: '40px', flexDirection: 'column' }, sx), children: [loading && _jsx(ListItemSkeleton, {}), !loading && (_jsxs(Container, { sx: {
                    p: 2,
                    gap: 0.5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }, children: [_jsxs(Stack, { sx: {
                            gap: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                        }, children: [avatar && _jsx(Avatar, Object.assign({}, avatar)), text && (_jsx(Title, Object.assign({}, text, { variant: "S" })))] }), _jsxs(Stack, { sx: {
                            gap: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                        }, children: [sideContent, action && (_jsx(MuiIconButton, Object.assign({ edge: "end", size: "small", sx: {
                                    svg: {
                                        width: 'inherit',
                                        height: 'inherit',
                                    },
                                } }, actionRest, { onClick: handleClick(action.onClick), children: ActionIcon && _jsx(ActionIcon, { size: 24 }) })))] })] })), divider && _jsx(Divider, { variant: "middle" })] }));
};
export default ListItem;
