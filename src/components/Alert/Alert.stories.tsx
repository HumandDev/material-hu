import type { Meta, StoryObj } from '@storybook/react';
import Alert from './Alert';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Alert',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
  args: {
    description: 'Description example',
    title: 'Title example',
    severity: 'success',
    hasClose: true,
    action: { text: 'Action!', onClick: () => alert('Action has been run') },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {},
};

export const Success: Story = {
  args: {
    severity: 'success',
  },
};

export const Error: Story = {
  args: {
    severity: 'error',
  },
};

export const Warning: Story = {
  args: {
    severity: 'warning',
  },
};

export const Info: Story = {
  args: {
    severity: 'info',
  },
};

export const Highlight: Story = {
  args: {
    severity: 'highlight',
  },
};

export const NoDescription: Story = {
  args: {
    severity: 'highlight',
    description: undefined,
  },
};

export const NoAction: Story = {
  args: {
    severity: 'highlight',
    description: undefined,
    action: undefined,
  },
};

export const NoClose: Story = {
  args: {
    severity: 'highlight',
    description: undefined,
    action: undefined,
    hasClose: false,
  },
};
