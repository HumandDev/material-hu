import { FC, ComponentProps } from 'react';
import { ControllerProps } from 'react-hook-form';
import Search from './Search';
export type FormSearchProps = {
    name: string;
    inputProps?: Pick<ComponentProps<typeof Search>, 'label' | 'placeholder' | 'variant' | 'sx' | 'onChange'>;
    rules?: ControllerProps['rules'];
};
export declare const FormSearch: FC<FormSearchProps>;
export default FormSearch;
