import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import InputSelect from './InputSelect';
import FormInputSelect from './FormInputSelect';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

const meta: Meta<typeof InputSelect> = {
  component: InputSelect,
  title: 'Input/Select',
  tags: ['autodocs'],
  args: {
    options,
    placeholder: 'Placeholder',
    value: '',
    onChange: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof InputSelect>;

export const NoLabel: Story = {
  args: {},
};

export const DefaultWithHelper: Story = {
  args: {
    label: 'Label',
    helperText: 'Helper',
    value: '',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    value: '',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Label',
    helperText: 'HelperText',
    errorText: 'Error text',
    value: options[0].value,
    error: true,
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
        <FormInputSelect
          inputProps={{
            placeholder: 'Placeholder',
            label: 'Label',
            helperText: 'HelperText',
            options,
            allowClear: true,
          }}
          name="myInput"
        />
      </FormProvider>
    );
  },
};
