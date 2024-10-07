import { FC, PropsWithChildren } from 'react';
import _ from 'lodash';
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
    onChange(param);
    if (isOnlyOption) {
      const values = getValues();

      const nameParts = name.split('.');
      const baseRoute = nameParts.slice(0, -1).join('.');
      const currentProperty = nameParts[nameParts.length - 1];

      const baseObject = _.get(values, baseRoute);

      const remainingInputs = _.omit(baseObject, currentProperty);

      const remainingInputKeys = Object.keys(remainingInputs);

      remainingInputKeys.forEach(key =>
        setValue([baseRoute, key].join('.'), false),
      );
    }
  };

  return (
    <Controller
      render={({ field: { onChange } }) => (
        <SelectionCard
          onClick={param => handleOnClick(onChange, param)}
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
