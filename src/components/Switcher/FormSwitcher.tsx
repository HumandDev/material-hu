import { FC } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import Switcher, { SwitcherProps } from './Switcher';

type Props = {
  name: string;
  switcherProps: Omit<SwitcherProps, 'value' | 'onChange'>;
  rules?: ControllerProps['rules'];
};

const FormSwitcher: FC<Props> = ({ name, switcherProps, rules }) => {
  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field: { value, onChange } }) => (
        <Switcher
          {...switcherProps}
          value={Boolean(value)}
          onChange={onChange}
        />
      )}
    />
  );
};

export default FormSwitcher;
