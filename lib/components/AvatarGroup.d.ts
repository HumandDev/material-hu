import { AvatarGroupProps } from '@mui/material';
import { Props as AvatarProps } from './Avatar';
export declare const formatSurplus: (surplus: number) => string;
export type Props = Omit<AvatarGroupProps, 'max' | 'spacing'> & {
    size?: AvatarProps['size'];
    spacing?: 'medium' | 'small';
};
declare const AvatarGroup: ({ size, spacing, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default AvatarGroup;
