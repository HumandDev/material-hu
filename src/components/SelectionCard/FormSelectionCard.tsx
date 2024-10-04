import { FC, PropsWithChildren } from 'react';
import { Controller, ControllerProps, useFormContext } from 'react-hook-form';

import SelectionCard from './SelectionCard';

type FormSelectionCardProps = PropsWithChildren<{
  name: string;
  rules?: ControllerProps['rules'];
  isOnlyOption?: boolean;
}>;

const FormSelectionCard: FC<FormSelectionCardProps> = props => {
  const { name, rules, children, isOnlyOption = false } = props;

  const { getValues, setValue } = useFormContext();

  const valueInput = getValues(name);

  const handleOnClick = (onChange: Function, param: boolean) => {
    if (isOnlyOption) {
      const values = getValues();
      const allInputs = Object.keys(values);

      allInputs.forEach(key => {
        if (name === key) {
          setValue(key, true);
        } else {
          setValue(key, false);
        }
      });
    } else {
      onChange(param);
    }
  };

  return (
    <Controller
      render={({ field: { onChange }, fieldState: { error } }) => (
        <SelectionCard
          onClick={param => handleOnClick(onChange, param)}
          error={!!error}
          errorText={error?.message}
          checked={valueInput}
        >
          {children}
        </SelectionCard>
      )}
      name={name}
      rules={rules}
    />
  );
};

export default FormSelectionCard;
