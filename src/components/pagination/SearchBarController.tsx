import { FC } from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';
import { IconX as CloseIcon } from '@tabler/icons-react';
import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import SearchIcon from '../../svg-icons/Search';
import { FormValues as ServerPaginationFormValues } from '../../hooks/useServerPagination';

type BuildSearchbarParams<T extends FieldValues> = {
  control: Control<T>;
  setValue: (name: keyof T, value: T[keyof T]) => void;
};

const buildSearchbar = ({
  control,
  setValue,
}: BuildSearchbarParams<ServerPaginationFormValues>) => {
  const SearchBarController: FC<TextFieldProps> = props => {
    return (
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
                    style={{
                      cursor: 'pointer',
                      visibility: field.value ? 'visible' : 'hidden',
                    }}
                    onClick={() => setValue('query', '')}
                  />
                </InputAdornment>
              ),
              inputProps: { maxLength: 255 },
            }}
            variant="outlined"
            {...field}
            {...props}
          />
        )}
      />
    );
  };
  return SearchBarController;
};

export default buildSearchbar;
