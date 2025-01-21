import { FC } from 'react';
import { FormSearchProps } from '../components/Input/FormSearch';
import { FormPaginationProps } from '../components/Input/FormPagination';
export type SearchControllerProps = Omit<FormSearchProps, 'name' | 'onChange'>;
export type PaginationControllerProps = Omit<FormPaginationProps, 'name' | 'onChangeLimit' | 'onChangePage' | 'limitOptions'>;
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
export declare const useHuPagination: (options?: UseHuPaginationOptions) => {
    hasSearch: boolean;
    form: import("react-hook-form").UseFormReturn<FormValues, any, undefined>;
    params: PaginationParams;
    setParams: (values: FormValues['params'] | null) => void;
    Search: FC<SearchControllerProps>;
    Pagination: FC<PaginationControllerProps>;
};
export default useHuPagination;
