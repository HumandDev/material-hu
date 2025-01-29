import { FC, ReactNode, useRef, useState } from 'react';
import { IconButton, Stack } from '@mui/material';
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
    disabled?: boolean;
  }[];
  customButton?: ReactNode;
};

export const MenuList: FC<Props> = ({
  Icon = IconDotsVertical,
  options,
  customButton,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = useRef(null);
  const handleMenuOpen = () => setOpenMenu(true);
  const handleMenuClose = () => setOpenMenu(false);

  return (
    <>
      {!!customButton && (
        <Stack
          ref={anchorRef}
          onClick={handleMenuOpen}
        >
          {customButton}
        </Stack>
      )}
      {!customButton && (
        <IconButton
          ref={anchorRef}
          onClick={handleMenuOpen}
        >
          <Icon />
        </IconButton>
      )}
      <Menu
        anchorEl={anchorRef.current}
        onClose={handleMenuClose}
        open={openMenu}
        sx={{ ul: { py: 0 }, '*': { whiteSpace: 'normal' } }}
      >
        {options.map(option => (
          <MenuItem
            key={option.title}
            onClick={() => {
              option.onClick();
              handleMenuClose();
            }}
            disabled={option.disabled}
          >
            <ListItem
              component="div"
              text={{
                title: option.title,
                description: option?.description,
              }}
              sx={{ '.MuiListItem-root': { p: 0 }, justifyContent: 'center' }}
              avatar={option.Icon && { Icon: option.Icon }}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuList;
