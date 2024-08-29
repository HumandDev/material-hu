import { StackProps, TooltipProps } from '@mui/material';
type ValueIndicatorProps = {
    value: number | string;
    label: string;
    loading?: boolean;
    description?: string;
    slotProps?: Partial<{
        container: StackProps;
        description: Partial<TooltipProps>;
    }>;
};
declare const ValueIndicator: ({ value, label, loading, description, slotProps, }: ValueIndicatorProps) => import("react/jsx-runtime").JSX.Element;
export default ValueIndicator;
