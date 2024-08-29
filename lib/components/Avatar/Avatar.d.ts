import { AvatarProps } from '@mui/material';
import { BadgeProps } from '../Badge/Badge';
export type Props = Pick<AvatarProps, 'sx' | 'variant' | 'src' | 'alt'> & {
    size?: 'small' | 'medium' | 'large';
    color?: 'default' | 'primary' | 'highlight' | 'success' | 'error' | 'warning';
    withBadge?: boolean;
    badgeProps?: BadgeProps;
};
declare const Avatar: ({ size, color, withBadge, badgeProps, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default Avatar;
