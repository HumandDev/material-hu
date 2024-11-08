type TooltipBodyProps = {
    title?: string;
    description?: string;
};
export type TooltipProps = TooltipBodyProps & {
    direction?: 'top' | 'left' | 'right' | 'bottom';
    children: any;
    disableTooltip?: boolean;
    delay?: number;
};
declare const Tooltip: ({ children, disableTooltip, delay, ...props }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export default Tooltip;
