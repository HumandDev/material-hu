import { AvatarGroupProps } from '@mui/material';
import { Props as AvatarProps } from '../Avatar/Avatar';
export declare const formatSurplus: (surplus: number) => string;
export type Props = AvatarGroupProps & {
    size?: AvatarProps['size'];
};
declare const AvatarGroup: ({ size, max, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default AvatarGroup;
