import { FC, PropsWithChildren } from 'react';
import { TableHead, TableHeadProps } from '@mui/material';

const HuTableHead: FC<PropsWithChildren<TableHeadProps>> = ({
  children,
  ...props
}) => {
  return <TableHead {...props}>{children}</TableHead>;
};

export default HuTableHead;
