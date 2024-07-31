import { CircularProgressProps } from '@mui/material';
type Props = CircularProgressProps & {
    centered?: boolean;
    dark?: boolean;
    sizes?: string;
};
declare const CenteredCircularProgress: ({ centered, dark, sizes, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default CenteredCircularProgress;
