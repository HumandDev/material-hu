import { FC, PropsWithChildren } from 'react';
import { Controller, ControllerProps, useFormContext } from 'react-hook-form';
import SelectionCard, { SelectionCardProps } from './SelectionCard';

type FormSelectionCardProps = PropsWithChildren<{
  name: string;
  rules?: ControllerProps['rules'];
  isOnlyOption?: boolean;
  sx?: SelectionCardProps['sx'];
  disabled?: boolean;
}>;

// this component can work either as a checkbox or a radio button, depending on the isOnlyOption prop.
const FormSelectionCard: FC<FormSelectionCardProps> = props => {
  const { name, rules, children, isOnlyOption = false, sx, disabled } = props;

  const { getValues, setValue } = useFormContext();

  const valueInput = getValues(name);

  const handleOnClick = (onChange: Function, param: boolean) => {
    onChange(param);
    if (isOnlyOption) {
      // deselect all other options
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

  // can't change value if it is the only option and it is already selected
  const canChange = !(isOnlyOption && valueInput) && !disabled;

  return (
    <Controller
      render={({ field: { onChange } }) => (
        <SelectionCard
          onClick={param => canChange && handleOnClick(onChange, param)}
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
