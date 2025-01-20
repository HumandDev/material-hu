import { FC, PropsWithChildren } from 'react';
import { TableContainer, TableContainerProps } from '@mui/material';

const HuTableContainer: FC<PropsWithChildren<TableContainerProps>> = ({
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

export default HuTableContainer;
