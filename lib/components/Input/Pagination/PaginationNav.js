import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import Skeleton from '../../Skeleton/Skeleton';
import PaginationItem from './PaginationItem';
export const PaginationNav = ({ loading = false, disabled = false, items, page, }) => (_jsxs(_Fragment, { children: [loading &&
            [1, 2, 3, 4].map(item => (_jsx(Skeleton, { width: 24, height: 24 }, item))), !loading && (_jsx(Stack, { component: "nav", children: _jsx(Stack, { component: "ul", sx: {
                    flexDirection: 'row',
                    gap: 1,
                    alignItems: 'center',
                    m: 0,
                    p: 0,
                }, children: items === null || items === void 0 ? void 0 : items.map((item, index) => (_jsx(PaginationItem, Object.assign({}, item, { selected: item.page === page, disabled: disabled || item.disabled }), index))) }) }))] }));
export default PaginationNav;
