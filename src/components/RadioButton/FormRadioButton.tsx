import { Controller, ControllerProps, useFormContext } from 'react-hook-form';
import RadioButton from './RadioButton';
import { RadioProps, SxProps, TypographyProps } from '@mui/material';

type Props = {
  name: string;
  radioButtonProps: Omit<RadioProps, 'name'> & {
    label: string;
    extraData?: string;
    description?: string;
    stackSx?: SxProps;
    labelProps?: TypographyProps;
    isOnlyOption?: boolean;
  };
  isOnlyOption?: boolean;
  rules?: ControllerProps['rules'];
};

const FormRadioButton = ({
  name,
  radioButtonProps,
  rules,
  isOnlyOption = false,
}: Props) => {
  const { getValues, setValue } = useFormContext();

  const handleOnClick = (onChange: Function, param: boolean) => {
    onChange(param);
    if (isOnlyOption) {
      const nameParts = name.split('.');
      const baseRoute = nameParts.slice(0, -1).join('.');
      const currentProperty = nameParts[nameParts.length - 1];

      const baseObject = getValues(baseRoute);

      Object.keys(baseObject).forEach(
        key =>
          key !== currentProperty && setValue(`${baseRoute}.${key}`, false),
      );
    }
  };

  return (
    <Controller
      name={name}
      rules={rules}
      render={({
        field: { value, ref, onChange, ...rest },
        fieldState: { error },
      }) => (
        <RadioButton
          isActive={Boolean(value)}
          onChange={onChange}
          {...rest}
          {...radioButtonProps}
          inputRef={ref}
          error={!!error}
          onClick={param => handleOnClick(onChange, param)}
        />
      )}
    />
  );
};

export default FormRadioButton;
