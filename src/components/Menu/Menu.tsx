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
  header?: ReactNode;
  width?: number;
  height?: number;
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
  header,
  width,
  height,
}: MenuProps) => {
  const theme = useTheme();

  return (
    <MuiMenu
      id={id}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      sx={{
        ...sx,
        width: width ? width : MAX_WIDTH,
        height: 'auto',
      }}
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
          display: 'flex',
          flexDirection: 'column',
          maxWidth: width ? width : MAX_WIDTH,
          maxHeight: height ? height : MAX_HEIGHT,
        },
      }}
      slotProps={{
        paper: {
          sx: {
            boxShadow: theme.shadows[2],
            borderRadius: theme.spacing(2),
            width: width ? width : 'inherit',
          },
        },
      }}
    >
      {header && (
        <Stack
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            backgroundColor: 'background.paper',
          }}
        >
          <Stack
            sx={{
              gap: 1,
              p: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {header}
          </Stack>
          <Divider />
        </Stack>
      )}
      <Stack
        component="ul"
        sx={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          py: 1,
          px: 0,
          m: 0,
        }}
      >
        {children}
      </Stack>
      {footer && (
        <Stack
          sx={{
            position: 'sticky',
            bottom: 0,
            zIndex: 1,
            backgroundColor: 'background.paper',
          }}
        >
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
