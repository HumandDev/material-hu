import {
  Box,
  Button,
  Stack,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions
} from '@mui/material';
import { type LoadingButtonProps as ButtonProps } from '@mui/lab/LoadingButton';
import { CloseOutlined as CloseOutlinedIcon } from '@mui/icons-material';
import { ReactNode } from 'react';

type Props = {
  title: ReactNode
  body?: ReactNode
  primaryButtonProps?: ButtonProps
  secondaryButtonProps?: ButtonProps
  Icon?: JSX.Element
  onClose?: ()=>void
  titleIcon?: JSX.Element
};

const NewModal = ({
  title,
  body,
  titleIcon,
  primaryButtonProps,
  secondaryButtonProps,
  onClose
}: Props) => (
  <Box sx={{ px: 3, py: 2 }}>
    <Stack
      direction="row"
      sx={{ alignItems: 'center' }}
      gap={1}
    >
      {titleIcon}
      <DialogTitle
        variant="h5"
        sx={{ p: 0, mr: 'auto' }}
      >
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{ p: 0 }}
      >
        <CloseOutlinedIcon />
      </IconButton>
    </Stack>
    <DialogContent>
      {body}
    </DialogContent>
    <DialogActions sx={{ p: 0 }}>
      {secondaryButtonProps && (
      <Button
        color="humand"
        variant="text"
        {...secondaryButtonProps}
        sx={{ mr: 2, ...secondaryButtonProps.sx }}
      />
      )}
      {primaryButtonProps && (
        <Button
          color="humand"
          variant="contained"
          {...primaryButtonProps}
        />
      )}
    </DialogActions>
    </Box>
);

export default NewModal;
