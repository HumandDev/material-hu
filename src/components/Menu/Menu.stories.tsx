import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuProps } from './Menu';
import { MenuItem } from './MenuItem';
import { Stack, Button, Typography } from '@mui/material';

const defaultOptions = [
  'Option 1',
  'Option 2 - very long text to test overflow',
  'Option 3',
];

const manyOptions = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
  'Option 6',
  'Option 7',
  'Option 8',
];

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  tags: ['autodocs'],
  args: {
    open: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderStory = (options: string[]) =>
  function Component(args: MenuProps) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);

    const open = Boolean(anchorEl);

    const handleOpen = (event: any) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

    const handleMenuItemClick = (optionIndex: number) => {
      setSelectedIndex(optionIndex);
      setAnchorEl(null);
    };

    return (
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        <Menu
          {...args}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          {options.map((option, optionIndex) => (
            <MenuItem
              key={option}
              disabled={optionIndex === 0}
              selected={optionIndex === selectedIndex}
              onClick={() => handleMenuItemClick(optionIndex)}
            >
              <Typography
                variant="inherit"
                noWrap
              >
                {option}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
        <Button
          onClick={handleOpen}
          variant="outlined"
          size="medium"
        >
          Open menu
        </Button>
      </Stack>
    );
  };

const Footer = () => (
  <>
    <Button
      variant="text"
      size="medium"
    >
      Delete
    </Button>
    <Button
      variant="contained"
      size="medium"
    >
      Apply
    </Button>
  </>
);

export const Default: Story = {
  render: renderStory(defaultOptions),
  args: {},
};

export const WithFooter: Story = {
  render: renderStory(defaultOptions),
  args: {
    footer: <Footer />,
  },
};

export const ManyOptions: Story = {
  render: renderStory(manyOptions),
  args: {},
};

export const WithFooterAndManyOptions: Story = {
  render: renderStory(manyOptions),
  args: {
    footer: <Footer />,
  },
};

export const LeftAlign: Story = {
  render: renderStory(manyOptions),
  args: {
    footer: <Footer />,
    position: 'left',
  },
};

export const RightAlign: Story = {
  render: renderStory(manyOptions),
  args: {
    footer: <Footer />,
    position: 'right',
  },
};
