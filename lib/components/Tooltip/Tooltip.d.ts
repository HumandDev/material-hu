type TooltipBodyProps = {
    title?: string;
    description?: string;
};
export type TooltipProps = TooltipBodyProps & {
    direction?: 'top' | 'left' | 'right' | 'bottom';
    children: any;
};
declare const Tooltip: ({ children, ...props }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export default Tooltip;
