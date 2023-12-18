import { FC } from 'react';
import { Control, FieldValues } from 'react-hook-form';
import { FormValues } from '../../hooks/useServerPagination';
export type SearchBarControllerProps<T extends FieldValues> = {
    control: Control<T>;
    placeholder?: string;
    setValue: (name: keyof T, value: T[keyof T]) => void;
    isSurveys?: boolean;
};
declare const SearchBarController: FC<SearchBarControllerProps<FormValues>>;
export default SearchBarController;
