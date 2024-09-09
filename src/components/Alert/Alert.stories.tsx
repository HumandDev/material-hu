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
    hasClose: false,
    action: { text: 'Action!', onClick: () => alert('Action has been run') },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {},
};
