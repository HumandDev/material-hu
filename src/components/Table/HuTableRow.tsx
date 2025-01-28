import { FC, PropsWithChildren } from 'react';
import { TableRow, TableRowProps, useTheme } from '@mui/material';
import { colorPalette } from '../../theme/hugo/colors';

type Props = { headerRow?: boolean };

const getBackgroundColor = (
  headerRow: boolean,
  selected: boolean | undefined,
) => {
  if (headerRow) {
    return {
      backgroundColor: colorPalette.hugoBackground?.neutralBgSecondary,
      '&:hover': {
        backgroundColor: colorPalette.hugoBackground?.neutralBgSecondary,
      },
    };
  }

  if (selected == null) {
    return {
      backgroundColor: colorPalette.hugoBackground.neutralBgTerciary,
      '&:hover': {
        backgroundColor: colorPalette.hugoBackground.neutralBgTerciary,
      },
    };
  }

  if (selected) {
    return {
      backgroundColor: colorPalette.buttons?.buttonSecondaryHover,
      '&:hover': {
        backgroundColor: colorPalette.buttons?.buttonSecondaryHover,
      },
    };
  }

  return {
    backgroundColor: colorPalette.hugoBackground.neutralBgTerciary,
    '&:hover': {
      backgroundColor: colorPalette.buttons?.buttonTertiaryHover,
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
  const backgroundStyles = getBackgroundColor(headerRow, selected);

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
