import { CircularProgressProps } from '@mui/material';
type Props = CircularProgressProps & {
    centered?: boolean;
    darkBackground?: boolean;
    size?: 'small' | 'medium';
};
declare const CenteredCircularProgress: ({ centered, darkBackground, size, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default CenteredCircularProgress;
