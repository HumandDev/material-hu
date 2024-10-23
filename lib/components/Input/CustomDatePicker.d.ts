import { FC } from 'react';
import { DatePickerProps } from '@mui/x-date-pickers';
export type CustomDatePickerProps = DatePickerProps<Date> & {
    value: string;
    helperText?: string;
};
declare const CustomDatePicker: FC<CustomDatePickerProps>;
export default CustomDatePicker;
