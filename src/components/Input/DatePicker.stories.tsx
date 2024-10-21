import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import DatePicker from './DatePicker';
import FormDatePicker from './FormDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'DatePicker',
  tags: ['autodocs'],
  args: {
    value: 'value!',
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const FormDatePickerStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        myDatePicker: '',
      },
    });
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FormProvider {...form}>
          <FormDatePicker
            inputProps={{
              placeholder: 'Placeholder',
              label: 'Label',
              helperText: 'HelperText',
            }}
            name="myDatePicker"
          />
        </FormProvider>
      </LocalizationProvider>
    );
  },
};

export const FormRangeDatePickerStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        myDatePicker: [],
      },
    });
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FormProvider {...form}>
          <FormDatePicker
            range
            inputProps={{
              placeholder: 'Placeholder',
              label: 'Label',
              helperText: 'HelperText',
            }}
            name="myDatePicker"
          />
        </FormProvider>
      </LocalizationProvider>
    );
  },
};
