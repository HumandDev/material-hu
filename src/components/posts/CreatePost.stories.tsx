import type { Meta, StoryObj } from '@storybook/react';
import CreatePost from './CreatePost';

const meta: Meta<typeof CreatePost> = {
  component: CreatePost,
  title: 'Posts/CreatePost',
  tags: ['autodocs'],
  args: {
    fullName: 'Juane Algebra',
    handlePost: data => alert(JSON.stringify(data)),
  },
};

export default meta;

type Story = StoryObj<typeof CreatePost>;

export const Default: Story = {
  args: {},
};

export const EditPost: Story = {
  args: {
    existingPost: { body: 'This is the original post text' },
  },
};
