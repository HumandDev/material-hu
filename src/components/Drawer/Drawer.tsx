import { ReactNode } from 'react';
import { colorPalette } from '../../theme/hugo/colors';
import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
  Stack,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import { IconX } from '@tabler/icons-react';

type DrawerProps = MuiDrawerProps & {
  title?: string;
  size?: 'medium' | 'large';
  onClose: () => void;
  primaryActionText?: string;
  secondaryActionText?: string;
  primaryAction?: () => void;
  secondaryAction?: () => void;
  extraFooterContent?: ReactNode;
  withDoubleLayout?: boolean;
  primaryLayoutContent?: ReactNode;
  secondaryLayoutContent?: ReactNode;
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
    primaryActionText,
    secondaryActionText,
    primaryAction = () => {},
    secondaryAction = () => {},
    extraFooterContent,
    withDoubleLayout = false,
    primaryLayoutContent,
    secondaryLayoutContent,
  } = props;

  const realSize = withDoubleLayout ? 'large' : size;

  const stylesForSize = sizeStyleMap[realSize];

  const hasExtraFooter = !!extraFooterContent;

  const hasActions = primaryActionText || secondaryActionText;

  return (
    <MuiDrawer
      anchor="right"
      open={open}
      PaperProps={{
        sx: {
          ...stylesForSize,
        },
      }}
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
            {primaryLayoutContent}
          </Stack>
          <Stack
            sx={{
              p: 3,
              overflowY: 'scroll',
              width: '50%',
              bgcolor: colorPalette.hugoBackground.neutralBgSecondary,
            }}
          >
            {secondaryLayoutContent}
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
          {extraFooterContent}
        </Stack>
      )}
      {hasActions && (
        <Stack
          sx={{
            px: 3,
            py: 2,
            gap: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            borderTop: `1px solid ${colorPalette.border?.neutralDivider}`,
          }}
        >
          {secondaryActionText && (
            <Button
              onClick={secondaryAction}
              variant="text"
              size={size}
            >
              {secondaryActionText}
            </Button>
          )}
          {primaryActionText && (
            <Button
              onClick={primaryAction}
              variant="outlined"
              size={size}
            >
              {primaryActionText}
            </Button>
          )}
        </Stack>
      )}
    </MuiDrawer>
  );
};

export default Drawer;
