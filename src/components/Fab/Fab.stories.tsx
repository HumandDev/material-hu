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
    disabled: false,
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
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const NoTextSmall: Story = {
  args: {
    children: <IconPlus />,
    size: 'small',
  },
};

export const NoTextSmallDisabled: Story = {
  args: {
    children: <IconPlus />,
    size: 'small',
    disabled: true,
  },
};

export const NoTextLarge: Story = {
  args: {
    children: <IconPlus />,
  },
};

export const NoTextLargeDisabled: Story = {
  args: {
    children: <IconPlus />,
    disabled: true,
  },
};
