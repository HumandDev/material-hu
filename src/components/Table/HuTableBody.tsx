import { FC, PropsWithChildren } from 'react';
import { TableBody, TableBodyProps } from '@mui/material';

const HuTableBody: FC<PropsWithChildren<TableBodyProps>> = ({
  children,
  ...props
}) => {
  return <TableBody {...props}>{children}</TableBody>;
};
export default HuTableBody;
