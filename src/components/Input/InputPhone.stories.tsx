import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import InputPhone from './InputPhone';
import FormInputPhone from './FormInputPhone';

const meta = {
  title: 'Components/Input/InputPhone',
  component: InputPhone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultCountry: {
      type: 'string',
      description: 'The default country code',
      control: 'select',
      options: [
        'AR',
        'MX',
        'US',
        'BR',
        'CL',
        'UY',
        'PY',
        'BO',
        'PE',
        'EC',
        'CO',
        'VE',
      ],
    },
    fullWidth: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    preferredCountries: {
      table: {
        disable: true,
      },
    },
  },
  render: args => {
    const [value, setValue] = useState(args.value || '');

    return (
      <InputPhone
        {...args}
        value={value}
        onChange={newValue => setValue(newValue)}
      />
    );
  },
} satisfies Meta<typeof InputPhone>;

export default meta;
type Story = StoryObj<typeof InputPhone>;

export const Default: Story = {
  args: {},
};

export const WithDefaultValue: Story = {
  args: {
    value: '1123456789',
    defaultCountry: 'MX',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Enter your phone number',
    error: true,
    helperText: 'Invalid phone number',
  },
};

export const Valid: Story = {
  args: {
    label: 'Enter your phone number',
    success: true,
    helperText: 'Valid phone number',
  },
};

export const WithLabelAndHelperText: Story = {
  args: {
    label: 'Enter your phone number',
    helperText: "Make sure it's yours, don't lie!",
  },
};

export const WithFormControl: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        phoneNumber: '',
      },
    });

    const onSubmit = form.handleSubmit(() => {});

    return (
      <FormProvider {...form}>
        <form onSubmit={onSubmit}>
          <FormInputPhone
            name="phoneNumber"
            showErrors
            rules={{ required: 'Número requerido' }}
          />
          <Button type="submit">Submit empty to see required error</Button>
        </form>
      </FormProvider>
    );
  },
};
