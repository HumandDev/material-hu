import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SnackbarWrapper from './SnackbarWrapper';
import { SnackbarProps } from './Snackbar';
import { SnackbarProvider } from 'notistack';

const meta: Meta<typeof SnackbarWrapper> = {
  component: SnackbarWrapper,
  title: 'Snackbar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: { height: '80px' },
    },
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    variant: {
      control: 'radio',
      options: ['success', 'error', 'warning', 'info'],
    },
    hasClose: { control: 'boolean' },
    cancelAction: { control: 'object' },
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

type Story = StoryObj<typeof SnackbarWrapper>;

const SnackbarTemplate: React.FC<SnackbarProps> = args => {
  return (
    <SnackbarProvider>
      <SnackbarWrapper {...args} />
    </SnackbarProvider>
  );
};

export const Default: Story = {
  render: args => <SnackbarTemplate {...args} />,
};

export const Success: Story = {
  render: args => <SnackbarTemplate {...args} />,
  args: {
    title: 'Success',
    description: 'This is a success message',
    variant: 'success',
  },
};

export const Error: Story = {
  render: args => <SnackbarTemplate {...args} />,
  args: {
    title: 'Error',
    description: 'This is an error message',
    variant: 'error',
  },
};

export const Warning: Story = {
  render: args => <SnackbarTemplate {...args} />,
  args: {
    title: 'Warning',
    description: 'This is a warning message',
    variant: 'warning',
  },
};

export const Info: Story = {
  render: args => <SnackbarTemplate {...args} />,
  args: {
    title: 'Info',
    description: 'This is an informational message',
    variant: 'info',
  },
};

export const OnlyTitle: Story = {
  render: args => <SnackbarTemplate {...args} />,
  args: {
    title: 'Title very descriptive itself',
    description: undefined,
    variant: 'info',
  },
};

export const WithCancelAction: Story = {
  render: args => <SnackbarTemplate {...args} />,
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
  render: args => <SnackbarTemplate {...args} />,
  args: {
    title: 'Action Required',
    description:
      'This message has an action that is very descriptive and talkative and wow please stop writing',
    variant: 'warning',
    cancelAction: {
      text: 'Cancel action because it’s important',
      onClick: () => alert('Undo action triggered!'),
    },
  },
};

export const CustomAutoHide: Story = {
  render: args => <SnackbarTemplate {...args} />,
  args: {
    title: 'Will close in 5s',
    autoHideDuration: 5000,
    description: 'Instead of having the default value this will close sooner',
    variant: 'success',
  },
};
