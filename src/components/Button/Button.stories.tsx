import type { Meta, StoryObj } from '@storybook/react';
import { IconInfoCircle } from '@tabler/icons-react';
import { Button } from '@mui/material';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['contained', 'outlined', 'text'],
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    size: {
      control: 'radio',
      options: ['medium', 'large'],
      table: {
        defaultValue: { summary: 'large' },
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
    variant: 'contained',
  },
};
