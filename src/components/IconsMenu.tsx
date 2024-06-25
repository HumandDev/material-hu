import { FC, MouseEvent, useState } from 'react';
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SxProps,
} from '@mui/material';
import { ChevronRight, MoreVert as MoreVertIcon } from '@mui/icons-material';

export type Option = {
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
  divider?: boolean;
  textProps?: SxProps;
  color?: string;
  disabled?: boolean;
};

export type IconsMenuProps = {
  options: Option[];
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onClose?: (event: MouseEvent) => void;
  disabled?: boolean;
  arrow?: boolean;
};

export const IconsMenu: FC<IconsMenuProps> = props => {
  const {
    options,
    onClick = () => null,
    onClose = () => null,
    disabled = false,
    arrow = false,
  } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const disabledStyles = {
    cursor: 'not-allowed',
    opacity: '38%',
  };

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
        onClick={disabled ? undefined : handleClick}
        disableRipple={disabled}
      >
        <MoreVertIcon sx={disabled ? disabledStyles : undefined} />
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
        {options.map(option => (
          <div key={option.label}>
            <MenuItem
              onClick={handleOptionClick(option.onClick)}
              disabled={option.disabled}
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
                pr: 0,
              }}
            >
              {option.icon && (
                <ListItemIcon
                  sx={{
                    '&>*': {
                      color: option.disabled ? 'text.disabled' : option.color,
                      minWidth: 0,
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: option.disabled ? 'grey.300' : 'grey.200',
                      color: 'grey.700',
                      width: 24,
                      height: 24,
                    }}
                  >
                    {option.icon}
                  </Avatar>
                </ListItemIcon>
              )}
              <ListItemText
                sx={{
                  ...option.textProps,
                  color: option.disabled ? 'text.disabled' : option.color,
                }}
              >
                {option.label}
              </ListItemText>
              {arrow && (
                <ListItemIcon
                  sx={{
                    color: option.disabled ? 'text.disabled' : 'inherit',
                    minWidth: 0,
                    mr: 0,
                  }}
                >
                  <ChevronRight />
                </ListItemIcon>
              )}
            </MenuItem>
            {option.divider && <Divider sx={{ px: 1 }} />}
          </div>
        ))}
      </Menu>
    </>
  );
};

export default IconsMenu;
