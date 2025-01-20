import type { Meta, StoryObj } from '@storybook/react';
import StateCard from './StateCard';

const meta: Meta<typeof StateCard> = {
  component: StateCard,
  title: 'StateCard',
  tags: ['autodocs'],
  args: {
    title: 'Title of StateCard',
    description: 'This is an example of description in StateCard',
  },
};

export default meta;

type Story = StoryObj<typeof StateCard>;

export const Default: Story = {
  args: {},
};
