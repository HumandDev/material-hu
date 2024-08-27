import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '../Avatar/Avatar';
import AvatarGroup from './AvatarGroup';
import ImgAvatar1 from '../../../static/avatar1.png';

const children = [
  { src: ImgAvatar1, alt: 'Avatar Alt' },
  { src: '', alt: 'Avatar Alt', children: 'OP' },
  { src: '', alt: 'Avatar Alt' },
  { src: '', alt: '' },
  { src: '', alt: '' },
].map((u, index) => (
  <Avatar
    key={index}
    color="success"
    {...u}
  />
));

const meta: Meta<typeof AvatarGroup> = {
  component: AvatarGroup,
  title: 'AvatarGroup',
  tags: ['autodocs'],
  args: {
    children,
  },
};

export default meta;

type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  args: { children },
};
