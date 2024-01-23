/// <reference types="react" />
import { TableCellProps, TableSortLabelProps } from '@mui/material';
import { FormValues } from './useServerPagination';
type ClientPaginationOptions<TData> = {
    items: TData[];
    queriedKeys: (keyof TData)[];
    labelRowsPerPage: string;
    defaultOrderBy?: string;
    defaultOrder?: TableSortLabelProps['direction'];
    limitOptions?: number[];
};
declare const useClientPagination: <TData extends object>(options: ClientPaginationOptions<TData>) => {
    paginatedItems: TData[];
    Searchbar: import("react").FC<import("@mui/material").TextFieldProps>;
    resetForm: import("react-hook-form").UseFormReset<FormValues>;
    paginationController: import("react/jsx-runtime").JSX.Element;
    TableSortingHeader: ({ children, id, selector, ...rest }: TableCellProps & {
        id: string;
        selector?: ((value: TData) => any) | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
};
export { useClientPagination };
