import { FC, PropsWithChildren } from 'react';
import { TableCellProps } from '@mui/material';
import { TooltipProps } from '../Tooltip/Tooltip';
type Props = {
    headerCell?: boolean;
    actionable?: boolean;
    selectionCell?: boolean;
    tooltip?: string;
    tooltipProps?: Omit<TooltipProps, 'children'>;
};
declare const HuTableCell: FC<PropsWithChildren<TableCellProps & Props>>;
export default HuTableCell;
