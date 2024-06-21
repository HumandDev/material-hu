import { ReactNode } from 'react';
import {
  List as BaseList,
  Divider,
  ListProps as BaseListProps,
  DividerProps,
} from '@mui/material';

type ListWithDividerProps<TItem> = BaseListProps & {
  items: TItem[];
  dividerProps?: DividerProps;
  renderItem: (item: TItem) => ReactNode;
};

const ListWithDivider = <TItem extends unknown>({
  items,
  dividerProps,
  renderItem,
  ...other
}: ListWithDividerProps<TItem>) => {
  return (
    <BaseList {...other}>
      {items.map(item => (
        <>
          {renderItem(item)}
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
