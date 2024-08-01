import { CircularProgressProps } from '@mui/material';
type Props = CircularProgressProps & {
    centered?: boolean;
    darkBackground?: boolean;
    size?: string;
};
declare const CenteredCircularProgress: ({ centered, darkBackground, size, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default CenteredCircularProgress;
