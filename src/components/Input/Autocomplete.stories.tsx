import type { Meta, StoryObj } from '@storybook/react';
import Autocomplete from './Autocomplete';
import Chip from '../Chip/Chip';

const meta: Meta<typeof Autocomplete> = {
  component: Autocomplete,
  title: 'Autocomplete',
  tags: ['autodocs'],
  args: {
    noOptionsTitle: 'No options available',
    noOptionsDescription: 'Please try another search',
    options: [
      { label: 'Option 1' },
      { label: 'Option 2' },
      { label: 'Option 3' },
    ],
    label: 'Label',
    placeholder: 'Select an option',
    getOptionKey: option => option.label as string,
    getOptionLabel: option => option.label as string,
  },
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    hasError: true,
    helperText: 'Field is required',
  },
};

export const NoOptions: Story = {
  args: {
    noOptionsTitle: 'Results not found',
    noOptionsDescription: 'Select in the list',
    options: [],
  },
};

export const HelperText: Story = {
  args: {
    helperText: 'Select or search an option',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const multiple: Story = {
  args: {
    multiple: true,
    options: [
      { label: 'Option 1' },
      { label: 'Option 2' },
      { label: 'Option 3' },
    ],
    renderTags: (value, getTagProps) => {
      return value.map((option, index) => {
        const { key, ...tagProps } = getTagProps({ index });
        return (
          <Chip
            key={key}
            label={option.label as string}
            sx={{ m: 0.25 }}
            {...tagProps}
          />
        );
      });
    },
  },
};
