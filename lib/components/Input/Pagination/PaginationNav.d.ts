import { FC } from 'react';
import { UsePaginationItem } from '@mui/material/usePagination';
export type PaginationNavProps = {
    loading?: boolean;
    disabled?: boolean;
    items?: UsePaginationItem[];
    page?: number;
};
export declare const PaginationNav: FC<PaginationNavProps>;
export default PaginationNav;
