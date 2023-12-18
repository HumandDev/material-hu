import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { TablePagination } from '@mui/material';
import { FormValues } from '../../hooks/useServerPagination';

export type PaginationControllerProps<T extends FieldValues> = {
  control: Control<T>;
  total: number;
  setPage: (param: number) => void;
  setLimit: (param: number) => void;
  limitOptions: number[];
};

const PaginationController: FC<PaginationControllerProps<FormValues>> = (props) => {
  const { control, total, setPage, setLimit, limitOptions } = props;

  return (
    <Controller
      control={control}
      name="pagination"
      render={({ field }) => (
        <TablePagination
          {...field}
          component="div"
          count={total}
          onPageChange={(event, page) => setPage(page)}
          onRowsPerPageChange={(event) => setLimit(parseInt(event.target.value, 10))}
          page={field.value.page}
          rowsPerPage={field.value.limit}
          rowsPerPageOptions={limitOptions}
        />
      )}
    />
  );
};

export default PaginationController;
