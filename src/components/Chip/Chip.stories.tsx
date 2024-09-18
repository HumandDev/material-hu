import type { Meta, StoryObj } from '@storybook/react';
import Chip from './Chip';

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: 'Chip',
  tags: ['autodocs'],
  args: {
    label: 'Default label',
    size: 'medium',
    disabled: false,
    onDelete: () => {
      alert('Delete button clicked');
    },
    onClick: () => {
      alert('Chip clicked');
    },
  },
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {},
};

export const Medium: Story = {
  args: {
    onDelete: undefined,
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    onDelete: undefined,
    size: 'small',
  },
};

export const MediumDeletable: Story = {
  args: {
    onDelete: () => {
      alert('Delete button clicked');
    },
    size: 'medium',
  },
};

export const SmallDeletable: Story = {
  args: {
    onDelete: () => {
      alert('Delete button clicked');
    },
    size: 'small',
  },
};

export const MediumSelected: Story = {
  args: {
    isSelected: true,
    size: 'medium',
  },
};

export const SmallSelected: Story = {
  args: {
    isSelected: true,
    size: 'small',
  },
};

export const MediumDisabled: Story = {
  args: {
    disabled: true,
    size: 'medium',
  },
};

export const SmallDisabled: Story = {
  args: {
    disabled: true,
    size: 'small',
  },
};
