import { FC } from 'react';
import { Control, FieldValues } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';
import { FormValues as ServerPaginationFormValues } from '../../hooks/useServerPagination';
type BuildSearchbarParams<T extends FieldValues> = {
    control: Control<T>;
    setValue: (name: keyof T, value: T[keyof T]) => void;
};
declare const buildSearchbar: ({ control, setValue, }: BuildSearchbarParams<ServerPaginationFormValues>) => FC<TextFieldProps>;
export default buildSearchbar;
