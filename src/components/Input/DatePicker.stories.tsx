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
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const FormDatePickerStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        myDatePicker: new Date(),
      },
    });
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FormProvider {...form}>
          <FormDatePicker
            inputProps={{
              label: 'Label',
              helperText: 'Helper Text',
            }}
            name="myDatePicker"
          />
        </FormProvider>
      </LocalizationProvider>
    );
  },
};
