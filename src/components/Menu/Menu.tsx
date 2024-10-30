import { ReactNode } from 'react';
import {
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
  Divider,
  Stack,
  useTheme,
} from '@mui/material';
import { MAX_HEIGHT, MAX_WIDTH } from './constants';

export type MenuProps = Pick<
  MuiMenuProps,
  'id' | 'anchorEl' | 'open' | 'onClose' | 'children' | 'sx'
> & {
  'aria-labelledby': string;
  footer?: ReactNode;
};

export const Menu = ({
  id,
  anchorEl,
  open,
  onClose,
  children,
  sx,
  'aria-labelledby': labelledby,
  footer,
}: MenuProps) => {
  const theme = useTheme();

  return (
    <MuiMenu
      id={id}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      sx={sx}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: -8,
        horizontal: 'center',
      }}
      MenuListProps={{
        component: 'div',
        'aria-labelledby': labelledby,
        sx: {
          p: 0,
          maxHeight: MAX_HEIGHT,
          maxWidth: MAX_WIDTH,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
      slotProps={{
        paper: {
          sx: {
            maxHeight: MAX_HEIGHT,
            maxWidth: MAX_WIDTH,
            boxShadow: theme.shadows[2],
            borderRadius: theme.spacing(2),
          },
        },
      }}
    >
      <Stack
        component="ul"
        sx={{
          py: 1,
          px: 0,
          m: 0,
          overflowY: 'auto',
          overflowX: 'hidden',
          flex: 1,
        }}
      >
        {children}
      </Stack>
      {footer && (
        <Stack>
          <Divider />
          <Stack
            sx={{
              gap: 1,
              p: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {footer}
          </Stack>
        </Stack>
      )}
    </MuiMenu>
  );
};

export default Menu;
