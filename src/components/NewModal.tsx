import {
  Box,
  Button,
  Stack,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  DialogContentText
} from '@mui/material';
import { type LoadingButtonProps as ButtonProps } from '@mui/lab/LoadingButton';
import { CloseOutlined as CloseOutlinedIcon, SvgIconComponent } from '@mui/icons-material';
import { ReactNode } from 'react';

type Props = {
  title: ReactNode
  body?: ReactNode
  bodyText?: string
  primaryButtonProps?: ButtonProps
  secondaryButtonProps?: ButtonProps
  onClose?: ()=>void
  TitleIcon?: SvgIconComponent
};

const NewModal = ({
  title,
  body,
  bodyText,
  TitleIcon,
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
      {TitleIcon && <TitleIcon color='humand' />}
      <DialogTitle
        variant="h5"
        sx={{ p: 0, mr: 'auto', flexShrink: 1 }}
      >
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{ p: 0, alignSelf: 'start' }}
      >
        <CloseOutlinedIcon />
      </IconButton>
    </Stack>
    <DialogContent sx={{ px: 0 }}>
      {bodyText && (
      <DialogContentText>
        {bodyText}
      </DialogContentText>
      )}
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
