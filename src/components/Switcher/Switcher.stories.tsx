import { Meta, StoryObj } from '@storybook/react/*';
import Switcher from './Switcher';
import { FormProvider, useForm } from 'react-hook-form';
import FormSwitcher from './FormSwitcher';

const meta: Meta<typeof Switcher> = {
  component: Switcher,
  title: 'Switcher',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Switcher>;

const exampleTitle = 'Chocolate';
const exampleDescription = 'Toggle if you like chocolate';

export const Default: Story = {
  args: {
    title: exampleTitle,
    description: exampleDescription,
  },
};

export const Disabled: Story = {
  args: {
    title: exampleTitle,
    description: exampleDescription,
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    title: exampleTitle,
    description: exampleDescription,
    value: true,
  },
};

export const FormSwitcherStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        mySwitch1: false,
        mySwitch2: true,
      },
    });
    return (
      <FormProvider {...form}>
        <FormSwitcher
          name="mySwitch1"
          switcherProps={{
            title: 'My title 1',
            description: 'My description 1',
          }}
        />
        <FormSwitcher
          name="mySwitch2"
          switcherProps={{
            title: 'My title 2',
            description: 'My description 2',
          }}
        />
      </FormProvider>
    );
  },
};
