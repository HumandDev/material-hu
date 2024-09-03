import type { Meta, StoryObj } from '@storybook/react';
import ImgAvatar1 from '../../../static/avatar1.png';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
  tags: ['autodocs'],
  args: {
    src: ImgAvatar1,
    alt: 'Avatar Alt',
    text: 'AP',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
};

export const Badge: Story = {
  args: {
    withBadge: true,
  },
};

export const BadgeNumber: Story = {
  args: {
    withBadge: true,
    badgeContent: 12,
  },
};

export const BadgeMax: Story = {
  args: {
    withBadge: true,
    badgeContent: 1000,
  },
};

export const SquareAvatar: Story = {
  args: {
    variant: 'square',
  },
};

export const FallbackText: Story = {
  args: {
    src: 'broken-image.png',
    alt: undefined,
  },
};

export const FallbackAlt: Story = {
  args: {
    src: 'broken-image.png',
    text: undefined,
  },
};

export const Fallback: Story = {
  args: {
    src: 'broken-image.png',
    alt: '',
    text: undefined,
  },
};
