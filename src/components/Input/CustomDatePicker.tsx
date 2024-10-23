import { FC } from 'react';
import { useTheme } from '@mui/material';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers';
import {
  IconCalendarDue,
  IconChevronLeft,
  IconChevronRight,
  IconChevronDown,
} from '@tabler/icons-react';

export type CustomDatePickerProps = DatePickerProps<Date> & {
  value: string;
  helperText?: string;
};

const CustomDatePicker: FC<CustomDatePickerProps> = ({
  value,
  helperText,
  ...props
}) => {
  const theme = useTheme();

  return (
    <DatePicker
      value={value}
      slotProps={{
        textField: {
          helperText,
        },
        day: {
          sx: {
            color: theme.palette.textColors?.primaryText,
            borderRadius: '8px',
            '&.Mui-selected': {
              bgcolor: `${theme.palette.buttons?.buttonPrimaryEnabled} !important`,
            },
            '&.MuiPickersDay-today': {
              borderColor: `${theme.palette.border?.primaryBorder} !important`,
            },
          },
        },
      }}
      slots={{
        openPickerIcon: IconCalendarDue,
        leftArrowIcon: IconChevronLeft,
        rightArrowIcon: IconChevronRight,
        switchViewIcon: IconChevronDown,
      }}
      {...props}
    />
  );
};

export default CustomDatePicker;
