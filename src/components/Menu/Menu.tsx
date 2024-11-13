import { ReactNode } from 'react';
import {
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
  Divider,
  Stack,
  useTheme,
  PopoverOrigin,
} from '@mui/material';
import { MAX_HEIGHT, MAX_WIDTH, positionMap } from './constants';

export type MenuProps = Pick<
  MuiMenuProps,
  'id' | 'anchorEl' | 'open' | 'onClose' | 'children' | 'sx'
> & {
  'aria-labelledby'?: string;
  footer?: ReactNode;
  header?: ReactNode;
  position?: 'left' | 'right' | 'center';
  fixedDimensions?: boolean;
};

export const Menu = ({
  id,
  anchorEl,
  open,
  onClose,
  children,
  sx,
  position = 'center',
  fixedDimensions = true,
  'aria-labelledby': labelledby,
  footer,
  header,
}: MenuProps) => {
  const theme = useTheme();

  const positionValues = positionMap[position];
  const anchorOrigin: PopoverOrigin = positionValues.anchorOrigin;
  const transformOrigin: PopoverOrigin = positionValues.transformOrigin;

  const fixedDimensionsSx = {
    maxHeight: MAX_HEIGHT,
    maxWidth: MAX_WIDTH,
    overflow: 'hidden',
  };

  const fixedDimensionsUlSx = {
    overflowY: 'auto',
    overflowX: 'hidden',
    py: 1,
  };

  const fixeDimensionsSlotSx = {
    maxHeight: MAX_HEIGHT,
    maxWidth: MAX_WIDTH,
  };

  return (
    <MuiMenu
      id={id}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      sx={{ mt: 1, ...sx }}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      MenuListProps={{
        component: 'div',
        'aria-labelledby': labelledby,
        sx: {
          p: 0,
          display: 'flex',
          flexDirection: 'column',
          ...(fixedDimensions && fixedDimensionsSx),
        },
      }}
      slotProps={{
        paper: {
          sx: {
            boxShadow: theme.shadows[2],
            borderRadius: theme.spacing(2),
            ...(fixedDimensions && fixeDimensionsSlotSx),
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
          {header}
          <Divider sx={{ borderBottomWidth: 0.5, color: '#f0f0f0' }} />
        </Stack>
      )}
      <Stack
        component="ul"
        sx={{
          flex: 1,
          px: 0,
          m: 0,
          ...(fixedDimensions && fixedDimensionsUlSx),
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
          <Divider
            sx={{
              borderBottomWidth: 0.5,
              color: th => th.palette.border?.neutralDivider,
            }}
          />
          <Stack
            sx={{
              gap: 1,
              p: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: 68,
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
