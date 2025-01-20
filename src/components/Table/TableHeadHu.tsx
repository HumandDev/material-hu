import { FC, PropsWithChildren } from 'react';
import { TableHead, TableHeadProps } from '@mui/material';

const TableHeadHu: FC<PropsWithChildren<TableHeadProps>> = ({
  children,
  ...rest
}) => {
  return (
    <TableHead
      sx={{ backgroundColor: '' }}
      {...rest}
    >
      {children}
    </TableHead>
  );
};

export default TableHeadHu;
