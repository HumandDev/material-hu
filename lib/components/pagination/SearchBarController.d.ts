import { FC } from 'react';
import { Control, FieldValues } from 'react-hook-form';
import { FormValues } from '../../hooks/useServerPagination';
export type SearchBarControllerProps<T extends FieldValues> = {
    control: Control<T>;
    setValue: (name: keyof T, value: T[keyof T]) => void;
    placeholder?: string;
    isSurveys?: boolean;
};
declare const SearchBarController: FC<SearchBarControllerProps<FormValues>>;
export default SearchBarController;
