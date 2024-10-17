import { FormProvider, useForm } from 'react-hook-form';
import { Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import CustomCheckbox from './Checkbox';
import FormCheckbox from './FormCheckbox';

const meta: Meta<typeof CustomCheckbox> = {
  component: CustomCheckbox,
  title: 'Input/Checkbox',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CustomCheckbox>;

export const WithExtraInfo: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    extraInfo: 'Extra Info',
  },
};

export const OnlyLabel: Story = {
  args: {
    label: 'Label',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    disabled: true,
    checked: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    error: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    indeterminate: true,
  },
};

export const FormCheckboxStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        item1: true,
        item2: false,
      },
    });
    const { item1, item2 } = form.watch();
    return (
      <FormProvider {...form}>
        <FormCheckbox
          checkBoxProps={{
            label: 'Option1',
            description: 'Description',
            checked: item1 && item2,
            indeterminate: item1 !== item2,
            onChange: e => {
              form.setValue('item1', e.target.checked);
              form.setValue('item2', e.target.checked);
            },
          }}
          name="option1"
        />
        <Stack sx={{ pl: 1 }}>
          <FormCheckbox
            checkBoxProps={{
              label: 'Item1',
              description: 'Description',
            }}
            name="item1"
          />
          <FormCheckbox
            checkBoxProps={{
              label: 'Item2',
              description: 'Description',
            }}
            name="item2"
          />
        </Stack>
      </FormProvider>
    );
  },
};
