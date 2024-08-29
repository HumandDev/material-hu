import { CircularProgressProps } from '@mui/material';
type Props = CircularProgressProps & {
    centered?: boolean;
    darkBackground?: boolean;
    width?: 'small' | 'medium';
};
declare const CenteredCircularProgress: ({ centered, darkBackground, width, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default CenteredCircularProgress;
