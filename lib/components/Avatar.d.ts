import { AvatarProps, BadgeProps } from '@mui/material';
export type Props = AvatarProps & {
    size?: 'small' | 'medium' | 'large';
    color?: 'default' | 'primary' | 'highlight' | 'success' | 'error' | 'warning';
    withBadge?: boolean;
    badgeContent?: BadgeProps['badgeContent'];
    badgeProps?: Omit<BadgeProps, 'badgeContent'>;
};
export declare const getSizeInPixels: (size: Props['size']) => string;
declare const Avatar: ({ size, color, withBadge, badgeContent, badgeProps, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default Avatar;