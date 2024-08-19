import type { Meta, StoryObj } from '@storybook/react';
import { Divider, List, ListItem, ListItemText, Chip } from '@mui/material';

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Divider',
  tags: ['autodocs'],
  argTypes: {
    absolute: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    flexItem: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    textAlign: {
      control: 'radio',
      options: ['center', 'left', 'rigth'],
      table: {
        defaultValue: { summary: 'center' },
      },
    },
    variant: {
      control: 'radio',
      options: ['fullWidth', 'inset', 'middle'],
      table: {
        defaultValue: { summary: 'fullWidth' },
      },
    },
    children: {
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  args: {
    absolute: false,
    flexItem: false,
    orientation: 'horizontal',
    textAlign: 'center',
    variant: 'fullWidth',
  },
  decorators: [
    Story => (
      <List
        sx={{
          py: 0,
          width: '100%',
          maxWidth: 360,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'background.paper',
        }}
      >
        <ListItem>
          <ListItemText primary="Lorem ipsum odor amet" />
        </ListItem>
        <Story />
        <ListItem>
          <ListItemText primary="Lorem ipsum odor amet" />
        </ListItem>
      </List>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const Inset: Story = {
  args: {
    variant: 'inset',
  },
};

export const Middle: Story = {
  args: {
    variant: 'middle',
  },
};

export const WithChildren: Story = {
  args: {
    children: (
      <Chip
        label="chip"
        size="small"
      />
    ),
  },
};
