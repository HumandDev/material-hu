import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Skeleton',
  tags: ['autodocs'],
  args: {
    children: 'Lorem ipsum odor amet, consectetuer adipiscing elit.',
  },
  argTypes: {
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
    variant: {
      control: 'select',
      options: ['circular', 'rectangular', 'rounded', 'text'],
      table: {
        type: { summary: 'union' },
        defaultValue: { summary: "'text'" },
      },
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', false],
      table: {
        type: { summary: 'union' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {},
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 40,
    height: 40,
  },
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: 210,
    height: 60,
  },
};

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    width: 210,
    height: 60,
  },
};

export const NotLoading: Story = {
  args: {
    isLoading: false,
  },
};
