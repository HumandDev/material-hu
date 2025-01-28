import { FC, PropsWithChildren } from 'react';
import { TableCell, TableCellProps, Typography } from '@mui/material';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import { colorPalette } from '../../theme/hugo/colors';

type Props = {
  headerCell?: boolean;
  actionable?: boolean;
  selectionCell?: boolean;
  tooltipTitle?: string;
  tooltipProps?: Omit<TooltipProps, 'children'>;
};

const HuTableCell: FC<PropsWithChildren<TableCellProps & Props>> = ({
  children,
  sx,
  tooltipTitle,
  tooltipProps = {},
  headerCell = false,
  actionable = false,
  selectionCell = false,
  ...props
}) => {
  const hoverStyles = actionable
    ? {
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: colorPalette.base.grey[300],
        },
      }
    : {};

  return (
    <Tooltip
      title={tooltipTitle}
      disableTooltip={!tooltipTitle}
      direction="bottom"
      {...tooltipProps}
    >
      <TableCell
        align={selectionCell ? 'center' : 'left'}
        sx={{
          py: 2,
          px: 3,
          ...(selectionCell
            ? {
                borderRight: theme =>
                  `4px solid ${theme.palette.border?.neutralBorder}`,
                p: 1,
              }
            : {}),
          ...hoverStyles,
          ...sx,
        }}
        {...props}
      >
        {headerCell && (
          <Typography
            variant="globalS"
            fontWeight="fontWeightSemiBold"
            sx={{ color: theme => theme.palette.textColors?.neutralText }}
          >
            {children}
          </Typography>
        )}
        {!headerCell && children}
      </TableCell>
    </Tooltip>
  );
};

export default HuTableCell;
