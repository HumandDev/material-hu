import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta: Meta<typeof Title> = {
  component: Title,
  title: 'Title',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    copetin: 'Copetin',
    description: 'Description',
    title: 'Title',
    variant: 'XL',
    descriptionTooltip: 'Description Tooltip',
    copetinTooltip: 'Copetin Tooltip',
  },
};
