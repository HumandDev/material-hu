import { RatingProps as MuiRatingProps } from '@mui/material';
export type RatingProps = Omit<MuiRatingProps, 'precision'>;
declare const Rating: ({ max, size, ...props }: RatingProps) => import("react/jsx-runtime").JSX.Element;
export default Rating;
