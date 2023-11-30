import { FC, ReactNode } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import {
  RadioGroup,
  RadioGroupProps,
  Radio,
  RadioProps,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText,
  FormHelperTextProps,
  Typography,
  Stack,
  StackProps,
  useTheme,
} from '@mui/material';

export type Option = {
  value: any,
  label: ReactNode,
  helperText?: string,
};

export type FormRadioCustomGroupProps =
  Omit<RadioGroupProps, 'name'> & {
  name: string;
  options: Option[];
  radioProps?: RadioProps;
  labelProps?: Omit<FormControlLabelProps, 'control' | 'label'>;
  helperTextProps?: FormHelperTextProps;
  optionContainerProps?: StackProps;
  column?: boolean;
  fullWidth?: boolean;
};

export const FormRadioCustomGroup: FC<FormRadioCustomGroupProps> = (props) => {
  const {
    name,
    options,
    radioProps = {},
    labelProps = {},
    helperTextProps = {},
    optionContainerProps = {},
    column = false,
    fullWidth = true,
    ...other
  } = props;

  const { control } = useFormContext();
  const theme = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RadioGroup
          {...other}
          {...field}
          sx={{
            flexDirection: column ? 'column' : 'row',
            width: fullWidth ? '100%' : undefined,
              ...other?.sx
          }}
        >
          {options.map((option, index) => (
            <Stack
              key={option.value}
              {...optionContainerProps}
              sx={{
                px: 0,
                py: 0.5,
                mb: index === options.length - 1 ? 0 : 2,
                width: fullWidth ? '100%' : undefined,
                boxShadow: theme.shadows[2],
                borderRadius: 1,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: option.value === field.value
                  ? theme.palette.humand.dark
                  : 'rgba(0, 0, 0, 0.12)',
                backgroundColor: option.value === field.value
                  ? '#F5F7FF'
                  : theme.palette.background.paper,
                '& .MuiFormControlLabel-root': {
                  padding: theme.spacing(1, 2),
                  width: '100%',
                  height: '100%',
                  alignItems: 'flex-start',
                },
                ...optionContainerProps.sx,
              }}
            >
              <FormControlLabel
                {...labelProps}
                aria-describedby={
                  option.helperText
                    ? `${name}-${option.value}-helper-text`
                    : undefined
                }
                control={(
                  <Radio
                    color="humand"
                    {...radioProps}
                    sx={{
                      mx: 1,
                      ...radioProps?.sx
                    }}
                  />
                )}
                label={(
                  <Stack>
                    <Typography
                      variant="subtitle2"
                      fontSize="1rem"
                    >
                      {option.label}
                    </Typography>
                    {option.helperText && (
                      <FormHelperText
                        {...helperTextProps}
                        id={`${name}-${option.value}-helper-text`}
                      >
                        <Typography
                          variant="body2"
                          component="span"
                          color={theme.palette.text.secondary}
                        >
                          {option.helperText}
                        </Typography>
                      </FormHelperText>
                    )}
                  </Stack>
                )}
                value={option.value}
              />
            </Stack>
          ))}
        </RadioGroup>
      )}
    />
  );
};

export default FormRadioCustomGroup;
