import { CircularProgressProps } from '@mui/material';
type Props = CircularProgressProps & {
    centered?: boolean;
    onDark?: boolean;
};
declare const CenteredCircularProgress: ({ centered, dark, sizes, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default CenteredCircularProgress;
