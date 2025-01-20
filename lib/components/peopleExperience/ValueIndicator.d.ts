import { StackProps, TooltipProps, TypographyProps } from '@mui/material';
import { ReactNode } from 'react';
type ValueIndicatorProps = {
    value: number | string;
    label: string;
    loading?: boolean;
    description?: string;
    slotProps?: Partial<{
        container: StackProps;
        description: Partial<TooltipProps>;
        value: Partial<TypographyProps & {
            endAdornment: ReactNode;
        }>;
        label: Partial<TypographyProps>;
    }>;
};
declare const ValueIndicator: ({ value, label, loading, description, slotProps, }: ValueIndicatorProps) => import("react/jsx-runtime").JSX.Element;
export default ValueIndicator;
