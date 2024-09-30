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
    tabs: [
      { label: 'Item', value: 'ITEM' },
      { label: 'Item 2', value: 'ITEM_2' },
    ],
  },
};

export const OneTab: Story = {
  args: {
    tabs: [{ label: 'Item', value: 'ITEM' }],
  },
};

export const TwoTabs: Story = {
  args: {
    tabs: [
      { label: 'Item', value: 'ITEM' },
      { label: 'Item 2', value: 'ITEM_2' },
    ],
  },
};

export const ThreeTabs: Story = {
  args: {
    tabs: [
      { label: 'Item', value: 'ITEM' },
      { label: 'Item 2', value: 'ITEM_2' },
      { label: 'Item 3', value: 'ITEM_3' },
    ],
  },
};

export const FourTabs: Story = {
  args: {
    tabs: [
      { label: 'Item', value: 'ITEM' },
      { label: 'Item 2', value: 'ITEM_2' },
      { label: 'Item 3', value: 'ITEM_3' },
      { label: 'Item 4', value: 'ITEM_4' },
    ],
  },
};

export const FiveTabs: Story = {
  args: {
    tabs: [
      { label: 'Item', value: 'ITEM' },
      { label: 'Item 2', value: 'ITEM_2' },
      { label: 'Item 3', value: 'ITEM_3' },
      { label: 'Item 4', value: 'ITEM_4' },
      { label: 'Item 5', value: 'ITEM_5' },
    ],
  },
};

export const SixTabs: Story = {
  args: {
    tabs: [
      { label: 'Item', value: 'ITEM' },
      { label: 'Item 2', value: 'ITEM_2' },
      { label: 'Item 3', value: 'ITEM_3' },
      { label: 'Item 4', value: 'ITEM_4' },
      { label: 'Item 5', value: 'ITEM_5' },
      { label: 'Item 6', value: 'ITEM_6' },
    ],
  },
};

export const SevenTabs: Story = {
  args: {
    tabs: [
      { label: 'Item', value: 'ITEM' },
      { label: 'Item 2', value: 'ITEM_2' },
      { label: 'Item 3', value: 'ITEM_3' },
      { label: 'Item 4', value: 'ITEM_4' },
      { label: 'Item 5', value: 'ITEM_5' },
      { label: 'Item 6', value: 'ITEM_6' },
      { label: 'Item 7', value: 'ITEM_7' },
    ],
  },
};
