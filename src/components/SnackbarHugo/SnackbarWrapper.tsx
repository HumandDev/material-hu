import React, { useEffect } from 'react';
import {
  Snackbar as SnackbarMUI,
  SnackbarContent,
  IconButton,
  useTheme,
  Typography,
  Stack,
  Badge,
  Button,
  LinearProgress,
} from '@mui/material';
import {
  IconX,
  IconCheck,
  IconAlertTriangle,
  IconInfoCircle,
} from '@tabler/icons-react';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export type SnackbarProps = {
  variant: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  description?: string;
  hasClose?: boolean;
  cancelAction?: {
    text: string;
    onClick: () => void;
  };
};

const SnackbarWrapper: React.FC<SnackbarProps> = ({
  title,
  description,
  hasClose = true,
  cancelAction = null,
  variant,
}) => {
  const [open, setOpen] = useState(true);
  const { palette } = useTheme();
  const backgroundColor = palette.textColors?.neutralText;

  const handleClose = () => {
    setOpen(false);
  };

  const getProps = (): {
    Icon: React.ElementType;
    color: string;
    iconColor: string;
  } => {
    switch (variant) {
      case 'warning':
        return {
          Icon: IconAlertTriangle,
          color: palette.base?.yellow[200]!,
          iconColor: palette.base?.yellow[600]!,
        };
      case 'info':
        return {
          Icon: IconInfoCircle,
          color: palette.base?.lightBlue[200]!,
          iconColor: palette.base?.lightBlue[600]!,
        };
      case 'error':
        return {
          Icon: IconX,
          color: palette.base?.red[200]!,
          iconColor: palette.base?.red[600]!,
        };
      default:
      case 'success':
        return {
          Icon: IconCheck,
          color: palette.base?.green[200]!,
          iconColor: palette.base?.green[600]!,
        };
    }
  };

  const { Icon, color, iconColor } = getProps();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(100);
  }, []);

  return (
    <SnackbarMUI
      open={open}
      autoHideDuration={10000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <div
        style={{
          borderRadius: '8px',
          overflow: 'hidden',
          width: 600,
          position: 'relative',
        }}
      >
        <SnackbarContent
          style={{
            backgroundColor: backgroundColor,
            display: 'flex',
            borderRadius: 0,
          }}
          message={
            <Stack
              sx={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1,
                ml: 1,
                maxWidth: 360,
              }}
            >
              <Badge
                badgeContent={<Icon />}
                overlap="circular"
                sx={{
                  mr: 2,
                  mb: description ? 2 : 0,
                  '.MuiBadge-badge': {
                    backgroundColor: iconColor,
                    minWidth: 24,
                    minHeight: 24,
                    borderRadius: '50%',
                    padding: '4px',
                  },
                }}
              />
              <Stack>
                {title && (
                  <Typography
                    variant="globalS"
                    fontWeight="semiBold"
                    color="white"
                  >
                    {title}
                  </Typography>
                )}
                {description && (
                  <Typography
                    variant="globalXS"
                    fontWeight="regular"
                    color="white"
                  >
                    {description}
                  </Typography>
                )}
              </Stack>
            </Stack>
          }
          action={[
            cancelAction && (
              <Button
                onClick={() => {
                  cancelAction.onClick();
                  handleClose();
                }}
                sx={{
                  p: 0.5,
                  mr: 4,
                  color: 'white',
                  minWidth: 'auto',
                  maxWidth: 150,
                }}
              >
                <Typography
                  variant="globalS"
                  color="white"
                  fontWeight="regular"
                  sx={{ textDecoration: 'underline', textTransform: 'none' }}
                >
                  {cancelAction.text}
                </Typography>
              </Button>
            ),
            hasClose && (
              <IconButton
                color="inherit"
                onClick={handleClose}
                sx={{
                  top: 4,
                  right: 4,
                  fontSize: '12px',
                  position: 'absolute',
                }}
              >
                <CloseIcon sx={{ fontSize: '16px' }} />
              </IconButton>
            ),
          ]}
        />
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: '6px',
            backgroundColor: color,
            '& .MuiLinearProgress-bar': {
              backgroundColor: iconColor,
              transitionDuration: '8s',
            },
          }}
        />
      </div>
    </SnackbarMUI>
  );
};

export default SnackbarWrapper;
