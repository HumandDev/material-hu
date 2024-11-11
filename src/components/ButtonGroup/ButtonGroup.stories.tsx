import type { Meta, StoryObj } from '@storybook/react';
import ButtonGroup from './ButtonGroup';
import { Stack } from '@mui/material';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'ButtonGroup',
  tags: ['autodocs'],
  args: {
    labels: ['Button 1', 'Button 2'],
    fullWidth: false,
    disableUnselect: false,
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

export const DisabledUnselect: Story = {
  args: {
    labels: ['Button 1', 'Button 2', 'Button 3'],
    disableUnselect: true,
    onChange: index => alert(`You have clicked ${index + 1}`),
  },
};

export const WithOnChange: Story = {
  args: {
    labels: ['Button 1', 'Button 2', 'Button 3'],
    onChange: index => alert(`You have clicked ${index + 1}`),
  },
};

export const FullWidth: Story = {
  render: args => (
    <Stack>
      <ButtonGroup {...args} />
    </Stack>
  ),
  args: {
    labels: ['Button 1', 'Button 2', 'Button 3'],
    fullWidth: true,
  },
};
