import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import Search from './Search';
import FormSearch from './FormSearch';

const meta: Meta<typeof Search> = {
  component: Search,
  title: 'Input/Search',
  tags: ['autodocs'],
  args: {
    variant: 'classic',
  },
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {},
};

export const Custom: Story = {
  args: {
    variant: 'custom',
  },
};

export const Error: Story = {
  args: {
    helperText: 'HelperText',
    errorText: 'Error text',
    value: 'value!',
    error: true,
  },
};

export const Success: Story = {
  args: {
    helperText: 'HelperText',
    errorText: 'Error text',
    value: 'value!',
    success: true,
  },
};

export const Disabled: Story = {
  args: {
    helperText: 'HelperText',
    errorText: 'Error text',
    disabled: true,
  },
};

export const FormSearchStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        myInput: '',
      },
    });
    return (
      <FormProvider {...form}>
        <FormSearch name="myInput" />
      </FormProvider>
    );
  },
};
