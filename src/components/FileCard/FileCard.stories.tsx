import type { Meta, StoryObj } from '@storybook/react';
import FileCard from './FileCard';

const meta: Meta<typeof FileCard> = {
  component: FileCard,
  title: 'FileCard',
  tags: ['autodocs'],
  args: {
    status: 'uploading',
    name: 'File name',
    size: 300,
    format: 'pdf',
  },
};

export default meta;

type Story = StoryObj<typeof FileCard>;

export const Default: Story = {
  args: {},
};
