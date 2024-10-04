import { FC, PropsWithChildren } from 'react';
type TooltipBodyProps = {
    title?: string;
    description?: string;
    isRemovable?: boolean;
};
export type TooltipProps = TooltipBodyProps & {
    direction?: 'top' | 'left' | 'right' | 'bottom';
};
declare const Tooltip: FC<PropsWithChildren<TooltipProps>>;
export default Tooltip;
