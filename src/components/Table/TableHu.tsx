import { FC, PropsWithChildren } from 'react';
import { Table, TableProps } from '@mui/material';

const TableHu: FC<PropsWithChildren<TableProps>> = ({ children, ...props }) => {
  return <Table {...props}>{children}</Table>;
};

export default TableHu;
