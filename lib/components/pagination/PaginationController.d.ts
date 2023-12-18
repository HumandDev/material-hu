import { FC } from 'react';
import { Control, FieldValues } from 'react-hook-form';
import { FormValues } from '../../hooks/useServerPagination';
export type PaginationControllerProps<T extends FieldValues> = {
    control: Control<T>;
    total: number;
    setPage: (param: number) => void;
    setLimit: (param: number) => void;
    limitOptions: number[];
    labelRowsPerPage: string;
};
declare const PaginationController: FC<PaginationControllerProps<FormValues>>;
export default PaginationController;
