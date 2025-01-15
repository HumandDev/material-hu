import { StackProps } from '@mui/material';
type Props = {
    current?: number;
    total?: number;
    title?: string;
    description?: string;
    helper?: string;
    hasPercentage?: boolean;
    variant?: 'determinate' | 'indeterminate';
    progressHeight?: number;
    decimalPrecision?: 0 | 1 | 2;
    sx?: StackProps['sx'];
};
declare const ProgressBar: ({ title, description, helper, variant, current, total, hasPercentage, progressHeight, decimalPrecision, sx, }: Props) => import("react/jsx-runtime").JSX.Element;
export default ProgressBar;
