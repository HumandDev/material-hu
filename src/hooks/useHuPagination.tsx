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

export type SearchControllerProps = Omit<
  FormSearchProps,
  'name' | 'inputProps'
> & {
  inputProps?: Omit<FormSearchProps['inputProps'], 'onChange'>;
};

export type PaginationControllerProps = Omit<
  FormPaginationProps,
  'name' | 'inputProps'
> & {
  inputProps?: Omit<
    FormPaginationProps['inputProps'],
    'onChangeLimit' | 'onChangePage' | 'limitOptions'
  >;
};

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

  const defaultParams = useMemo(
    () => ({
      search: urlSearch,
      pagination: {
        page: urlPage,
        limit: urlLimit,
      },
    }),
    [urlSearch, urlPage, urlLimit],
  );

  const form = useForm<FormValues>({
    defaultValues: {
      params: defaultParams,
    },
  });

  const { watch, getValues, setValue } = form;

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
    setValue('params', defaultParams);
  }, [defaultParams]);

  const handleChangePage = (newPage: number) => {
    const {
      search,
      pagination: { limit },
    } = getValues('params');
    setUrlParams({ search, pagination: { page: newPage, limit } });
  };

  const handleChangeLimit = (newLimit: number) => {
    const { search } = getValues('params');
    setParams({ search, pagination: { page: FIRST_PAGE, limit: newLimit } });
  };

  const handleChangeSearch = (newSearch: string) => {
    const {
      pagination: { limit },
    } = getValues('params');
    setParams({ search: newSearch, pagination: { page: FIRST_PAGE, limit } });
  };

  const Search = useMemo(() => {
    const SearchController: FC<SearchControllerProps> = ({
      inputProps,
      ...props
    }) => (
      <FormSearch
        {...props}
        name="params.search"
        inputProps={{
          ...inputProps,
          onChange: handleChangeSearch,
        }}
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
          onChangeLimit: handleChangeLimit,
          onChangePage: handleChangePage,
        }}
      />
    );

    return PaginationController;
  }, []);

  const params = watch('params');
  const hasSearch = params?.search?.length >= SEARCH_MIN_LENGTH;

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
