import { Meta, StoryObj } from '@storybook/react/*';
import Link from './Link';
import { Typography } from '@mui/material';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Link',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Link',
    hasIcon: true,
  },
};

export const NoIcon: Story = {
  args: {
    href: '#',
    children: 'Link',
    hasIcon: false,
  },
};

export const Disabled: Story = {
  args: {
    href: '#',
    children: 'Link',
    disabled: true,
  },
};

export const CustomTypograhy: Story = {
  args: {
    href: '#',
    children: (
      <Typography
        variant="globalM"
        color="primary"
      >
        Global M Typography
      </Typography>
    ),
    iconSize: 24,
    hasIcon: true,
  },
};
