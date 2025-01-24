/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react';
import Autocomplete from './Autocomplete';
import { useEffect, useState } from 'react';
import { CircularProgress, Stack, Typography } from '@mui/material';

type ColorOption = {
  id: number;
  label: string;
};

const colors: ColorOption[][] = [
  [
    { id: 1, label: 'Yellow' },
    { id: 2, label: 'Blue' },
    { id: 3, label: 'Red' },
  ],
  [
    { id: 4, label: 'Black' },
    { id: 5, label: 'White' },
    { id: 6, label: 'Gray' },
  ],
  [
    { id: 7, label: 'Pink' },
    { id: 8, label: 'Purple' },
    { id: 9, label: 'Gold' },
  ],
];

const LoadTrigger = ({ onLoad }: { onLoad: () => void }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      onLoad();
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return <CircularProgress size={20} />;
};

const AutocompleteInfiniteLoadable = () => {
  const [page, setPage] = useState(0);
  const [options, setOptions] = useState(colors[0]);
  const [color, setColor] = useState<ColorOption | null>(colors[0][0]);

  const hasMorePages = page < colors.length - 1;

  const handleLoad = () => {
    const nextPage = page + 1;
    setOptions(state => [...state, ...colors[nextPage]]);
    setPage(nextPage);
  };

  return (
    <Stack>
      <Autocomplete
        options={options}
        value={color}
        multiple={false}
        onChange={(_event, nextValue) => {
          setColor(nextValue);
        }}
        getOptionLabel={option => option.label}
        getOptionKey={option => option.id}
        loadMoreElem={hasMorePages ? <LoadTrigger onLoad={handleLoad} /> : null}
      />
      <Typography>Pagination:</Typography>
      <Typography>
        <em>{JSON.stringify({ lastPageLoaded: page }, null, 2)}</em>
      </Typography>
    </Stack>
  );
};

const meta: Meta<typeof AutocompleteInfiniteLoadable> = {
  component: AutocompleteInfiniteLoadable,
  tags: ['autodocs'],
  args: {},
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  args: {},
};
