import { Stack } from '@mui/material';
import { Key, Fragment } from 'react';

type DataGroupProps<TData> = {
  items: TData[];
  renderItem: (item: TData, index: number) => JSX.Element;
};

const DisplayGroup = <TData extends { id: Key }>({
  items,
  renderItem,
}: DataGroupProps<TData>) => (
  <Stack sx={{ flexDirection: 'row', width: '100%' }}>
    {items.map((item, index) => {
      return <Fragment key={item.id}>{renderItem(item, index)}</Fragment>;
    })}
  </Stack>
);

export default DisplayGroup;
