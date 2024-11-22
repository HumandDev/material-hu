import { FC } from 'react';
import { List as MuiList, ListProps as MuiListProps } from '@mui/material';

export type ListProps = Pick<MuiListProps, 'id' | 'sx' | 'children'>;

export const List: FC<ListProps> = ({ id, sx, children }) => {
  return (
    <MuiList
      id={id}
      sx={{
        p: 0,
        ...sx,
      }}
    >
      {children}
    </MuiList>
  );
};

export default List;
