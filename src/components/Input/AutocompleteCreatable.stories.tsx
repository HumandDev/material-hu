import type { Meta, StoryObj } from '@storybook/react';
import Autocomplete from './Autocomplete';
import { useState } from 'react';
import { Stack, Typography } from '@mui/material';

type ColorOption = {
  id: number;
  label: string;
};

const colors: ColorOption[] = [
  { id: 1, label: 'Yellow' },
  { id: 2, label: 'Blue' },
  { id: 3, label: 'Red' },
];

const AutocompleteCreatable = () => {
  const [options, setOptions] = useState(colors);
  const [color, setColor] = useState<ColorOption | null>(colors[0]);

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
        getCreatableOption={inputValue => ({
          id: -1,
          label: `Create: ${inputValue}`,
        })}
        onCreate={inputValue => {
          const nextId = colors[colors.length - 1].id + 1;
          const nextColor = {
            label: inputValue,
            id: nextId,
          };
          setOptions(state => [...state, nextColor]);
          setColor(nextColor);
        }}
      />
      <Typography>Selected:</Typography>
      <Typography>
        <em>{JSON.stringify(color, null, 2)}</em>
      </Typography>
    </Stack>
  );
};

const meta: Meta<typeof AutocompleteCreatable> = {
  component: AutocompleteCreatable,
  tags: ['autodocs'],
  args: {},
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  args: {},
};
