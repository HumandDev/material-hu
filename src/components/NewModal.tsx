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
  textBody?: string
  primaryButtonProps?: ButtonProps
  secondaryButtonProps?: ButtonProps
  onClose?: ()=>void
  TitleIcon?: SvgIconComponent
};

const NewModal = ({
  title,
  body,
  textBody,
  TitleIcon,
  primaryButtonProps,
  secondaryButtonProps,
  onClose
}: Props) => (
  <Box sx={{ px: 4, pb: 4, pt: 3 }}>
    <Stack
      direction="row"
      sx={{ alignItems: 'start' }}
      gap={1}
    >
      {TitleIcon && (
      <TitleIcon
        sx={{ mt: '2px' }}
        color="humand"
      />
      )}
      <DialogTitle
        variant="h5"
        sx={{ p: 0, mr: 'auto', flexShrink: 1, alignSelf: 'center' }}
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
    <DialogContent sx={{ px: 0 }}>
      {textBody && (
      <DialogContentText>
        {textBody}
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
