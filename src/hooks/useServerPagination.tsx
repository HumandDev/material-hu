import { FC, useEffect, useCallback, useMemo } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';
import { TableCell, TableCellProps, TableSortLabel } from '@mui/material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';

import { useDebounce } from './useDebounce';
import PaginationController from '../components/pagination/PaginationController';
import buildSearchbar from '../components/pagination/SearchBarController';

type TableSortingHeaderProps = FC<
  TableCellProps & { id: string; disabled?: boolean }
>;

export type FormValues = {
  query: string;
  pagination: {
    page: number;
    limit: number;
  };
  order: string;
  orderBy: string;
};

type Form = UseFormReturn<FormValues, undefined>;

const useServerTableSorting = (form: Form) => {
  const { watch, setValue } = form;
  const { order, orderBy } = watch();

  const createSortHandler = (property: string) => () => {
    const isAsc = orderBy === property && order === 'ASC';
    setValue('orderBy', property);
    setValue('order', isAsc ? 'DESC_NULLS_LAST' : 'ASC');
  };

  // this component replaces the TableCell inside TableHeader
  const TableSortingHeader: TableSortingHeaderProps = ({
    children,
    id,
    disabled,
    ...rest
  }) => (
    <TableCell
      {...rest}
      sortDirection={orderBy === id && order === 'ASC' ? 'asc' : 'desc'}
      sx={{ pr: 0 }}
    >
      <TableSortLabel
        active={orderBy === id}
        direction={orderBy === id && order === 'ASC' ? 'asc' : 'desc'}
        onClick={createSortHandler(id)}
        disabled={disabled}
        IconComponent={ArrowDropDownIcon}
      >
        {children}
      </TableSortLabel>
    </TableCell>
  );

  return TableSortingHeader;
};

type ServerPaginationOptions = {
  labelRowsPerPage?: string;
  defaultOrderBy?: string;
  defaultOrder?: string;
  defaultPage?: number;
  defaultLimit?: number;
  defaultQuery?: string;
  limitOptions?: number[];
};

const useServerPagination = (options?: ServerPaginationOptions) => {
  const {
    labelRowsPerPage = '', // Depends if paginationController is used
    defaultOrderBy = 'CREATED_AT',
    defaultOrder = 'ASC',
    defaultPage = 0,
    defaultLimit = 10,
    defaultQuery = '',
    limitOptions = [10, 20, 30],
  } = options ?? {};

  const form = useForm<FormValues>({
    defaultValues: {
      query: defaultQuery,
      pagination: {
        page: defaultPage,
        limit:
          defaultLimit === limitOptions[0] ? limitOptions[0] : defaultLimit,
      },
      order: defaultOrder,
      orderBy: defaultOrderBy,
    },
  });

  const { watch, setValue, control } = form;

  const { query, pagination, order, orderBy } = watch();

  const setPage = useCallback(
    (page: number) => setValue('pagination.page', page),
    [setValue],
  );
  const setLimit = useCallback(
    (limit: number) => setValue('pagination.limit', limit),
    [setValue],
  );
  const setOrderBy = useCallback(
    (newOrderBy: string) => setValue('orderBy', newOrderBy),
    [setValue],
  );
  const setOrder = useCallback(
    (newOrder?: string) =>
      setValue('order', newOrder || (order === 'DESC' ? 'ASC' : 'DESC')),
    [setValue, order],
  );
  const setQuery = useCallback(
    (newQuery: string) => setValue('query', newQuery),
    [setValue],
  );

  const TableSortingHeader = useServerTableSorting(form);

  const paginationController = (total: number) => (
    <PaginationController
      control={control}
      total={total}
      setPage={setPage}
      setLimit={setLimit}
      limitOptions={limitOptions}
      labelRowsPerPage={labelRowsPerPage}
    />
  );

  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    setPage(0);
  }, [debouncedQuery, pagination.limit]);

  const Searchbar = useMemo(
    () => buildSearchbar({ control, setValue, defaultQuery }),
    [],
  );

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

export { useServerPagination, TableSortingHeaderProps };
