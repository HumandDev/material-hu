import { Link, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

const breadcrumbsChildren = [
  <Link
    key={0}
    href="#"
  >
    Home
  </Link>,
  <Link
    key={1}
    href="#"
  >
    Core
  </Link>,
  <Link
    key={2}
    href="#"
  >
    Core
  </Link>,
  <Typography
    key={3}
    color="text.primary"
  >
    Leaf
  </Typography>,
];

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
  tags: ['autodocs'],
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {
    children: breadcrumbsChildren,
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {},
};

export const Collapsed: Story = {
  args: {
    children: [
      ...breadcrumbsChildren,
      <Link
        key={99}
        href="#"
      >
        Core
      </Link>,
    ],
  },
};

export const A: Story = {
  args: {},
};
