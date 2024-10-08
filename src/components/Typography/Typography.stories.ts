import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@mui/material';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: [
        'globalXXS',
        'globalXS',
        'globalS',
        'globalM',
        'globalL',
        'globalXL',
      ],
    },
    fontWeight: {
      control: 'radio',
      options: ['fontWeightRegular', 'fontWeightSemiBold'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Typography1: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    variant: 'globalM',
    fontWeight: 'fontWeightRegular',
  },
};
