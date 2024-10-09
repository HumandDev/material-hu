import type { Meta, StoryObj } from '@storybook/react';
import Uploader from './Uploader';

const meta: Meta<typeof Uploader> = {
  component: Uploader,
  title: 'Uploader',
  tags: ['autodocs'],
  args: {
    helperText: 'Helper Text',
    label: 'Label',
    uploads: [],
  },
};

export default meta;

type Story = StoryObj<typeof Uploader>;

export const WithUploads: Story = {
  args: {
    uploads: [
      {
        name: 'file 1',
        format: 'PDF',
        size: 300,
        status: 'success',
      },
      {
        name: 'file 2',
        format: 'PDF',
        size: 300,
        status: 'error',
      },
      {
        name: 'file 3',
        format: 'PDF',
        size: 3000,
        status: 'uploading',
      },
    ],
  },
};
