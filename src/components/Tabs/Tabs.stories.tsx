import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';
import { Typography } from '@mui/material';

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

export const ControlledValueStory: Story = {
  render: () => {
    const [currentTab, setCurrentTab] = useState('ITEM_1');

    const handleTabChange = (value: string) => {
      setCurrentTab(value);
    };

    return (
      <>
        <Typography>{`Seleccionado: ${currentTab}`}</Typography>
        <Tabs
          value={currentTab}
          tabs={[
            { label: 'Item 1', value: 'ITEM_1' },
            { label: 'Item 2', value: 'ITEM_2' },
          ]}
          onTabChange={handleTabChange}
        />
      </>
    );
  },
};
