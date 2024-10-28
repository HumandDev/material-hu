import { FC, MouseEvent, useState } from 'react';
import { IconButton, Stack } from '@mui/material';
import { ListItem } from '../List/ListItem';
import { Menu } from './Menu';
import { TablerIcon } from '@tabler/icons-react';
import { IconDotsVertical } from '@tabler/icons-react';

export type Option = {
  id: string;
  onClick: (event: MouseEvent) => void;
  title: string;
  description?: string;
  Icon?: TablerIcon;
};

export type IconsMenuProps = {
  options: Option[];
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onClose?: (event: MouseEvent) => void;
  disabled?: boolean;
};

export const IconsMenu: FC<IconsMenuProps> = ({
  options,
  onClick = () => null,
  onClose = () => null,
  disabled = false,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    onClick(event);
  };

  const handleClose = (event: MouseEvent) => {
    event.stopPropagation();
    setAnchorEl(null);
    onClose(event);
  };

  const handleOptionClick =
    (callback: Option['onClick']) => (event: MouseEvent) => {
      event.stopPropagation();
      handleClose(event);
      callback(event);
    };

  return (
    <>
      <IconButton
        id="button-menu"
        aria-label="menu"
        aria-controls="icon-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={disabled ? undefined : handleClick}
        disabled={disabled}
      >
        <IconDotsVertical />
      </IconButton>
      <Menu
        id="icon-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="button-menu"
      >
        {options.map(option => (
          <Stack
            id={`menu-option-${option.id}`}
            key={option.id}
            component="li"
            sx={{
              height: '74px',
            }}
          >
            <ListItem
              onClick={handleOptionClick(option.onClick)}
              text={{
                title: option.title,
                description: option.description,
              }}
              avatar={option.Icon ? { Icon: option.Icon } : undefined}
            />
          </Stack>
        ))}
      </Menu>
    </>
  );
};

export default IconsMenu;
