import type { Meta, StoryObj } from '@storybook/react';
import List from './List';
import ListItem from './ListItem';
import Pills from '../Pills/Pills';
import { Card } from '@mui/material';
import { IconUser, IconDotsVertical } from '@tabler/icons-react';
import ImgAvatar1 from '../../../static/avatar1.png';

const meta: Meta<typeof List> = {
  component: List,
  title: 'List',
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <ListItem
          divider
          avatar={{
            Icon: IconUser,
            color: 'primary',
          }}
          text={{
            copetin: 'Copetin 1',
            title: 'Title 1',
            description: 'Description 1',
          }}
          action={{
            onClick: () => alert('You have clicked "Title 1" action'),
            'aria-label': 'Title 1 action',
            Icon: IconDotsVertical,
          }}
        />
        <ListItem
          divider
          avatar={{
            Icon: IconUser,
            color: 'primary',
          }}
          text={{
            copetin: 'Copetin 2',
            title: 'Title 2',
            description: 'Description 2',
          }}
          action={{
            onClick: () => alert('You have clicked "Title 2" action'),
            'aria-label': 'Title 2 action',
            Icon: IconDotsVertical,
          }}
        />
        <ListItem
          avatar={{
            Icon: IconUser,
            color: 'primary',
          }}
          text={{
            copetin: 'Copetin 3',
            title: 'Title 3',
            description: 'Description 3',
          }}
          action={{
            onClick: () => alert('You have clicked "Title 3" action'),
            'aria-label': 'Title 3 action',
            Icon: IconDotsVertical,
          }}
        />
      </>
    ),
  },
  decorators: [
    Story => (
      <Card variant="outlined">
        <Story />
      </Card>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {},
};

export const Loading: Story = {
  args: {
    children: (
      <>
        <ListItem
          divider
          loading
        />
        <ListItem
          divider
          loading
        />
        <ListItem loading />
      </>
    ),
  },
};

export const Button: Story = {
  args: {
    children: (
      <>
        <ListItem
          divider
          onClick={() => alert('You have clicked "Title 1"')}
          text={{ title: 'Title 1' }}
        />
        <ListItem
          divider
          onClick={() => alert('You have clicked "Title 2"')}
          text={{ title: 'Title 2' }}
        />
        <ListItem
          onClick={() => alert('You have clicked "Title 3"')}
          text={{ title: 'Title 3' }}
        />
      </>
    ),
  },
};

export const WithAction: Story = {
  args: {
    children: (
      <>
        <ListItem
          divider
          text={{ title: 'Title 1' }}
          action={{
            onClick: () => alert('You have clicked "Title 1" action'),
            'aria-label': 'Title 1 action',
            Icon: IconDotsVertical,
          }}
        />
        <ListItem
          divider
          text={{ title: 'Title 2' }}
          action={{
            onClick: () => alert('You have clicked "Title 2" action'),
            'aria-label': 'Title 2 action',
            Icon: IconDotsVertical,
          }}
        />
        <ListItem
          text={{ title: 'Title 3' }}
          action={{
            onClick: () => alert('You have clicked "Title 3" action'),
            'aria-label': 'Title 3 action',
            Icon: IconDotsVertical,
          }}
        />
      </>
    ),
  },
};

export const WithAvatar: Story = {
  args: {
    children: (
      <>
        <ListItem
          divider
          avatar={{
            src: ImgAvatar1,
          }}
          text={{
            title: 'Title 1',
            description: 'description 1',
          }}
        />
        <ListItem
          divider
          avatar={{
            Icon: IconUser,
          }}
          text={{
            title: 'Title 2',
            description: 'description 2',
          }}
        />
        <ListItem
          avatar={{
            text: 'AP',
            color: 'primary',
          }}
          text={{
            title: 'Title 2',
            description: 'description 2',
          }}
        />
      </>
    ),
  },
};

export const WithSideContent: Story = {
  args: {
    children: (
      <>
        <ListItem
          divider
          text={{ title: 'Title 1' }}
          sideContent={
            <Pills
              size="small"
              label="Information"
              type="info"
            />
          }
        />
        <ListItem
          divider
          text={{ title: 'Title 2' }}
          sideContent={
            <Pills
              size="small"
              label="Information"
              type="info"
            />
          }
        />
        <ListItem
          text={{ title: 'Title 3' }}
          sideContent={
            <Pills
              size="small"
              label="Information"
              type="info"
            />
          }
        />
      </>
    ),
  },
};
