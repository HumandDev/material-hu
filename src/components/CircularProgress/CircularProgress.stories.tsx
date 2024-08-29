import type { Meta, StoryObj } from '@storybook/react';
import CircularProgress from './CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  component: CircularProgress,
  title: 'CircularProgress',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CircularProgress>;

export const Default: Story = {
  args: {},
};

export const DarkBackground: Story = {
  args: {
    darkBackground: true,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Small: Story = {
  args: {
    width: 'small',
  },
};

export const Uncentered: Story = {
  args: {
    centered: false,
  },
};
