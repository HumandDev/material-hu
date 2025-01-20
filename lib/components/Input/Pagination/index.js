import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import usePagination from '@mui/material/usePagination';
import { Paper } from '@mui/material';
import PaginationNav from './PaginationNav';
import PaginationChanger from './PaginationChanger';
export const Pagination = ({ loading = false, disabled = false, type = 'changer', totalPages, page, onChangePage = () => null, limit, limitOptions, onChangeLimit = () => null, }) => {
    const { items } = usePagination({
        count: totalPages,
        disabled,
        page,
        onChange: (_, newPage) => onChangePage(newPage),
    });
    return (_jsxs(Paper, { variant: "outlined", sx: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 1.5,
            gap: 3,
        }, children: [_jsx(PaginationNav, { loading: loading, items: items, page: page }), type === 'changer' && (_jsx(PaginationChanger, { limit: limit, limitOptions: limitOptions, onChange: onChangeLimit, loading: loading, disabled: disabled }))] }));
};
export default Pagination;
