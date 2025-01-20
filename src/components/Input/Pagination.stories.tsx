import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import Pagination from './Pagination';
import FormPagination from './FormPagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'Input/Pagination',
  tags: ['autodocs'],
  args: {
    page: 1,
    totalPages: 10,
    limit: 10,
    limitOptions: [10, 20, 30],
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {},
};

export const Basic: Story = {
  args: {
    type: 'basic',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const FormPaginationStory: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        pagination: {
          page: 1,
          limit: 10,
        },
      },
    });
    return (
      <FormProvider {...form}>
        <FormPagination
          name="pagination"
          inputProps={{
            totalPages: 10,
          }}
        />
      </FormProvider>
    );
  },
};
