import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import Rating from './Rating';
import FormRating from './FormRating';

const meta: Meta<typeof Rating> = {
  component: Rating,
  title: 'Rating',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const RatingStory: Story = {
  args: {
    max: 5,
    disabled: false,
    readOnly: false,
    size: 'medium',
  },
};

export const FormRatingStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        myRating: null,
      },
    });
    return (
      <FormProvider {...form}>
        <FormRating name="myRating" />
      </FormProvider>
    );
  },
};
