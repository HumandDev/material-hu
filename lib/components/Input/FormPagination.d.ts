import { FC, ComponentProps } from 'react';
import { ControllerProps } from 'react-hook-form';
import Pagination from './Pagination';
export type FormPaginationProps = {
    name: string;
    inputProps?: Pick<ComponentProps<typeof Pagination>, 'loading' | 'type' | 'limitOptions' | 'totalPages' | 'sx' | 'onChangeLimit' | 'onChangePage'>;
    rules?: ControllerProps['rules'];
};
export declare const FormPagination: FC<FormPaginationProps>;
export default FormPagination;
