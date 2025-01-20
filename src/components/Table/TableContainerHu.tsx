import { TableContainer, TableContainerProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const TableContainerHu: FC<PropsWithChildren<TableContainerProps>> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <TableContainer
      sx={{
        border: '1px solid #E9E9F4',
        borderRadius: '16px',
        ...sx,
      }}
      {...props}
    >
      {children}
    </TableContainer>
  );
};

export default TableContainerHu;
