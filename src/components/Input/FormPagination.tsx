import { FC, ComponentProps } from 'react';
import { useFormContext, Controller, ControllerProps } from 'react-hook-form';
import Pagination from './Pagination';

export type FormPaginationProps = {
  name: string;
  inputProps?: Pick<
    ComponentProps<typeof Pagination>,
    | 'loading'
    | 'type'
    | 'limitOptions'
    | 'totalPages'
    | 'sx'
    | 'onChangeLimit'
    | 'onChangePage'
  >;
  rules?: ControllerProps['rules'];
};

export const FormPagination: FC<FormPaginationProps> = ({
  name,
  inputProps: {
    onChangePage = () => null,
    onChangeLimit = () => null,
    ...inputProps
  } = {},
  rules,
}) => {
  const { setValue, watch } = useFormContext();

  const handleChangePage = (newPage: number) => {
    setValue(`${name}.page`, newPage);
    onChangePage(newPage);
  };

  const handleChangeLimit = (newLimit: number) => {
    setValue(`${name}.limit`, newLimit);
    onChangeLimit(newLimit);
  };

  const { page, limit } = watch(name);

  return (
    <Controller
      render={({ field: { value, ...field } }) => (
        <Pagination
          {...field}
          {...inputProps}
          page={page}
          limit={limit}
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
