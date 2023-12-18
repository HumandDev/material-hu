import { FC, useEffect, useCallback } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';
import { TableCell, TableCellProps, TableSortLabel } from '@mui/material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';

import useDebounce from './useDebounce';
import SearchBar from '../components/pagination/SearchBarController';
import PaginationController from '../components/pagination/PaginationController';

type TableSortingHeaderProps = FC<TableCellProps & { id: string, disabled?: boolean }>;

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
  const { watch, setValue } = (form);
  const { order, orderBy } = watch();

  const createSortHandler = (property: string) => () => {
    const isAsc = orderBy === property && order === 'ASC';
    setValue('orderBy', property);
    setValue('order', isAsc ? 'DESC_NULLS_LAST' : 'ASC');
  };

  // this component replaces the TableCell inside TableHeader
  const TableSortingHeader: TableSortingHeaderProps = ({ children, id, disabled, ...rest }) => (
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

const useServerPagination = (
    placeholder: string,
    labelRowsPerPage: React.ReactNode,
    defaultOrderBy = 'CREATED_AT',
    defaultOrder = 'ASC',
    limitOptions = [10, 20, 30],
    isSurveys = false,
  ) => {
  const form = useForm<FormValues>({ 
    defaultValues: {
      query: '',
      pagination: {
        page: 0,
        limit: limitOptions[0],
      },
      order: defaultOrder,
      orderBy: defaultOrderBy,
    }
  });

  const { watch, setValue, control } = form;

  const { query, pagination, order, orderBy } = watch();

  const setPage = (page: number) => setValue('pagination.page', page);
  const setLimit = (limit: number) => setValue('pagination.limit', limit);
  const setOrderBy = (newOrderBy: string) => setValue('orderBy', newOrderBy);
  const setOrder = (newOrder: string) => setValue('order', newOrder);
  const setQuery = (newQuery: string) => setValue('query', newQuery);

  const TableSortingHeader = useServerTableSorting(form);

  const searchBar = (
    <SearchBar
      control={control}
      setValue={setValue}
      isSurveys={isSurveys}
      placeholder={placeholder}
    />
  );

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
  },
  [debouncedQuery, pagination.limit]);

  return {
    query: debouncedQuery,
    pagination,
    searchBar,
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
