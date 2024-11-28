import type { Meta, StoryObj } from '@storybook/react';
import { IconInfoCircle } from '@tabler/icons-react';
import { IconButton } from '@mui/material';

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    children: <IconInfoCircle />,
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'large'],
      table: {
        defaultValue: { summary: 'large' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
