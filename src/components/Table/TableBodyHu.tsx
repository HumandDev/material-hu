import { TableBody, TableBodyProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const TableBodyHu: FC<PropsWithChildren<TableBodyProps>> = ({
  children,
  ...props
}) => {
  return <TableBody {...props}>{children}</TableBody>;
};
export default TableBodyHu;
