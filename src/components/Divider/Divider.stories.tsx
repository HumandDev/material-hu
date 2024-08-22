import type { Meta, StoryObj } from '@storybook/react';
import { Box, Divider } from '@mui/material';

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Divider',
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
  },
  args: {
    orientation: 'horizontal',
  },
  decorators: [
    (Story, context) => (
      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection:
            context.args.orientation === 'vertical' ? 'row' : 'column',
          maxWidth: context.args.orientation === 'vertical' ? 'auto' : 50,
        }}
      >
        <Box p={0.5}>Item 1</Box>
        <Story />
        <Box p={0.5}>Item 2</Box>
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
};
