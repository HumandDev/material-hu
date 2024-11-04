import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
import { List, ListItem, Stack, Typography } from '@mui/material';
import { IconBulb } from '@tabler/icons-react';
import { colorPalette } from '../../theme/hugo/colors';
import { useState } from 'react';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Dropdown',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const TemplateContent = () => {
  return (
    <Stack
      sx={{
        width: '400px',
        height: '200px',
        borderRadius: '8px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorPalette.hugoBackground.neutralBgTerciary,
        p: 2,
      }}
    >
      <Stack
        sx={{
          borderRadius: '8px',
          border: '1px dashed #CAD5FE',
          backgroundColor: '#EFF2FF',
          width: 1,
          height: 1,
        }}
      />
    </Stack>
  );
};

const BasicMenu = () => {
  const items = [1, 2, 3, 4, 5];
  return (
    <Stack
      sx={{ backgroundColor: colorPalette.hugoBackground.neutralBgTerciary }}
    >
      <List sx={{ width: '300px' }}>
        {items.map(item => (
          <ListItem
            key={item}
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: colorPalette.hugoBackground.neutralBgSecondary,
              },
            }}
          >
            <IconBulb
              size={16}
              color={colorPalette.textColors.primaryText}
            />
            <Typography
              variant="globalM"
              color={colorPalette.textColors.primaryText}
            >
              {`Item ${item}`}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export const DefaultStory: Story = {
  args: {
    label: 'Open',
    buttonType: 'secondary',
    position: 'left',
    children: <TemplateContent />,
  },
};

export const Left: Story = {
  args: {
    label: 'Open',
    buttonType: 'secondary',
    position: 'left',
    children: <BasicMenu />,
  },
};

export const Right: Story = {
  args: {
    label: 'Open',
    buttonType: 'secondary',
    position: 'right',
    children: <BasicMenu />,
  },
};

export const Center: Story = {
  args: {
    label: 'Open',
    buttonType: 'secondary',
    position: 'center',
    children: <BasicMenu />,
  },
};

export const TertiaryButton: Story = {
  args: {
    label: 'Open',
    buttonType: 'tertiary',
    position: 'left',
    children: <BasicMenu />,
  },
};

export const NoIcon: Story = {
  args: {
    label: 'Open',
    buttonType: 'tertiary',
    hasIcon: false,
    position: 'left',
    children: <BasicMenu />,
  },
};

export const Controlled: Story = {
  render: () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
      <Dropdown
        label="Controlled Dropdown"
        open={dropdownOpen}
        onOpen={() => setDropdownOpen(true)}
        onClose={() => setDropdownOpen(false)}
      >
        <BasicMenu />
      </Dropdown>
    );
  },
};
