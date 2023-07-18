import * as React from 'react';
import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

type Props = {
  options: {
    onClick: (e?:any)=>void
    label: string
    icon?: any
    iconIsImage?: boolean
    show?: boolean
    divider?: boolean
  }[]
};

const IconsMenu = ({ options }:Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation();
    setAnchorEl(null);
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
        onMouseUp={handleClose}
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
        {options.map((option) => {
          if (option.show === false) return null;
          return (
            <div key={option.label}>
              <MenuItem onClick={option.onClick}>
                {option.icon && (
                  <ListItemIcon>
                    {!option.iconIsImage && <option.icon size="small" />}
                    {option.iconIsImage && option.icon}
                  </ListItemIcon>
                )}
                <ListItemText>{option.label}</ListItemText>
              </MenuItem>
              {option.divider && (<Divider />)}
            </div>
          );
        })}
      </Menu>
    </>
  );
};

export default IconsMenu;