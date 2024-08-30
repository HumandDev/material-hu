import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';
import { East, Cake } from '@mui/icons-material';
import { Box } from '@mui/material';

const breadcrumbsChildren = [
  {
    title: 'Home',
    href: '#',
  },
  {
    title: 'Second',
    href: '#',
  },
  {
    title: 'Third',
    href: '#',
  },
  {
    title: 'Fourth',
    href: '#',
  },
];

const breadcrumbsChildrenCollapsed = [
  ...breadcrumbsChildren,
  {
    title: 'Fifth',
    href: '#',
  },
];

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
  tags: ['autodocs'],
  argTypes: {},
  args: {
    links: breadcrumbsChildren,
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {},
};

export const Collapsed: Story = {
  args: {
    links: breadcrumbsChildrenCollapsed,
  },
};

export const DarkBackground: Story = {
  args: {
    links: breadcrumbsChildrenCollapsed,
    darkBackground: true,
  },
  render: props => (
    <Box sx={{ backgroundColor: 'black', p: 3 }}>
      <Breadcrumbs {...props} />
    </Box>
  ),
};

export const WithIcons: Story = {
  args: {
    links: breadcrumbsChildren.map((link, index) => ({
      ...link,
      icon: index === 0 ? East : Cake,
    })),
  },
};
