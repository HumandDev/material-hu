import { FC } from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';

import { Close as CloseIcon, ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '../../svg-icons/Search';
import { FormValues as ServerPaginationFormValues } from '../../hooks/useServerPagination';

export type SearchBarControllerProps<T extends FieldValues> = {
  control: Control<T>;
  setValue: (name: keyof T, value: T[keyof T]) => void;
  placeholder?: string;
  isSurveys?: boolean;
};

const SearchBarController: FC<SearchBarControllerProps<ServerPaginationFormValues>> = (props) => {
  const { control, placeholder = "", setValue, isSurveys = false } = props;

  return (
    <Box sx={{ m: isSurveys ? 0 : 1 }}>
      <Controller
        control={control}
        name="query"
        render={({ field }) => (
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <CloseIcon
                    fontSize="small"
                    sx={{ cursor: 'pointer', visibility: field.value ? 'visible' : 'hidden' }}
                    onClick={() => setValue('query', '')}
                  />
                </InputAdornment>),
              inputProps: { maxLength: 255 }
            }}
            placeholder={placeholder}
            variant="outlined"
            {...field}
          />
        )}
      />
    </Box>
  );
};

export default SearchBarController;
