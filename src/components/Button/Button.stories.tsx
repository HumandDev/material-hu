import type { Meta, StoryObj } from '@storybook/react';
import { IconInfoCircle } from '@tabler/icons-react';
import { Button } from '@mui/material';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'contained',
        'outlined',
        'text',
      ],
      table: {
        defaultValue: { summary: 'tertiary' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'large'],
      table: {
        defaultValue: { summary: 'large' },
      },
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    startIcon: {
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    endIcon: {
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Icons: Story = {
  args: {
    startIcon: <IconInfoCircle />,
    endIcon: <IconInfoCircle />,
    variant: 'primary',
  },
};
