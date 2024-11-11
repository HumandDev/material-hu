import React from 'react';
import {
  SnackbarContent,
  Button,
  IconButton,
  Typography,
  Stack,
  Badge,
  LinearProgress,
  Box,
} from '@mui/material';
import {
  IconX,
  IconCheck,
  IconAlertTriangle,
  IconInfoCircle,
} from '@tabler/icons-react';
import { useSnackbar as useNotistackSnackar } from 'notistack';
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

export const useSnackbar = () => {
  const { enqueueSnackbar: enqueueNotistackSnackbar, closeSnackbar } =
    useNotistackSnackar();
  const { textColors, border, graphics } = colorPalette;
  const backgroundColor = textColors.neutralText;

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
          color: border.warningBorder,
          iconColor: graphics.warningText,
        };
      case 'info':
        return {
          Icon: IconInfoCircle,
          color: border.infoBorder,
          iconColor: graphics.infoText,
        };
      case 'error':
        return {
          Icon: IconX,
          color: border.errorBorder,
          iconColor: graphics.errorText,
        };
      default:
      case 'success':
        return {
          Icon: IconCheck,
          color: border.successBorder,
          iconColor: graphics.successText,
        };
    }
  };

  const enqueueSnackbar = (props: SnackbarProps) => {
    const {
      title,
      description,
      hasClose = true,
      cancelAction,
      variant,
    } = props;
    const { Icon, color, iconColor } = getProps(variant);
    const progressAnimation = keyframes`from { width: 0%; } to { width: 100%; }`;

    enqueueNotistackSnackbar('', {
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
                  maxWidth: cancelAction ? 400 : '98%',
                }}
              >
                <Badge
                  badgeContent={
                    <Box
                      sx={{
                        width: 16,
                        height: 16,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Icon />
                    </Box>
                  }
                  overlap="circular"
                  sx={{
                    mr: 2,
                    mb: title && description ? 2 : 0,
                    '.MuiBadge-badge': {
                      backgroundColor: iconColor,
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
                    maxWidth: 130,
                  }}
                >
                  <Typography
                    variant="globalS"
                    color="white"
                    fontWeight="fontWeightRegular"
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
                    p: 0,
                    top: 12,
                    right: 12,
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

  return { enqueueSnackbar };
};

export default useSnackbar;
