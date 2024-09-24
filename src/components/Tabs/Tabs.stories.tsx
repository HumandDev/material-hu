import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Tabs',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [{ label: 'Item' }, { label: 'Item 2' }],
  },
};

export const OneTab: Story = {
  args: {
    tabs: [{ label: 'Item' }],
  },
};

export const TwoTabs: Story = {
  args: {
    tabs: [{ label: 'Item' }, { label: 'Item 2' }],
  },
};

export const ThreeTabs: Story = {
  args: {
    tabs: [{ label: 'Item' }, { label: 'Item 2' }, { label: 'Item 3' }],
  },
};

export const FourTabs: Story = {
  args: {
    tabs: [
      { label: 'Item' },
      { label: 'Item 2' },
      { label: 'Item 3' },
      { label: 'Item 4' },
    ],
  },
};

export const FiveTabs: Story = {
  args: {
    tabs: [
      { label: 'Item' },
      { label: 'Item 2' },
      { label: 'Item 3' },
      { label: 'Item 4' },
      { label: 'Item 5' },
    ],
  },
};

export const SixTabs: Story = {
  args: {
    tabs: [
      { label: 'Item' },
      { label: 'Item 2' },
      { label: 'Item 3' },
      { label: 'Item 4' },
      { label: 'Item 5' },
      { label: 'Item 6' },
    ],
  },
};

export const SevenTabs: Story = {
  args: {
    tabs: [
      { label: 'Item' },
      { label: 'Item 2' },
      { label: 'Item 3' },
      { label: 'Item 4' },
      { label: 'Item 5' },
      { label: 'Item 6' },
      { label: 'Item 7' },
    ],
  },
};
