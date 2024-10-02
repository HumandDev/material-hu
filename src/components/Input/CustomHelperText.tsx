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
  const { error, focused } = useFormControl() || {};
  const theme = useTheme();
  const showCounter = hasCounter && (focused || error);
  const getHelperColor = () => {
    if (error) {
      return theme.palette.textColors?.errorText;
    }
    if (success) {
      return theme.palette.textColors?.successText;
    }
    return theme.palette.textColors?.neutralTextLighter;
  };
  return (
    <FormHelperText
      sx={{
        mx: 0,
        mt: 0.5,
        color: getHelperColor(),
      }}
    >
      <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 0.5 }}>
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
