import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

import FormSelectionCard from './FormSelectionCard';
import { Checkbox, Radio, Stack } from '@mui/material';

const meta: Meta<typeof FormSelectionCard> = {
  component: FormSelectionCard,
  title: 'Selection card',
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FormSelectionCard>;

export const FormSelectionCardDefaultStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        myInput: false,
      },
    });

    const { myInput } = form.watch();

    return (
      <FormProvider {...form}>
        <FormSelectionCard name="myInput">
          {myInput ? 'selecionado' : 'no seleccionado'}
        </FormSelectionCard>
      </FormProvider>
    );
  },
};

export const FormSelectionCardRadioButtonStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        myInput: false,
      },
    });

    const { myInput } = form.watch();

    return (
      <FormProvider {...form}>
        <FormSelectionCard name="myInput">
          <Radio checked={myInput} />
        </FormSelectionCard>
      </FormProvider>
    );
  },
};

export const FormSelectionCardCheckBoxStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        myInput: false,
      },
    });

    const { myInput } = form.watch();

    return (
      <FormProvider {...form}>
        <FormSelectionCard name="myInput">
          <Checkbox checked={myInput} />
        </FormSelectionCard>
      </FormProvider>
    );
  },
};

export const FormSelectionCardOnlyOneOptionStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        mainRoute: {
          myInput1: false,
          myInput2: false,
        },
      },
    });

    const { mainRoute } = form.watch();

    return (
      <FormProvider {...form}>
        <Stack sx={{ gap: 1 }}>
          <FormSelectionCard
            name="mainRoute.myInput1"
            isOnlyOption
          >
            <Checkbox checked={mainRoute.myInput1} />
          </FormSelectionCard>
          <FormSelectionCard
            name="mainRoute.myInput2"
            isOnlyOption
          >
            <Checkbox checked={mainRoute.myInput2} />
          </FormSelectionCard>
        </Stack>
      </FormProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'La prop isOnlyOption deshabilita todas las opciónes marcadas, menos la clickeada. Para su uso correcto es necesario aplicarlo para cada elemento (FormSelectionCard)',
      },
    },
  },
};
