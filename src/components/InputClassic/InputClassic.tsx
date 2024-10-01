import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  Typography,
  TextFieldProps,
  useFormControl,
  FormHelperText,
  useTheme,
  Stack,
} from '@mui/material';
import {
  IconAlertCircle,
  IconExclamationCircle,
  IconX,
} from '@tabler/icons-react';
import { FC } from 'react';

type Props = Pick<
  TextFieldProps<'outlined'>,
  'placeholder' | 'sx' | 'inputRef' | 'fullWidth'
> & {
  label?: string;
  helperText?: string;
  errorText?: string;
  value: string;
  onChange: (v: string) => void;
  error?: boolean;
  maxLength?: number;
  hasCounter?: boolean;
};

const CustomLabel: FC<Pick<Props, 'label'>> = ({ label }) => {
  const { error } = useFormControl() || {};
  if (!label) return null;
  return (
    <Typography
      variant="globalS"
      fontWeight="fontWeightSemiBold"
      sx={{
        color: theme =>
          error
            ? theme.palette.textColors?.errorText
            : theme.palette.textColors?.neutralText,
        mb: 0.5,
      }}
    >
      {label}
    </Typography>
  );
};

const CustomHelperText: FC<
  Pick<Props, 'helperText' | 'hasCounter' | 'maxLength' | 'value'>
> = ({ helperText, hasCounter, maxLength, value }) => {
  const { error, focused } = useFormControl() || {};
  const showCounter = hasCounter && (focused || error);
  return (
    <FormHelperText
      sx={{
        mx: 0,
        mt: 0.5,
        color: theme => theme.palette.textColors?.neutralTextLighter,
        '&.Mui-error': {
          color: theme => theme.palette.textColors?.errorText,
        },
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

const CustomInput: FC<
  Pick<Props, 'value' | 'placeholder' | 'onChange' | 'inputRef' | 'maxLength'>
> = ({ value, onChange, placeholder, inputRef, maxLength }) => {
  const { focused, error } = useFormControl() || {};
  const hastEndAdornment = error || (focused && value.length > 0);
  const theme = useTheme();

  const getBorderColor = () => {
    if (focused) {
      return theme.palette.base?.blueBrand[400];
    }
    if (error) {
      return theme.palette.graphics?.errorText;
    }
    return theme.palette.border?.neutralBorder;
  };

  return (
    <OutlinedInput
      inputRef={inputRef}
      inputProps={{ maxLength: maxLength }}
      endAdornment={
        hastEndAdornment && (
          <InputAdornment position="end">
            {focused && (
              <IconX
                size={20}
                onMouseDown={e => {
                  onChange?.('');
                  e.preventDefault();
                }}
                style={{ cursor: 'pointer' }}
              />
            )}
            {error && (
              <IconAlertCircle
                size={20}
                color={theme.palette.textColors?.errorText}
              />
            )}
          </InputAdornment>
        )
      }
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      sx={{
        '& fieldset': {
          borderColor: getBorderColor(),
          borderWidth: '1px !important',
        },
        input: {
          '&::placeholder': {
            color: theme.palette.textColors?.neutralTextLighter,
            opacity: 1,
          },
          color: theme.palette.textColors?.neutralText,
        },
      }}
    />
  );
};

const InputClassic = ({
  sx = {},
  label,
  value,
  helperText,
  errorText,
  onChange,
  placeholder,
  inputRef,
  error,
  maxLength = 100,
  hasCounter = true,
  fullWidth = true,
}: Props) => {
  return (
    <FormControl
      sx={sx}
      error={error}
      fullWidth={fullWidth}
    >
      <CustomLabel label={label} />
      <CustomInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputRef={inputRef}
        maxLength={maxLength}
      />
      <CustomHelperText
        helperText={error ? errorText : helperText}
        hasCounter={hasCounter}
        maxLength={maxLength}
        value={value}
      />
    </FormControl>
  );
};

export default InputClassic;
