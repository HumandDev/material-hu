import { FC } from 'react';
import { InputProps } from './InputClassic';
import { Typography, useFormControl, useTheme } from '@mui/material';

const CustomLabel: FC<Pick<InputProps, 'label' | 'success'>> = ({
  label,
  success,
}) => {
  const { error, disabled } = useFormControl() || {};
  const theme = useTheme();
  if (!label) return null;
  const getLabelColor = () => {
    if (disabled) {
      return theme.palette.textColors?.neutralTextDisabled;
    }
    if (error) {
      return theme.palette.textColors?.errorText;
    }
    if (success) {
      return theme.palette.textColors?.successText;
    }
    if (disabled) {
      return theme.palette.textColors?.neutralTextDisabled;
    }
    return theme.palette.textColors?.neutralText;
  };
  return (
    <Typography
      variant="globalS"
      fontWeight="fontWeightSemiBold"
      sx={{
        color: getLabelColor(),
        mb: 0.5,
      }}
    >
      {label}
    </Typography>
  );
};

export default CustomLabel;
