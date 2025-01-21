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
    var _a;
    const { defaultPage = FIRST_PAGE, defaultLimit = 10, limitOptions = [10, 20, 30], defaultSearch = '', } = options !== null && options !== void 0 ? options : {};
    const [searchParams, setSearchParams] = useSearchParams();
    const urlSearch = searchParams.get('search') || defaultSearch;
    const urlPage = Number(searchParams.get('page')) || defaultPage;
    const urlLimit = Number(searchParams.get('limit')) || defaultLimit;
    const defaultParams = useMemo(() => ({
        search: urlSearch,
        pagination: {
            page: urlPage,
            limit: urlLimit,
        },
    }), [urlSearch, urlPage, urlLimit]);
    const form = useForm({
        defaultValues: {
            params: defaultParams,
        },
    });
    const { watch, getValues, setValue } = form;
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
        setValue('params', defaultParams);
    }, [defaultParams]);
    const handleChangePage = (newPage) => {
        const { search, pagination: { limit }, } = getValues('params');
        setUrlParams({ search, pagination: { page: newPage, limit } });
    };
    const handleChangeLimit = (newLimit) => {
        const { search } = getValues('params');
        setParams({ search, pagination: { page: FIRST_PAGE, limit: newLimit } });
    };
    const handleChangeSearch = (newSearch) => {
        if (newSearch.length < SEARCH_MIN_LENGTH) {
            setUrlParams();
            return;
        }
        const { pagination: { limit }, } = getValues('params');
        setParams({ search: newSearch, pagination: { page: FIRST_PAGE, limit } });
    };
    const Search = useMemo(() => {
        const SearchController = (_a) => {
            var { inputProps } = _a, props = __rest(_a, ["inputProps"]);
            return (_jsx(FormSearch, Object.assign({}, props, { name: "params.search", inputProps: Object.assign(Object.assign({}, inputProps), { onChange: handleChangeSearch }) })));
        };
        return SearchController;
    }, []);
    const Pagination = useMemo(() => {
        const PaginationController = (_a) => {
            var { inputProps } = _a, props = __rest(_a, ["inputProps"]);
            return (_jsx(FormPagination, Object.assign({}, props, { name: "params.pagination", inputProps: Object.assign(Object.assign({}, inputProps), { limitOptions, onChangeLimit: handleChangeLimit, onChangePage: handleChangePage }) })));
        };
        return PaginationController;
    }, []);
    const params = watch('params');
    const hasSearch = ((_a = params === null || params === void 0 ? void 0 : params.search) === null || _a === void 0 ? void 0 : _a.length) >= SEARCH_MIN_LENGTH;
    return {
        hasSearch,
        form,
        params,
        setParams,
        Search,
        Pagination,
    };
};
export default useHuPagination;
