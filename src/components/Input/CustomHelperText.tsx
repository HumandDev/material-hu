import { FC } from 'react';
import { InputProps } from './InputClassic';
import {
  FormHelperText,
  Stack,
  Typography,
  useFormControl,
  useTheme,
} from '@mui/material';
import { IconExclamationCircle } from '@tabler/icons-react';

const CustomHelperText: FC<
  Pick<
    InputProps,
    'helperText' | 'hasCounter' | 'maxLength' | 'value' | 'success'
  >
> = ({ helperText, hasCounter, maxLength, value, success }) => {
  const { error, focused, disabled } = useFormControl() || {};
  const theme = useTheme();
  const showCounter = hasCounter && (focused || error);
  const getHelperColor = () => {
    if (error) {
      return theme.palette.textColors?.errorText;
    }
    if (success) {
      return theme.palette.textColors?.successText;
    }
    if (disabled) {
      return theme.palette.textColors?.neutralTextLighter;
    }
    return theme.palette.textColors?.neutralTextLighter;
  };
  return (
    <FormHelperText
      sx={{
        mx: 0,
        mt: 0.5,
        '& *': {
          color: `${getHelperColor()} !important`,
        },
      }}
    >
      <Stack
        component="span"
        sx={{
          alignItems: 'center',
          flexDirection: 'row',
          gap: 0.5,
        }}
      >
        {error && <IconExclamationCircle size={13} />}
        <Typography variant="globalS">{helperText}</Typography>
        {showCounter && (
          <Typography
            variant="globalS"
            sx={{ ml: 'auto' }}
          >
            {value.length}/{maxLength}
          </Typography>
        )}
      </Stack>
    </FormHelperText>
  );
};

export default CustomHelperText;
