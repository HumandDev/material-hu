import { FC, useMemo, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import FormSearch, { FormSearchProps } from '../components/Input/FormSearch';
import FormPagination, {
  FormPaginationProps,
} from '../components/Input/FormPagination';
import { formatSearchParams } from '../utils/pagination';

const SEARCH_MIN_LENGTH = 3;
const FIRST_PAGE = 1;

export type SearchControllerProps = Omit<FormSearchProps, 'name'>;
export type PaginationControllerProps = Omit<FormPaginationProps, 'name'>;

export type PaginationParams = {
  search: string;
  pagination: {
    page: number;
    limit: number;
  };
};

export type FormValues = {
  params: PaginationParams;
};

export type UseHuPaginationOptions = {
  defaultPage?: number;
  defaultLimit?: number;
  defaultSearch?: string;
  limitOptions?: number[];
};

export const useHuPagination = (options?: UseHuPaginationOptions) => {
  const {
    defaultPage = FIRST_PAGE,
    defaultLimit = 10,
    limitOptions = [10, 20, 30],
    defaultSearch = '',
  } = options ?? {};

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

  const form = useForm<FormValues>({
    defaultValues: {
      params: defaultParams,
    },
  });

  const { watch, setValue } = form;

  const { params } = watch();

  const {
    search,
    pagination: { page, limit },
  } = params;

  const setUrlParams = (values?: FormValues['params']) =>
    setSearchParams(formatSearchParams(values));

  const setParams = useCallback(
    (values: FormValues['params'] | null) => {
      if (!values) {
        setUrlParams();
        setValue('params', defaultParams);
        return;
      }

      setUrlParams(values);
      setValue('params', values);
    },
    [setValue, setSearchParams],
  );

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
    if (search.length >= SEARCH_MIN_LENGTH && search !== urlSearch) {
      setParams({ search, pagination: { page: FIRST_PAGE, limit } });
    }
  }, [search]);

  const Search = useMemo(() => {
    const SearchController: FC<SearchControllerProps> = props => (
      <FormSearch
        {...props}
        name="params.search"
      />
    );

    return SearchController;
  }, []);

  const Pagination = useMemo(() => {
    const PaginationController: FC<PaginationControllerProps> = ({
      inputProps,
      ...props
    }) => (
      <FormPagination
        {...props}
        name="params.pagination"
        inputProps={{
          ...inputProps,
          limitOptions,
        }}
      />
    );

    return PaginationController;
  }, []);

  return {
    hasSearch: search?.length > 0,
    form,
    params,
    setParams,
    Search,
    Pagination,
  };
};

export default useHuPagination;
