import type { Meta, StoryObj } from '@storybook/react';
import { IconPlus } from '@tabler/icons-react';
import { Fab } from '@mui/material';

const children = (
  <>
    Nuevo <IconPlus />
  </>
);

const meta: Meta<typeof Fab> = {
  title: 'Fab',
  component: Fab,
  tags: ['autodocs'],
  args: {
    children,
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['circular'],
      table: {
        defaultValue: { summary: 'circular' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'large'],
      table: {
        defaultValue: { summary: 'large' },
      },
    },
    disabled: {
      control: 'boolean',
      options: ['true', 'false'],
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
