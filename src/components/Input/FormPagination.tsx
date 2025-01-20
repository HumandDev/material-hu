import { FC, ComponentProps } from 'react';
import { useFormContext, Controller, ControllerProps } from 'react-hook-form';
import Pagination from './Pagination';

export type FormPaginationProps = {
  name: string;
  inputProps?: Pick<
    ComponentProps<typeof Pagination>,
    'loading' | 'type' | 'limitOptions' | 'totalPages' | 'sx'
  >;
  rules?: ControllerProps['rules'];
};

export const FormPagination: FC<FormPaginationProps> = ({
  name,
  inputProps,
  rules,
}) => {
  const { setValue, watch } = useFormContext();

  const handleChangePage = (newPage: number) =>
    setValue(`${name}.page`, newPage);
  const handleChangeLimit = (newLimit: number) =>
    setValue(`${name}.limit`, newLimit);

  const { page, limit } = watch(name);

  return (
    <Controller
      render={({ field: { value, ...field } }) => (
        <Pagination
          page={page}
          limit={limit}
          {...field}
          {...inputProps}
          onChangePage={handleChangePage}
          onChangeLimit={handleChangeLimit}
        />
      )}
      name={name}
      rules={rules}
    />
  );
};

export default FormPagination;
