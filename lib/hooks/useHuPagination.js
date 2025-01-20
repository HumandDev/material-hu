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
import { useMemo, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import FormSearch from '../components/Input/FormSearch';
import FormPagination from '../components/Input/FormPagination';
import { formatSearchParams } from '../utils/pagination';
const SEARCH_MIN_LENGTH = 3;
const FIRST_PAGE = 1;
export const useHuPagination = (options) => {
    const { defaultPage = FIRST_PAGE, defaultLimit = 10, limitOptions = [10, 20, 30], defaultSearch = '', } = options !== null && options !== void 0 ? options : {};
    const [searchParams, setSearchParams] = useSearchParams();
    const urlSearch = searchParams.get('search') || defaultSearch;
    const urlPage = Number(searchParams.get('page')) || defaultPage;
    const urlLimit = Number(searchParams.get('limit')) || defaultLimit;
    const defaultParams = {
        search: urlSearch,
        pagination: {
            page: urlPage,
            limit: urlLimit,
        },
    };
    const form = useForm({
        defaultValues: {
            params: defaultParams,
        },
    });
    const { watch, setValue } = form;
    const { params } = watch();
    const { search, pagination: { page, limit }, } = params;
    const setUrlParams = (values) => setSearchParams(formatSearchParams(values));
    const setParams = useCallback((values) => {
        if (!values) {
            setUrlParams();
            setValue('params', defaultParams);
            return;
        }
        setUrlParams(values);
        setValue('params', values);
    }, [setValue, setSearchParams]);
    useEffect(() => {
        if (page > FIRST_PAGE && limit > 0) {
            setUrlParams({ search, pagination: { page, limit } });
        }
    }, [page]);
    useEffect(() => {
        if (page > FIRST_PAGE && limit > 0) {
            setUrlParams({ search, pagination: { page: FIRST_PAGE, limit } });
        }
    }, [limit]);
    useEffect(() => {
        if (search.length < SEARCH_MIN_LENGTH) {
            setUrlParams();
        }
        else if (search !== urlSearch) {
            setParams({ search, pagination: { page: FIRST_PAGE, limit } });
        }
    }, [search]);
    const Search = useMemo(() => {
        const SearchController = props => (_jsx(FormSearch, Object.assign({}, props, { name: "params.search" })));
        return SearchController;
    }, []);
    const Pagination = useMemo(() => {
        const PaginationController = (_a) => {
            var { inputProps } = _a, props = __rest(_a, ["inputProps"]);
            return (_jsx(FormPagination, Object.assign({}, props, { name: "params.pagination", inputProps: Object.assign(Object.assign({}, inputProps), { limitOptions }) })));
        };
        return PaginationController;
    }, []);
    return {
        hasSearch: (search === null || search === void 0 ? void 0 : search.length) >= SEARCH_MIN_LENGTH,
        form,
        params,
        setParams,
        Search,
        Pagination,
    };
};
export default useHuPagination;
