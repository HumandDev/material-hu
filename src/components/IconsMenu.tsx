import { FC, ReactNode, MouseEvent, useState } from 'react';
import {
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SxProps,
} from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

export type Option = {
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
  divider?: boolean;
  textProps?: SxProps;
  color?: string;
};

export type IconsMenuProps = {
  options: Option[];
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onClose: (event: MouseEvent) => void;
};

export const IconsMenu: FC<IconsMenuProps> = (props) => {
  const {
    options,
    onClick = () => null,
    onClose = () => null,
  } = props;

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

  const handleOptionClick = (callback: Option['onClick']) => (event: MouseEvent) => {
    event.stopPropagation();
    handleClose(event);
    callback();
  };

  return (
    <>
      <IconButton
        aria-label="menu"
        aria-controls="icon-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        id="button-menu"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="icon-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'button-menu',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {options.map((option) => (
          <div key={option.label}>
            <MenuItem
              onClick={handleOptionClick(option.onClick)}
            >
              {option.icon && (
                <ListItemIcon
                  sx={{
                    '&>*': {
                      color: option.color,
                    },
                  }}
                >
                  {option.icon}
                </ListItemIcon>
              )}
              <ListItemText
                sx={{
                  ...option.textProps,
                  color: option.color,
                }}
              >
                {option.label}
              </ListItemText>
            </MenuItem>
            {option.divider && (<Divider />)}
          </div>
        ))}
      </Menu>
    </>
  );
};

export default IconsMenu;
