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
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { TableCell, TableSortLabel } from '@mui/material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import { useDebounce } from './useDebounce';
import PaginationController from '../components/pagination/PaginationController';
import buildSearchbar from '../components/pagination/SearchBarController';
const useServerTableSorting = (form) => {
    const { watch, setValue } = (form);
    const { order, orderBy } = watch();
    const createSortHandler = (property) => () => {
        const isAsc = orderBy === property && order === 'ASC';
        setValue('orderBy', property);
        setValue('order', isAsc ? 'DESC_NULLS_LAST' : 'ASC');
    };
    // this component replaces the TableCell inside TableHeader
    const TableSortingHeader = (_a) => {
        var { children, id, disabled } = _a, rest = __rest(_a, ["children", "id", "disabled"]);
        return (_jsx(TableCell, Object.assign({}, rest, { sortDirection: orderBy === id && order === 'ASC' ? 'asc' : 'desc', sx: { pr: 0 }, children: _jsx(TableSortLabel, { active: orderBy === id, direction: orderBy === id && order === 'ASC' ? 'asc' : 'desc', onClick: createSortHandler(id), disabled: disabled, IconComponent: ArrowDropDownIcon, children: children }) })));
    };
    return TableSortingHeader;
};
const useServerPagination = (options) => {
    const { labelRowsPerPage = '', // Depends if paginationController is used
    defaultOrderBy = 'CREATED_AT', defaultOrder = 'ASC', limitOptions = [10, 20, 30] } = options !== null && options !== void 0 ? options : {};
    const form = useForm({
        defaultValues: {
            query: '',
            pagination: {
                page: 0,
                limit: limitOptions[0]
            },
            order: defaultOrder,
            orderBy: defaultOrderBy
        }
    });
    const { watch, setValue, control } = form;
    const { query, pagination, order, orderBy } = watch();
    const setPage = useCallback((page) => setValue('pagination.page', page), [setValue]);
    const setLimit = useCallback((limit) => setValue('pagination.limit', limit), [setValue]);
    const setOrderBy = useCallback((newOrderBy) => setValue('orderBy', newOrderBy), [setValue]);
    const setOrder = useCallback((newOrder) => setValue('order', newOrder || order === 'DESC' ? 'ASC' : 'DESC'), [setValue]);
    const setQuery = useCallback((newQuery) => setValue('query', newQuery), [setValue]);
    const TableSortingHeader = useServerTableSorting(form);
    const paginationController = (total) => (_jsx(PaginationController, { control: control, total: total, setPage: setPage, setLimit: setLimit, limitOptions: limitOptions, labelRowsPerPage: labelRowsPerPage }));
    const debouncedQuery = useDebounce(query);
    useEffect(() => {
        setPage(0);
    }, [debouncedQuery, pagination.limit]);
    const Searchbar = useMemo(() => buildSearchbar({ control, setValue }), []);
    return {
        query: debouncedQuery,
        pagination,
        Searchbar,
        paginationController,
        orderBy,
        order,
        TableSortingHeader,
        setQuery,
        setPage,
        setOrderBy,
        setOrder,
    };
};
export { useServerPagination };
