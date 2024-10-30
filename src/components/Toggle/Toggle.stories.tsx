import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Toggle',
  tags: ['autodocs'],
  args: {
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: { disabled: false },
};

export const Disabled: Story = {
  args: { disabled: true },
};
