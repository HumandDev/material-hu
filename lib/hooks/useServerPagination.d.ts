import { FC } from 'react';
import { TableCellProps } from '@mui/material';
export type TableSortingHeaderType = FC<TableCellProps & {
    id: string;
    disabled?: boolean;
}>;
export type FormValues = {
    query: string;
    pagination: {
        page: number;
        limit: number;
    };
    order: string;
    orderBy: string;
};
declare const useServerPagination: (placeholder: string | undefined, defaultOrderBy: string | undefined, defaultOrder: string | undefined, limitOptions: number[] | undefined, surveys: boolean | undefined, labelRowsPerPage: string) => {
    query: string;
    pagination: {
        page: number;
        limit: number;
    };
    searchBar: import("react/jsx-runtime").JSX.Element;
    paginationController: (total: number) => import("react/jsx-runtime").JSX.Element;
    orderBy: string;
    order: string;
    TableSortingHeader: TableSortingHeaderType;
    setQuery: (newQuery: string) => void;
    setPage: (page: number) => void;
    setOrderBy: (newOrderBy: string) => void;
    setOrder: () => void;
};
export { useServerPagination };
