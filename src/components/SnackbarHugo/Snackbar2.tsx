import React from 'react';
import {
  SnackbarContent,
  Button,
  IconButton,
  Typography,
  Stack,
  Badge,
  LinearProgress,
} from '@mui/material';
import {
  IconX,
  IconCheck,
  IconAlertTriangle,
  IconInfoCircle,
} from '@tabler/icons-react';
import { useSnackbar } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';
import { keyframes } from '@mui/system';
import { colorPalette } from '../../theme/hugo/colors';

export type SnackbarProps = {
  variant: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  description?: string;
  hasClose?: boolean;
  cancelAction?: {
    text: string;
    onClick: () => void;
  };
  onClose?: () => void;
};

const useMySnackbar = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const backgroundColor = colorPalette.textColors.neutralText;

  const getProps = (
    variant: string,
  ): {
    Icon: React.ElementType;
    color: string;
    iconColor: string;
  } => {
    switch (variant) {
      case 'warning':
        return {
          Icon: IconAlertTriangle,
          color: colorPalette.border.warningBorder,
          iconColor: colorPalette.graphics.warningText,
        };
      case 'info':
        return {
          Icon: IconInfoCircle,
          color: colorPalette.border.infoBorder,
          iconColor: colorPalette.graphics.infoText,
        };
      case 'error':
        return {
          Icon: IconX,
          color: colorPalette.border.errorBorder,
          iconColor: colorPalette.graphics.errorText,
        };
      default:
      case 'success':
        return {
          Icon: IconCheck,
          color: colorPalette.border.successBorder,
          iconColor: colorPalette.graphics.successText,
        };
    }
  };

  const myEnqueueSnackbar = (props: SnackbarProps) => {
    const { title, description, hasClose, cancelAction, variant } = props;
    const { Icon, color, iconColor } = getProps(variant);
    const progressAnimation = keyframes`from { width: 0%; } to { width: 100%; }`;

    enqueueSnackbar(null, {
      autoHideDuration: 10000,
      anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
      content: key => (
        <div
          style={{
            borderRadius: '8px',
            overflow: 'hidden',
            width: 600,
            position: 'relative',
          }}
        >
          <SnackbarContent
            key={key}
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
                  badgeContent={<Icon sx={{ fontSize: '10px !important' }} />}
                  overlap="circular"
                  sx={{
                    mr: 2,
                    mb: description ? 2 : 0,
                    '.MuiBadge-badge': {
                      backgroundColor: 'orange',
                      minWidth: 24,
                      minHeight: 24,
                      borderRadius: '50%',
                      padding: 0,
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
                    cancelAction?.onClick();
                    closeSnackbar(key);
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
                  onClick={() => closeSnackbar(key)}
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
            value={100}
            sx={{
              height: '6px',
              backgroundColor: color,
              '& .MuiLinearProgress-bar': {
                backgroundColor: iconColor,
                animation: `${progressAnimation} 8s linear`,
              },
            }}
          />
        </div>
      ),
    });
  };

  return { myEnqueueSnackbar };
};

export { useMySnackbar };
