import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import InputClassic from './InputClassic';
import FormInputClassic from './FormInputClassic';
import { IconSearch } from '@tabler/icons-react';

const meta: Meta<typeof InputClassic> = {
  component: InputClassic,
  title: 'Input/Classic',
  tags: ['autodocs'],
  args: {
    value: 'value!',
  },
};

export default meta;

type Story = StoryObj<typeof InputClassic>;

export const NoLabel: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export const DefaultWithHelper: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    helperText: 'Helper',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    helperText: 'HelperText',
    errorText: 'Error text',
    value: 'value!',
    error: true,
  },
};

export const Success: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    helperText: 'HelperText',
    errorText: 'Error text',
    value: 'value!',
    success: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    helperText: 'HelperText',
    errorText: 'Error text',
    value: 'value!',
    disabled: true,
  },
};

export const FormInputClassicStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        myInput: '',
      },
    });
    return (
      <FormProvider {...form}>
        <FormInputClassic
          inputProps={{
            placeholder: 'Placeholder',
            label: 'Label',
            helperText: 'HelperText',
            hasCounter: true,
          }}
          name="myInput"
        />
      </FormProvider>
    );
  },
};

export const FormInputClassicMultilineStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        myInput: '',
      },
    });
    return (
      <FormProvider {...form}>
        <FormInputClassic
          inputProps={{
            placeholder: 'Placeholder',
            label: 'Label',
            helperText: 'HelperText',
            hasCounter: true,
            multiline: true,
          }}
          name="myInput"
        />
      </FormProvider>
    );
  },
};

export const FormInputClassicWithStartAdorment: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        myInput: '',
      },
    });
    return (
      <FormProvider {...form}>
        <FormInputClassic
          inputProps={{
            placeholder: 'Placeholder',
            label: 'Label',
            helperText: 'HelperText',
            startAdornment: <IconSearch />,
          }}
          name="myInput"
        />
      </FormProvider>
    );
  },
};
