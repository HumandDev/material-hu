import type { Meta, StoryObj } from '@storybook/react';
import AvatarGroup from './AvatarGroup';
import ImgAvatar1 from '../../../static/avatar1.png';

const meta: Meta<typeof AvatarGroup> = {
  component: AvatarGroup,
  title: 'AvatarGroup',
  tags: ['autodocs'],
  args: {
    avatars: [
      { src: ImgAvatar1, alt: 'Avatar Alt' },
      {
        src: 'broken-image.png',
        alt: 'Avatar Alt',
        text: 'OP',
        color: 'success',
      },
      { src: 'broken-image.png', alt: 'Avatar Alt', color: 'error' },
      { src: '', alt: '' },
      { src: '', alt: '' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = { args: {} };
