import { FormProvider, useForm } from 'react-hook-form';
import RadioButton from './RadioButton';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import FormRadioButton from './FormRadioButton';
import { Stack } from '@mui/material';

type Story = StoryObj<typeof RadioButton>;

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = args => <RadioButton {...args} />;

export const DefaultStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        value: false,
      },
    });
    const { watch, setValue } = form;
    const { value } = watch();

    return (
      <RadioButton
        isActive={value}
        onClick={param => setValue('value', param)}
        label="Value"
      />
    );
  },
};

export const Description: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        value: false,
      },
    });
    const { watch, setValue } = form;
    const { value } = watch();

    return (
      <RadioButton
        isActive={value}
        onClick={param => setValue('value', param)}
        label="Value"
        description="This is a helpful description."
      />
    );
  },
};

export const ExtraData: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        value: false,
      },
    });
    const { watch, setValue } = form;
    const { value } = watch();

    return (
      <RadioButton
        isActive={value}
        onClick={param => setValue('value', param)}
        label="Value"
        extraData="Extra Info"
      />
    );
  },
};

export const DescriptionAndExtraData: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        value: false,
      },
    });
    const { watch, setValue } = form;
    const { value } = watch();

    return (
      <RadioButton
        isActive={value}
        onClick={param => setValue('value', param)}
        label="Value"
        extraData="Extra Info"
        description="This is a helpful description."
      />
    );
  },
};

export const Error: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        value: false,
      },
    });
    const { watch, setValue } = form;
    const { value } = watch();

    return (
      <RadioButton
        isActive={value}
        error
        onClick={param => setValue('value', param)}
        label="Value"
        extraData="Extra Info"
        description="This is a helpful description."
      />
    );
  },
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  label: 'Disabled Option',
  disabled: true,
};

export const ActiveDisabled = Template.bind({});
ActiveDisabled.args = {
  label: 'Active and Disabled',
  description: 'This is a helpful description.',
  isActive: true,
  disabled: true,
};

export const CustomContainerStyling: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        value: false,
      },
    });
    const { watch, setValue } = form;
    const { value } = watch();

    return (
      <RadioButton
        isActive={value}
        onClick={param => setValue('value', param)}
        label="Value"
        extraData="Extra Info"
        description="This is a helpful description."
        stackSx={{
          alignItems: 'flex-start',
          gap: '4px',
          flexDirection: 'row',
          boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
          padding: 2,
          backgroundColor: '#fafaff',
          borderRadius: 1,
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'The stackSx prop allows you to customize the container of the RadioButton component.',
      },
    },
  },
};

export const WithForm: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        value: false,
      },
    });

    return (
      <FormProvider {...form}>
        <FormRadioButton
          name="value"
          radioButtonProps={{
            label: 'Form Input Classic Story',
            description: 'This is a helpful description.',
            extraData: 'Extra Info',
          }}
        />
      </FormProvider>
    );
  },
};

export const FormSelectionCardOnlyOneOptionStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        base: {
          radio1: false,
          radio2: false,
        },
      },
    });

    return (
      <FormProvider {...form}>
        <Stack sx={{ gap: 2 }}>
          <FormRadioButton
            name="base.radio1"
            isOnlyOption
            radioButtonProps={{
              label: 'Option 1',
              description: 'Description for the first one',
            }}
          />
          <FormRadioButton
            name="base.radio2"
            isOnlyOption
            radioButtonProps={{
              label: 'Option 2',
              description: 'Description for the second one',
            }}
          />
        </Stack>
      </FormProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'La prop isOnlyOption deshabilita todas las opciónes marcadas, menos la clickeada. Para su uso correcto es necesario aplicarlo para cada elemento (FormRadioButton)',
      },
    },
  },
};
