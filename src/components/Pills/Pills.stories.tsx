import type { Meta, StoryObj } from '@storybook/react';
import Pills from './Pills';

const meta: Meta<typeof Pills> = {
  component: Pills,
  title: 'Pills',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: [
        'error',
        'success',
        'warning',
        'info',
        'highlight',
        'neutral',
        'disabled',
      ],
      table: {
        type: { summary: 'union' },
      },
      defaultValue: { summary: 'error' },
    },
    size: {
      control: 'radio',
    },
    hasIcon: {
      control: 'boolean',
    },
  },
  args: {
    label: 'Message in pill',
    type: 'error',
    size: 'medium',
    hasIcon: true,
  },
};

export default meta;

type Story = StoryObj<typeof Pills>;

export const Default: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    label: 'Error message alert',
    type: 'error',
  },
};

export const Success: Story = {
  args: {
    label: 'Success message alert',
    type: 'success',
  },
};

export const Info: Story = {
  args: {
    label: 'Info message alert',
    type: 'info',
  },
};

export const Highlight: Story = {
  args: {
    label: 'Highlighted message alert',
    type: 'highlight',
  },
};

export const Neutral: Story = {
  args: {
    label: 'Neutral message alert',
    type: 'neutral',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled message alert',
    type: 'disabled',
  },
};
