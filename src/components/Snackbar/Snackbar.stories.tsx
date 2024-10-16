import type { Meta, StoryObj } from '@storybook/react';
import Snackbar from './SnackbarWrapper';

const meta: Meta<typeof Snackbar> = {
  component: Snackbar,
  title: 'Snackbar',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['success', 'error', 'warning', 'info'],
      },
    },
    hasClose: { control: 'boolean' },
    cancelAction: {
      control: 'object',
    },
  },
  args: {
    title: 'Snackbar Title',
    description: 'This is a description for the snackbar.',
    variant: 'success',
    hasClose: true,
    cancelAction: undefined,
  },
};

export default meta;

type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  args: {},
};

export const Success: Story = {
  args: {
    title: 'Success',
    description: 'This is a success message',
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    title: 'Error',
    description: 'This is an error message',
    variant: 'error',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    description: 'This is a warning message',
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    title: 'Info',
    description: 'This is an informational message',
    variant: 'info',
  },
};

export const WithCancelAction: Story = {
  args: {
    title: 'Action Required',
    description: 'This message has an action',
    variant: 'warning',
    cancelAction: {
      text: 'Cancel action',
      onClick: () => alert('Undo action triggered!'),
    },
  },
};

export const WithLongText: Story = {
  args: {
    title: 'Action Required',
    description:
      'This message has an action that is very descriptive and talkative and wow please stop writing',
    variant: 'warning',
    cancelAction: {
      text: 'Cancel action because its important',
      onClick: () => alert('Undo action triggered!'),
    },
  },
};
