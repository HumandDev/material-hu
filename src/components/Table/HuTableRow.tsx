import { FC, PropsWithChildren } from 'react';
import { TableRow, TableRowProps, Theme, useTheme } from '@mui/material';

type Props = { headerRow?: boolean };

const getBackgroundColor = (
  headerRow: boolean,
  selected: boolean | undefined,
  theme: Theme,
) => {
  if (headerRow) {
    return {
      backgroundColor: theme.palette.hugoBackground?.neutralBgSecondary,
      '&:hover': {
        backgroundColor: theme.palette.hugoBackground?.neutralBgSecondary,
      },
    };
  }

  if (selected == null) {
    return {
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: 'white',
      },
    };
  }

  if (selected) {
    return {
      backgroundColor: theme.palette.buttons?.buttonSecondaryHover,
      '&:hover': {
        backgroundColor: theme.palette.buttons?.buttonSecondaryHover,
      },
    };
  }

  return {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: theme.palette.buttons?.buttonTertiaryHover,
    },
  };
};

const TableRowHu: FC<PropsWithChildren<TableRowProps & Props>> = ({
  children,
  sx,
  headerRow = false,
  selected,
  ...props
}) => {
  const theme = useTheme();
  const backgroundStyles = getBackgroundColor(headerRow, selected, theme);

  return (
    <TableRow
      sx={{
        borderBottom: `1px solid ${theme.palette.border?.neutralBorder}`,
        ...backgroundStyles,
        ...sx,
      }}
      selected={selected}
      {...props}
    >
      {children}
    </TableRow>
  );
};

export default TableRowHu;
