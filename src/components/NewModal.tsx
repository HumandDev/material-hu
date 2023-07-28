import {
  Box,
  DialogContentText,
  Paper,
  Typography,
  Button
} from '@mui/material';
import { type LoadingButtonProps as ButtonProps } from '@mui/lab/LoadingButton';
import { ReactNode } from 'react';

type Props = {
  title: ReactNode
  body?: ReactNode
  primaryButtonProps?: ButtonProps
  secondaryButtonProps?: ButtonProps
  Icon?: JSX.Element
};

const NewModal = ({
  title,
  body,
  primaryButtonProps,
  secondaryButtonProps
}: Props) => (
  <Paper elevation={12}>
    <Box
      sx={{
        display: 'flex',
        pb: 2,
        pt: 3,
        px: 3,
      }}
    >
      <Box>
        <Typography
          color="textPrimary"
          variant="h6"
        >
          {title}
        </Typography>
        <DialogContentText
          sx={{ mt: 1 }}
        >
          {body}
        </DialogContentText>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        px: 3,
        py: 1.5
      }}
    >
      {secondaryButtonProps?.onClick && (
      <Button
        variant="text"
        {...secondaryButtonProps}
        sx={{ mr: 2 }}
      />
      )}
      {primaryButtonProps?.onClick && (
      <Button
        {...primaryButtonProps}
        variant="text"
      />
      )}
    </Box>
  </Paper>
);

export default NewModal;
