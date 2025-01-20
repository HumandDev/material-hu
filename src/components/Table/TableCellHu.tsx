import { TableCell, TableCellProps, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type Props = {
  headerCell?: boolean;
  actionable?: boolean;
};

const TableCellHu: FC<PropsWithChildren<TableCellProps & Props>> = ({
  children,
  sx,
  headerCell = false,
  actionable = false,
  ...props
}) => {
  const hoverStyles = actionable
    ? {
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#E9E9F4',
        },
      }
    : {};

  return (
    <TableCell
      align="left"
      sx={{
        py: 2,
        px: 3,
        ...hoverStyles,
        ...sx,
      }}
      {...props}
    >
      {headerCell && (
        <Typography
          variant="globalS"
          fontWeight="semibold"
          sx={{ color: theme => theme.palette.textColors?.neutralText }}
        >
          {children}
        </Typography>
      )}
      {!headerCell && children}
    </TableCell>
  );
};

export default TableCellHu;
