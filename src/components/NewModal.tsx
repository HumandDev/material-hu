import {
  Box,
  Stack,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@mui/material';
import {
  default as Button,
  type LoadingButtonProps as ButtonProps,
} from '@mui/lab/LoadingButton';
import {
  CloseOutlined as CloseOutlinedIcon,
  SvgIconComponent,
} from '@mui/icons-material';
import { ReactNode } from 'react';

type Props = {
  title: ReactNode;
  body?: ReactNode;
  textBody?: string;
  primaryButtonProps?: ButtonProps;
  secondaryButtonProps?: ButtonProps;
  onClose?: (e?: any) => void;
  TitleIcon?: SvgIconComponent;
};

const NewModal = ({
  title,
  body,
  textBody,
  TitleIcon,
  primaryButtonProps,
  secondaryButtonProps,
  onClose,
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
      {textBody && <DialogContentText>{textBody}</DialogContentText>}
      {body}
    </DialogContent>
    <DialogActions sx={{ p: 0 }}>
      {secondaryButtonProps && (
        <Button
          color="humand"
          {...secondaryButtonProps}
          sx={{ mr: 2, ...secondaryButtonProps.sx }}
        />
      )}
      {primaryButtonProps && (
        <Button
          color="humand"
          variant="primary"
          {...primaryButtonProps}
        />
      )}
    </DialogActions>
  </Box>
);

export default NewModal;
