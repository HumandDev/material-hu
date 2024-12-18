/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import Uploader from './Uploader';
import FormUploader from './FormUploader';
import { mockFile } from '../FileCard/FileCard.stories';

const meta: Meta<typeof Uploader> = {
  component: Uploader,
  title: 'Uploader',
  tags: ['autodocs'],
  args: {
    helperText: 'Helper Text',
    label: 'Label',
    value: [],
    onDropAccepted: files => {
      console.log('onDropAccepted', files);
    },
    onDropRejected: (files, event) => {
      console.log('onDropRejected', files, event);
    },
    sx: { width: '100%' },
  },
};

export default meta;

type Story = StoryObj<typeof Uploader>;

export const WithUploads: Story = {
  args: {
    value: [
      {
        status: 'success',
        file: mockFile,
      },
      {
        status: 'error',
        file: mockFile,
      },
      {
        status: 'uploading',
        file: mockFile,
      },
    ],
  },
};

export const UploaderWithForm: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        files: [],
      },
    });
    return (
      <FormProvider {...form}>
        <FormUploader
          name="files"
          uploaderProps={{
            sx: { width: '100%' },
            label: 'Upload Files',
            helperText: 'Upload your files here',
            uploadFunction: file =>
              new Promise(resolve =>
                resolve({
                  status: 'success',
                  file,
                }),
              ),
          }}
        />
      </FormProvider>
    );
  },
};
