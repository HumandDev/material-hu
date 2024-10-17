import type { Meta, StoryObj } from '@storybook/react';
import ButtonGroup from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'ButtonGroup',
  tags: ['autodocs'],
  args: {
    labels: ['Button 1', 'Button 2'],
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {},
};

export const Two: Story = {
  args: {
    labels: ['Button 1', 'Button 2'],
  },
};

export const Three: Story = {
  args: {
    labels: ['Button 1', 'Button 2', 'Button 3'],
  },
};
