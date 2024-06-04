import { ReactNode } from 'react';
import { ListProps as BaseListProps, DividerProps } from '@mui/material';
type ListWithDividerProps = BaseListProps & {
    items: ReactNode[];
    dividerProps?: DividerProps;
};
declare const ListWithDivider: ({ items, dividerProps, ...other }: ListWithDividerProps) => import("react/jsx-runtime").JSX.Element;
export default ListWithDivider;
