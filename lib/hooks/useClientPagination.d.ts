import { TableCellProps, TableSortLabelProps } from '@mui/material';
import { FormValues } from './useServerPagination';
declare const useClientPagination: <T extends object>(items: T[], queriedKeys: (keyof T)[], placeholder: string, labelRowsPerPage: string, defaultOrderBy?: string, defaultOrder?: TableSortLabelProps['direction'], limitOptions?: number[]) => {
    paginatedItems: T[];
    searchBar: import("react/jsx-runtime").JSX.Element;
    resetForm: import("react-hook-form").UseFormReset<FormValues>;
    paginationController: import("react/jsx-runtime").JSX.Element;
    TableSortingHeader: ({ children, id, selector, ...rest }: TableCellProps & {
        id: string;
        selector?: ((value: T) => any) | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
};
export { useClientPagination };
