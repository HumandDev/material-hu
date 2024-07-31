import { CircularProgressProps } from '@mui/material';
type Props = CircularProgressProps & {
    centered?: boolean;
    dark?: boolean;
    width?: string;
};
declare const CenteredCircularProgress: ({ centered, dark, width, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default CenteredCircularProgress;
