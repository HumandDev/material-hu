import { FC, PropsWithChildren } from 'react';
import { Controller, ControllerProps, useFormContext } from 'react-hook-form';
import SelectionCard, { SelectionCardProps } from './SelectionCard';

type FormSelectionCardProps = PropsWithChildren<{
  name: string;
  rules?: ControllerProps['rules'];
  isOnlyOption?: boolean;
  sx?: SelectionCardProps['sx'];
}>;

const FormSelectionCard: FC<FormSelectionCardProps> = props => {
  const { name, rules, children, isOnlyOption = false, sx } = props;

  const { getValues, setValue } = useFormContext();

  const valueInput = getValues(name);

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
      render={({ field: { onChange } }) => (
        <SelectionCard
          onClick={param => handleOnClick(onChange, param)}
          checked={valueInput}
          sx={sx}
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
