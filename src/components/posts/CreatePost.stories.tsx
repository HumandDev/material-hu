import type { Meta, StoryObj } from '@storybook/react';
import CreatePost from './CreatePost';

const meta: Meta<typeof CreatePost> = {
  component: CreatePost,
  title: 'Posts/CreatePost',
  tags: ['autodocs'],
  args: {
    fullName: 'Juane Algebra',
    handlePost: data => console.log(data),
  },
};

export default meta;

type Story = StoryObj<typeof CreatePost>;

export const Default: Story = {
  args: {},
};
