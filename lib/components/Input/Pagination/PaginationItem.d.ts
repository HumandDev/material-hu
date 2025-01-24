import { FC } from 'react';
import { UsePaginationItem } from '@mui/material/usePagination';
export type PaginationItemProps = UsePaginationItem & {
    disabled?: boolean;
};
export declare const PaginationItem: FC<PaginationItemProps>;
export default PaginationItem;
