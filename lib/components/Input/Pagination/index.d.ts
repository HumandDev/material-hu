import { FC } from 'react';
import { PaperProps } from '@mui/material';
export type PaginationProps = Pick<PaperProps, 'sx'> & {
    loading?: boolean;
    disabled?: boolean;
    type?: 'basic' | 'changer';
    limit?: number;
    limitOptions?: number[];
    onChangeLimit?: (newLimit: number) => void;
    page?: number;
    onChangePage?: (newPage: number) => void;
    totalPages?: number;
};
export declare const Pagination: FC<PaginationProps>;
export default Pagination;
