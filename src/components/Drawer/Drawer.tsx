import { ReactNode } from 'react';
import { colorPalette } from '../../theme/hugo/colors';
import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
  Stack,
  IconButton,
  Typography,
} from '@mui/material';
import { IconX } from '@tabler/icons-react';
import { LoadingButton, LoadingButtonProps } from '@mui/lab';

export type DrawerProps = MuiDrawerProps & {
  title?: string;
  size?: 'medium' | 'large';
  onClose: () => void;
  disableEscapeKeyDown?: boolean;
  primaryButtonProps?: LoadingButtonProps;
  secondaryButtonProps?: LoadingButtonProps;
  footer?: ReactNode;
  primaryContent?: ReactNode;
  secondaryContent?: ReactNode;
};

const sizeStyleMap = {
  medium: {
    width: '40vw',
    maxWidth: '600px',
  },
  large: {
    width: '80vw',
    maxWidth: '1400px',
  },
};

const Drawer = (props: DrawerProps) => {
  const {
    title = '',
    size = 'medium',
    open = false,
    children,
    onClose,
    primaryButtonProps,
    secondaryButtonProps,
    footer,
    primaryContent,
    secondaryContent,
    disableEscapeKeyDown,
    sx,
    PaperProps,
    ...drawerProps
  } = props;

  const withDoubleLayout = !!primaryContent || !!secondaryContent;

  const realSize = withDoubleLayout ? 'large' : size;

  const stylesForSize = sizeStyleMap[realSize];

  const hasExtraFooter = !!footer;

  const hasActions = !!primaryButtonProps || !!secondaryButtonProps;

  return (
    <MuiDrawer
      anchor="right"
      open={open}
      onClose={disableEscapeKeyDown ? undefined : onClose}
      PaperProps={{
        sx: {
          borderRadius: '16px 0 0 16px',
          ...stylesForSize,
          ...PaperProps?.sx,
        },
        ...PaperProps,
      }}
      sx={{
        zIndex: 1300,
        ...sx,
      }}
      {...drawerProps}
    >
      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 2,
          px: 3,
          borderBottom: `1px solid ${colorPalette.border?.neutralDivider}`,
        }}
      >
        <Typography
          variant="globalS"
          sx={{ fontWeight: 'semiBold' }}
        >
          {title}
        </Typography>
        <IconButton onClick={onClose}>
          <IconX />
        </IconButton>
      </Stack>
      {withDoubleLayout && (
        <Stack sx={{ flexDirection: 'row', flexGrow: 1, overflow: 'hidden' }}>
          <Stack
            sx={{
              p: 3,
              overflowY: 'scroll',
              width: '50%',
            }}
          >
            {primaryContent}
          </Stack>
          <Stack
            sx={{
              p: 3,
              overflowY: 'scroll',
              width: '50%',
              bgcolor: colorPalette.hugoBackground.neutralBgSecondary,
            }}
          >
            {secondaryContent}
          </Stack>
        </Stack>
      )}
      {!withDoubleLayout && (
        <Stack
          sx={{
            p: 3,
            overflowY: 'scroll',
            flexGrow: 1,
          }}
        >
          {children}
        </Stack>
      )}
      {hasExtraFooter && (
        <Stack
          sx={{
            px: 3,
            py: 2,
            borderTop: `1px solid ${colorPalette.border?.neutralDivider}`,
          }}
        >
          {footer}
        </Stack>
      )}
      {hasActions && (
        <Stack
          sx={{
            px: 3,
            py: 2,
            gap: 1,
            flexDirection: 'row',
            justifyContent: realSize === 'large' ? 'flex-end' : 'space-between',
            borderTop: `1px solid ${colorPalette.border?.neutralDivider}`,
          }}
        >
          {!!secondaryButtonProps && (
            <LoadingButton
              variant="text"
              size="large"
              {...secondaryButtonProps}
            />
          )}
          {!!primaryButtonProps && (
            <LoadingButton
              variant="contained"
              size="large"
              {...primaryButtonProps}
            />
          )}
        </Stack>
      )}
    </MuiDrawer>
  );
};

export default Drawer;
