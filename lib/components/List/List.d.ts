import { FC } from 'react';
import { ListProps as MuiListProps } from '@mui/material';
export type ListProps = Pick<MuiListProps, 'id' | 'sx' | 'children'>;
export declare const List: FC<ListProps>;
export default List;
