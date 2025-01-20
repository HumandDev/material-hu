import { TableContainer, TableContainerProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type Props = {
  hasToolbar?: boolean;
};

const TableContainerHu: FC<PropsWithChildren<TableContainerProps & Props>> = ({
  hasToolbar = false,
  children,
  sx,
  ...props
}) => {
  return (
    <TableContainer
      sx={{
        border: theme => `1px solid ${theme.palette.border?.neutralBorder}`,
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
