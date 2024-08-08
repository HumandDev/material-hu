import { AvatarGroupProps } from '@mui/material';
import { Props as AvatarProps } from './Avatar';
export declare const formatSurplus: (surplus: number) => string;
export type Props = Omit<AvatarGroupProps, 'spacing'> & {
    size?: AvatarProps['size'];
    spacing?: 'medium' | 'small';
};
declare const AvatarGroup: ({ size, spacing, max, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default AvatarGroup;
