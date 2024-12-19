/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react';
import Autocomplete from './Autocomplete';
import Chip from '../Chip/Chip';

const meta: Meta<typeof Autocomplete> = {
  component: Autocomplete,
  title: 'Autocomplete',
  tags: ['autodocs'],
  args: {
    noOptionsPrimary: 'No options available',
    noOptionsSecondary: 'Please try another search',
    options: [
      { label: 'Option 1' },
      { label: 'Option 2' },
      { label: 'Option 3' },
    ],
    label: 'Label',
    placeholder: 'Select an option',
  },
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  args: {},
};

export const Multiple: Story = {
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

export const Error: Story = {
  args: {
    error: true,
    helperText: 'Field is required',
  },
};

export const NoOptions: Story = {
  args: {
    noOptionsPrimary: 'Results not found',
    noOptionsSecondary: 'Select in the list',
    options: [],
  },
};

export const HelperText: Story = {
  args: {
    helperText: 'Select or search an option',
  },
};

export const Creatable: Story = {
  args: {
    options: [
      { label: 'Option 1' },
      { label: 'Option 2' },
      { label: 'Option 3' },
    ],
    canCreate: true,
    multiple: false,
    disabled: false,
    renderCreatableOption: (props, option) => {
      return (
        <li
          {...props}
          style={{ fontSize: '14px', fontWeight: '500' }}
        >
          {(option as any).label}
        </li>
      );
    },
    renderOption: (props, option) => {
      return <li {...props}>{(option as any).label}</li>;
    },
    getCreatableOption: () => ({ id: -1, label: 'Create +' }),
    // eslint-disable-next-line no-console
    onCreate: () => console.log('Creating new option ⚙️...'),
    helperText: 'This can create new options',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
