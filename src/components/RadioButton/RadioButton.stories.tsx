import RadioButton from './RadioButton';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = args => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Option',
};

export const WithExtraData = Template.bind({});
WithExtraData.args = {
  label: 'Option with Extra Data',
  extraData: 'Extra Info',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  label: 'Option with Description',
  description: 'This is a helpful description.',
};

export const WithDescriptionAndExtraData = Template.bind({});
WithDescriptionAndExtraData.args = {
  label: 'This is a label',
  description: 'This is a helpful description',
  extraData: 'This is extra info',
  isActive: true,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  label: 'Error Option',
  error: true,
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  label: 'Disabled Option',
  disabled: true,
};

export const ActiveState = Template.bind({});
ActiveState.args = {
  label: 'Active Option',
  isActive: true,
};

export const ActiveDisabled = Template.bind({});
ActiveState.args = {
  label: 'Active and Disabled',
  isActive: true,
  disabled: true,
};

export const CustomStackStyle = Template.bind({});
CustomStackStyle.args = {
  label: 'Option with Custom Stack Style',
  isActive: true,
  description: 'This makes the component more flexible.',
  stackProps: {
    sx: {
      alignItems: 'flex-start',
      gap: '4px',
      flexDirection: 'row',
      backgroundColor: '#f0f0f0',
      padding: 2,
      borderRadius: 1,
      border: '1px solid #496BE2',
    },
  },
};
