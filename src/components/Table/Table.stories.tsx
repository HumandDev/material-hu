import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import { Stack } from '@mui/material';

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Table',
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => <Table />,
};
