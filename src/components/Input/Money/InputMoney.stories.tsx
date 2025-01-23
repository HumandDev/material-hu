import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  defaultTransformNumberToCurrencyOptions,
  transformCurrencyToNumber,
  transformNumberToCurrency,
} from './InputMoney.utils';
import FormInputMoney from './FormInputMoney';
import InputMoney from './InputMoney';

const meta: Meta<typeof InputMoney> = {
  component: InputMoney,
  title: 'Input/Money',
  tags: ['autodocs'],
  args: {
    value: '1234567.89',
  },
  argTypes: {
    value: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputMoney>;

export const Default: Story = {
  args: {
    value: '1234567.89',
    placeholder: 'Placeholder',
    transform: {
      output: (value: string) => {
        return transformNumberToCurrency(
          value,
          defaultTransformNumberToCurrencyOptions,
        );
      },
      input: value => {
        return transformCurrencyToNumber(
          value,
          defaultTransformNumberToCurrencyOptions,
        );
      },
    },
  },
};

export const FormInputMoneyStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        moneyInput: '',
      },
    });

    const localeOptions = defaultTransformNumberToCurrencyOptions;

    return (
      <FormProvider {...form}>
        <FormInputMoney
          inputProps={{
            placeholder: 'Placeholder',
            label: 'Label',
            helperText: 'Helper Text',
          }}
          name="moneyInput"
          transform={{
            output: (value: string) => {
              return transformNumberToCurrency(value, localeOptions);
            },
            input: value => {
              return transformCurrencyToNumber(value, localeOptions);
            },
          }}
        />
      </FormProvider>
    );
  },
};
