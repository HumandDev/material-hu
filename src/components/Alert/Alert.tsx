import { useState } from 'react';
import {
  Alert as AlertMui,
  AlertTitle,
  IconButton,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import {
  IconX,
  IconExclamationCircle,
  IconCheck,
  IconAlertTriangle,
  IconInfoCircle,
  IconBulb,
} from '@tabler/icons-react';
import { colorPalette } from '../../theme/hugo/colors';

type AlertProps = {
  description?: string;
  hasClose?: boolean;
  action?: {
    text: string;
    onClick: () => void;
  };
  severity: 'success' | 'error' | 'warning' | 'info' | 'highlight';
  title: string;
  onClose?: () => void;
};

const mapSeverityIcon = {
  success: {
    icon: IconCheck,
    backgroundColor: colorPalette.background.successBg,
    borderColor: colorPalette.border.successBorder,
    color: colorPalette.textColors.successText,
    graphic: colorPalette.graphics.successText,
  },
  error: {
    icon: IconExclamationCircle,
    backgroundColor: colorPalette.background.errorBg,
    borderColor: colorPalette.border.errorBorder,
    color: colorPalette.textColors.errorText,
    graphic: colorPalette.graphics.errorText,
  },
  warning: {
    icon: IconAlertTriangle,
    backgroundColor: colorPalette.background.warningBg,
    borderColor: colorPalette.border.warningBorder,
    color: colorPalette.textColors.warningText,
    graphic: colorPalette.graphics.warningText,
  },
  info: {
    icon: IconInfoCircle,
    backgroundColor: colorPalette.background.infoBg,
    borderColor: colorPalette.border.infoBorder,
    color: colorPalette.textColors.infoText,
    graphic: colorPalette.graphics.infoText,
  },
  highlight: {
    icon: IconBulb,
    backgroundColor: colorPalette.background.secondaryBg,
    borderColor: colorPalette.border.secondaryBorder,
    color: colorPalette.textColors.secondaryText,
    graphic: colorPalette.graphics.secondaryText,
  },
};

const Alert = (props: AlertProps) => {
  const { title, description, hasClose, onClose, action, severity } = props;
  const [open, setOpen] = useState(true);

  if (!open) return null;

  const data = mapSeverityIcon[severity];

  return (
    <AlertMui
      icon={<data.icon color={data.color} />}
      action={
        <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
          {action && (
            <Button
              variant="text"
              onClick={action.onClick}
              sx={{
                color: data.color,
                minWidth: 'unset',
                '&:hover': {
                  backgroundColor: data.borderColor,
                },
              }}
            >
              {action.text}
            </Button>
          )}
          {hasClose && (
            <IconButton
              sx={{ alignSelf: 'flex-start' }}
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                onClose?.();
                setOpen(false);
              }}
            >
              <IconX />
            </IconButton>
          )}
        </Stack>
      }
      sx={{
        backgroundColor: data.backgroundColor,
        borderColor: data.borderColor,
        borderStyle: 'solid',
        color: data.color,
        p: 2,
        alignItems: description ? 'normal' : 'center',
        ':before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          borderLeft: `solid ${data.graphic} 6px`,
          borderRadius: '6px',
          width: '20px',
        },
        position: 'relative',
      }}
    >
      <AlertTitle sx={{ mb: description ? 0.25 : 0 }}>{title}</AlertTitle>
      {description && <Typography>{description}</Typography>}
    </AlertMui>
  );
};

export default Alert;
