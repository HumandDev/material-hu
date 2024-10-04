import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';
import { IconInfoCircle } from '@tabler/icons-react';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Tooltip',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    direction: 'top',
    children: <IconInfoCircle />,
  },
};
