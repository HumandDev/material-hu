import { useEffect, useMemo, useState } from 'react';
import {  useForm } from 'react-hook-form';
import _ from 'lodash';
import { TableCell, TableCellProps, TableSortLabel, TableSortLabelProps } from '@mui/material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import PaginationController from '../components/pagination/PaginationController';
import { FormValues } from './useServerPagination';
import buildSearchbar from '../components/pagination/SearchBarController';

function applyFilters<T extends Record<string, any>>(
  items: T[],
  query: string,
  queriedKeys: (keyof T)[]
) {
  const lowerCaseQuery = query.toLowerCase();
  return items
    .filter((item) => {
      let matches = true;

      if (query) {
        matches = queriedKeys.some((key) => item[key]?.toLowerCase().includes(lowerCaseQuery));
      }

      return matches;
    });
}

function applyPagination<T>(
  items: T[],
  page: number,
  limit: number
) { return items.slice(page * limit, page * limit + limit); }

const useTableSorting = <T extends unknown>(defaultOrderBy: string, defaultOrder: TableSortLabelProps['direction']) => {
    const [orderBy, setOrderBy] = useState(defaultOrderBy);
    const [order, setOrder] = useState(defaultOrder!);
    const [valueSelector, setValueSelector] = useState<Function | null>(null);
  
    const createSortHandler = (property: string, selector?: Function) => () => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
      setValueSelector(selector ? () => selector : null);
    };
  
    // this component replaces the TableCell inside TableHeader
    const TableSortingHeader = ({ children, id, selector, ...rest }: TableCellProps & { id: string, selector?: (value: T) => any }) => (
      <TableCell
        {...rest}
        sortDirection={orderBy === id ? order : false}
      >
        <TableSortLabel
          active={orderBy === id}
          direction={orderBy === id ? order : 'asc'}
          onClick={createSortHandler(id, selector)}
          IconComponent={ArrowDropDownIcon}
        >
          {children}
        </TableSortLabel>
      </TableCell>
    );
  
    // this function sorts the items using the currently selected sorting options
    const sortFunction = (items: T[]) => _.orderBy(
      items,
      [(i) => {
        const value = valueSelector ? valueSelector(i) : (i as Record<string, any>)[orderBy];
    
        if (typeof value === 'number') {
          return value;
        }
    
        return (value ?? '').toString().toLowerCase();
      }],
      [order]
    ) as T[];
  
    return {
      TableSortingHeader,
      sortFunction
    };
  };

type ClientPaginationOptions<TData> = {
  items: TData[]
  queriedKeys: (keyof TData)[]
  labelRowsPerPage: string
  defaultOrderBy?: string,
  defaultOrder?: TableSortLabelProps['direction'],
  limitOptions?: number[]
} 

const useClientPagination = <TData extends object>(options: ClientPaginationOptions<TData>) => {
    const {
      items,
      queriedKeys,
      labelRowsPerPage,
      defaultOrderBy = 'position',
      defaultOrder = 'asc',
      limitOptions = [10, 20, 30]
    } = options 

    const { watch, control, setValue, reset } = useForm<FormValues>({ defaultValues: {
      query: '',
      pagination: {
        page: 0,
        limit: limitOptions[0]
      }
    } });
  
    const { query, pagination } = watch();
  
    const { TableSortingHeader, sortFunction } = useTableSorting<TData>(defaultOrderBy, defaultOrder);
  
    const sortedItems = sortFunction(items);
    // Usually query is done on backend with indexing solutions
    const filteredItems = useMemo(() => applyFilters(sortedItems, query, queriedKeys), [sortedItems, query]);
    const paginatedItems = useMemo(() => applyPagination(filteredItems, pagination.page, pagination.limit), [filteredItems, pagination.page, pagination.limit]);
  
    const setPage = (page: number) => setValue('pagination.page', page);
    const setLimit = (limit:number) => setValue('pagination.limit', limit);
  
    useEffect(() => {
      setPage(0);
    }, [filteredItems.length, pagination.limit]);
  
    const paginationController = (
      <PaginationController
        control={control}
        total={filteredItems.length}
        setPage={setPage}
        setLimit={setLimit}
        limitOptions={limitOptions}
        labelRowsPerPage={labelRowsPerPage}
      />
    );

    const Searchbar = useMemo(() => buildSearchbar({ control, setValue }), [])
  
    return {
      paginatedItems,
      Searchbar,
      resetForm: reset,
      paginationController,
      TableSortingHeader
    };
  };

export { useClientPagination };