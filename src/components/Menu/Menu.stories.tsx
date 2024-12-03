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
    header: null,
    footer: null,
    fixedDimensions: false,
  },
  argTypes: {
    fixedDimensions: {
      description: 'Fixed dimensions or taken from children',
      control: 'boolean',
    },
    header: {
      description: 'Menu header content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    footer: {
      description: 'Menu footer content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
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
          variant="secondary"
        >
          Open menu
        </Button>
      </Stack>
    );
  };

const Footer = () => (
  <>
    <Button>Delete</Button>
    <Button variant="primary">Apply</Button>
  </>
);

const Header = () => (
  <>
    <Typography
      variant="globalS"
      fontWeight={'fontWeightSemiBold'}
      sx={{ mx: 'auto', p: 2 }}
    >
      Header
    </Typography>
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

export const WithHeaderAndFooter: Story = {
  render: renderStory(defaultOptions),
  args: {
    header: <Header />,
    footer: <Footer />,
  },
};

export const ManyOptions: Story = {
  render: renderStory(manyOptions),
  args: {},
};

export const ManyOptionsAndFooter: Story = {
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
