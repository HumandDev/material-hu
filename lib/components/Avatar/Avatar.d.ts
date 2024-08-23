import { AvatarProps, BadgeProps } from '@mui/material';
export type Props = Pick<AvatarProps, 'sx' | 'variant' | 'src' | 'alt'> & {
    size?: 'small' | 'medium' | 'large';
    color?: 'default' | 'primary' | 'highlight' | 'success' | 'error' | 'warning';
    withBadge?: boolean;
    badgeContent?: BadgeProps['badgeContent'];
    badgeProps?: Omit<BadgeProps, 'badgeContent'>;
};
declare const Avatar: ({ size, color, withBadge, badgeContent, badgeProps, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default Avatar;
