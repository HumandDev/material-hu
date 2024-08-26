import type { Meta, StoryObj } from '@storybook/react';
import MailIcon from '@mui/icons-material/Mail';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Badge',
  tags: ['autodocs'],
  argTypes: {
    badgeContent: {
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    color: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      table: {
        type: { summary: 'union' },
      },
    },
    invisible: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: 'radio',
      options: ['dot', 'standard'],
      table: {
        type: { summary: 'union' },
        defaultValue: { summary: 'standard' },
      },
    },
    children: {
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    anchorOrigin: {
      control: 'object',
      table: {
        type: {
          summary:
            "{ horizontal: 'left' | 'right', vertical: 'bottom' | 'top' }",
        },
        defaultValue: { summary: "{ vertical: 'top', horizontal: 'right', }" },
      },
    },
  },
  args: {
    invisible: false,
    badgeContent: 4,
    color: 'primary',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    children: <MailIcon color="action" />,
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {},
};

export const Dot: Story = {
  args: {
    variant: 'dot',
  },
};

export const AnchorOrigin: Story = {
  args: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
  },
};
