import { FC, PropsWithChildren } from 'react';
import { Table, TableProps } from '@mui/material';

const HuTable: FC<PropsWithChildren<TableProps>> = ({ children, ...props }) => {
  return <Table {...props}>{children}</Table>;
};

export default HuTable;
