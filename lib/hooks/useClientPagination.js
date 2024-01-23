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
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import { TableCell, TableSortLabel } from '@mui/material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import PaginationController from '../components/pagination/PaginationController';
import buildSearchbar from '../components/pagination/SearchBarController';
function applyFilters(items, query, queriedKeys) {
    const lowerCaseQuery = query.toLowerCase();
    return items
        .filter((item) => {
        let matches = true;
        if (query) {
            matches = queriedKeys.some((key) => { var _a; return (_a = item[key]) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(lowerCaseQuery); });
        }
        return matches;
    });
}
function applyPagination(items, page, limit) { return items.slice(page * limit, page * limit + limit); }
const useTableSorting = (defaultOrderBy, defaultOrder) => {
    const [orderBy, setOrderBy] = useState(defaultOrderBy);
    const [order, setOrder] = useState(defaultOrder);
    const [valueSelector, setValueSelector] = useState(null);
    const createSortHandler = (property, selector) => () => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        setValueSelector(selector ? () => selector : null);
    };
    // this component replaces the TableCell inside TableHeader
    const TableSortingHeader = (_a) => {
        var { children, id, selector } = _a, rest = __rest(_a, ["children", "id", "selector"]);
        return (_jsx(TableCell, Object.assign({}, rest, { sortDirection: orderBy === id ? order : false, children: _jsx(TableSortLabel, { active: orderBy === id, direction: orderBy === id ? order : 'asc', onClick: createSortHandler(id, selector), IconComponent: ArrowDropDownIcon, children: children }) })));
    };
    // this function sorts the items using the currently selected sorting options
    const sortFunction = (items) => _.orderBy(items, [(i) => {
            const value = valueSelector ? valueSelector(i) : i[orderBy];
            if (typeof value === 'number') {
                return value;
            }
            return (value !== null && value !== void 0 ? value : '').toString().toLowerCase();
        }], [order]);
    return {
        TableSortingHeader,
        sortFunction
    };
};
const useClientPagination = (options) => {
    const { items, queriedKeys, labelRowsPerPage, defaultOrderBy = 'position', defaultOrder = 'asc', limitOptions = [10, 20, 30] } = options;
    const { watch, control, setValue, reset } = useForm({ defaultValues: {
            query: '',
            pagination: {
                page: 0,
                limit: limitOptions[0]
            }
        } });
    const { query, pagination } = watch();
    const { TableSortingHeader, sortFunction } = useTableSorting(defaultOrderBy, defaultOrder);
    const sortedItems = sortFunction(items);
    // Usually query is done on backend with indexing solutions
    const filteredItems = useMemo(() => applyFilters(sortedItems, query, queriedKeys), [sortedItems, query]);
    const paginatedItems = useMemo(() => applyPagination(filteredItems, pagination.page, pagination.limit), [filteredItems, pagination.page, pagination.limit]);
    const setPage = (page) => setValue('pagination.page', page);
    const setLimit = (limit) => setValue('pagination.limit', limit);
    useEffect(() => {
        setPage(0);
    }, [filteredItems.length, pagination.limit]);
    const paginationController = (_jsx(PaginationController, { control: control, total: filteredItems.length, setPage: setPage, setLimit: setLimit, limitOptions: limitOptions, labelRowsPerPage: labelRowsPerPage }));
    return {
        paginatedItems,
        Searchbar: buildSearchbar({ control, setValue }),
        resetForm: reset,
        paginationController,
        TableSortingHeader
    };
};
export { useClientPagination };
