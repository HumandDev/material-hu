import { useState } from 'react';
import {
  Alert as AlertMui,
  AlertProps as AlertMuiProps,
  AlertTitle,
  IconButton,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import { IconX as CloseIcon } from '@tabler/icons-react';

type AlertProps = AlertMuiProps & {
  description: string;
  hasClose?: boolean;
  actionText?: string;
  onAction?: () => void;
};

const Alert = (props: AlertProps) => {
  const {
    title,
    description,
    hasClose = false,
    onClose,
    actionText,
    onAction,
    ...rest
  } = props;
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <AlertMui
      action={
        hasClose && (
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={e => {
              if (onClose) onClose(e);
              setOpen(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        )
      }
      {...rest}
    >
      <AlertTitle>{title}</AlertTitle>
      <Stack sx={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Typography>{description}</Typography>
        {actionText && (
          <Button
            variant="text"
            onClick={onAction}
          >
            {actionText}
          </Button>
        )}
      </Stack>
    </AlertMui>
  );
};

export default Alert;
