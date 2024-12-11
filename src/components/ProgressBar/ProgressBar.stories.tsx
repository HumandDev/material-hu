import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: 'ProgressBar',
  tags: ['autodocs'],
  args: {
    current: 25,
    variant: 'indeterminate',
    title: 'Title here',
    description: 'Some description',
  },
  argTypes: {
    variant: {
      options: ['determinate', 'indeterminate'],
      control: { type: 'radio' },
    },
    hasPercentage: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {},
};

export const Determinate: Story = {
  args: {
    variant: 'determinate',
  },
};

export const DeterminateHeight: Story = {
  args: {
    variant: 'determinate',
    progressHeight: 8,
  },
};

export const Percentage: Story = {
  args: {
    hasPercentage: true,
    variant: 'determinate',
  },
};

export const Helper: Story = {
  args: {
    helper: 'Some extra help',
  },
};

export const NoText: Story = {
  args: {
    title: undefined,
    description: undefined,
  },
};
