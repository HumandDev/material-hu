import type { Meta, StoryObj } from '@storybook/react';
import FileCard from './FileCard';

const mockBlob = new Blob(['This is the file content!'], {
  type: 'text/plain',
});
export const mockFile = new File([mockBlob], 'FileName.txt', {
  type: 'text/plain',
});

const meta: Meta<typeof FileCard> = {
  component: FileCard,
  title: 'FileCard',
  tags: ['autodocs'],
  args: {
    status: 'uploading',
    file: mockFile,
  },
};

export default meta;

type Story = StoryObj<typeof FileCard>;

export const Default: Story = {
  args: {},
};
