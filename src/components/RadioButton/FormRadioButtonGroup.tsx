import { FC } from 'react';
import { Controller, ControllerProps, useFormContext } from 'react-hook-form';
import { RadioGroup, RadioGroupProps, RadioProps } from '@mui/material';
import CardContainer from '../CardContainer';
import RadioButton from './RadioButton';

type Option = {
  value: any;
  label: string;
  helperText?: string;
};

type Props = Omit<RadioGroupProps, 'name'> & {
  name: string;
  options: Option[];
  radioProps?: RadioProps;
  rules?: ControllerProps['rules'];
};

const FormRadioButtonGroup: FC<Props> = props => {
  const { name, options, radioProps, rules, ...other } = props;

  const { control, setValue, watch } = useFormContext();
  const groupName = watch(name);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, ...field } }) => (
        <RadioGroup
          {...field}
          {...other}
        >
          {options.map(option => (
            <CardContainer
              key={option.value}
              sx={{ width: '100%', cursor: 'pointer' }}
              onClick={() => {
                // Prevent triggering selection when user is selecting text
                if (window.getSelection()?.type !== 'Range') {
                  setValue(name, option.value);
                }
              }}
            >
              <RadioButton
                {...radioProps}
                label={option.label}
                onClick={() => {
                  setValue(name, option.value);
                }}
                description={option.helperText}
                value={option.value}
                isActive={groupName === option.value}
              />
            </CardContainer>
          ))}
        </RadioGroup>
      )}
    />
  );
};

export default FormRadioButtonGroup;
