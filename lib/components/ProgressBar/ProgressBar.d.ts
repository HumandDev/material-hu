import { StackProps } from '@mui/material';
type Props = {
    current?: number;
    total?: number;
    title?: string;
    description?: string;
    helper?: string;
    variant?: 'determinate' | 'indeterminate';
    sx?: StackProps['sx'];
};
declare const ProgressBar: ({ title, description, helper, variant, current, total, sx, }: Props) => import("react/jsx-runtime").JSX.Element;
export default ProgressBar;
