/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react';
import Uploader from './Uploader';
import { FormProvider, useForm } from 'react-hook-form';
import FormUploader from './FormUploader';

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
            fileSizeLimitInMB: 400,
            helperText: 'Upload your files here',
            uploadFunction: file =>
              new Promise(resolve =>
                resolve({
                  name: file.name,
                  status: 'success',
                  format: file.type,
                  size: file.size,
                }),
              ),
          }}
        />
      </FormProvider>
    );
  },
};
