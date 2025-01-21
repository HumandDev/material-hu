import type { Meta, StoryObj } from '@storybook/react';
import SeeMoreText from './SeeMoreText';

const meta: Meta<typeof SeeMoreText> = {
  component: SeeMoreText,
  title: 'SeeMoreText',
  tags: ['autodocs'],
  args: {
    text: 'Juane Algebra',
  },
};

export default meta;

type Story = StoryObj<typeof SeeMoreText>;

export const Default: Story = {
  args: {},
};
