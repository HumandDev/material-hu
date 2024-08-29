import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from './Skeleton';
import { Typography } from '@mui/material';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Skeleton',
  tags: ['autodocs'],
  args: {
    children: (
      <Typography p={1}>
        Lorem ipsum odor amet, consectetuer adipiscing elit.
      </Typography>
    ),

    // Default component values manually set here to show the default values in the controls table
    isLoading: true,
    variant: 'rounded',
  },
  argTypes: {
    children: { control: { disable: true } },
    isLoading: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    variant: {
      control: 'radio',
      options: ['rectangular', 'circular', 'rounded', 'text'],
      table: {
        defaultValue: { summary: 'rounded' },
      },
    },
    width: {
      control: 'number',
      min: 0,
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: 'number',
      min: 0,
      table: {
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {},
};

export const NotLoading: Story = {
  args: {
    isLoading: false,
  },
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
  },
};

export const CircularWithFixedDimensions: Story = {
  args: {
    variant: 'circular',
    width: 60,
    height: 60,
  },
};

export const RoundedWithFixedDimensions: Story = {
  args: {
    variant: 'rounded',
    width: 210,
    height: 60,
  },
};
