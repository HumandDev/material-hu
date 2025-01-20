import { TableCellProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { TooltipProps } from '../Tooltip/Tooltip';
type Props = {
    headerCell?: boolean;
    actionable?: boolean;
    selectionCell?: boolean;
    tooltip?: string;
    tooltipProps?: Omit<TooltipProps, 'children'>;
};
declare const TableCellHu: FC<PropsWithChildren<TableCellProps & Props>>;
export default TableCellHu;
