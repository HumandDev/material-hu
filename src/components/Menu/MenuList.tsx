import { FC, useRef, useState } from 'react';
import { IconButton } from '@mui/material';
import { IconDotsVertical } from '@tabler/icons-react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import ListItem from '../List/ListItem';

type Props = {
  Icon?: typeof IconDotsVertical;
  options: {
    Icon?: any;
    title: string;
    description?: string;
    onClick: () => void;
  }[];
};

export const MenuList: FC<Props> = ({ Icon = IconDotsVertical, options }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const handleMenuOpen = () => setOpenMenu(true);
  const handleMenuClose = () => setOpenMenu(false);

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleMenuOpen}
      >
        <Icon />
      </IconButton>
      <Menu
        anchorEl={anchorRef.current}
        onClose={handleMenuClose}
        open={openMenu}
        sx={{ '.MuiListItem-root': { p: 0 } }}
      >
        {options.map(option => (
          <MenuItem
            key={option.title}
            onClick={() => {
              option.onClick();
              handleMenuClose();
            }}
          >
            <ListItem
              text={{
                title: option.title,
                description: option?.description,
              }}
              sx={{ '.MuiListItem-root': { p: 0 } }}
              avatar={{ Icon: option.Icon }}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
