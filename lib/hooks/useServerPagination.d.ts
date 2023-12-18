import { FC } from 'react';
import { TableCellProps } from '@mui/material';
type TableSortingHeaderProps = FC<TableCellProps & {
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
declare const useServerPagination: (placeholder: string, labelRowsPerPage: React.ReactNode, defaultOrderBy?: string, defaultOrder?: string, limitOptions?: number[], isSurveys?: boolean) => {
    query: string;
    pagination: {
        page: number;
        limit: number;
    };
    searchBar: import("react/jsx-runtime").JSX.Element;
    paginationController: (total: number) => import("react/jsx-runtime").JSX.Element;
    orderBy: string;
    order: string;
    TableSortingHeader: TableSortingHeaderProps;
    setQuery: (newQuery: string) => void;
    setPage: (page: number) => void;
    setOrderBy: (newOrderBy: string) => void;
    setOrder: (newOrder: string) => void;
};
export { useServerPagination, TableSortingHeaderProps };
