import { ReactNode } from 'react';
import {
  List as BaseList,
  Divider,
  ListProps as BaseListProps,
  DividerProps,
} from '@mui/material';

type ListWithDividerProps = BaseListProps & {
  items: ReactNode[];
  dividerProps?: DividerProps;
};

const ListWithDivider = ({
  items,
  dividerProps,
  ...other
}: ListWithDividerProps) => {
  return (
    <BaseList {...other}>
      {items.map(item => (
        <>
          {item}
          <Divider
            variant="middle"
            {...dividerProps}
            sx={{
              '&:last-of-type': { visibility: 'hidden' },
              ...dividerProps?.sx,
            }}
          />
        </>
      ))}
    </BaseList>
  );
};

export default ListWithDivider;
