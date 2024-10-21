import { AvatarProps as MuiAvatarProps, Palette } from '@mui/material';
import { BadgeProps } from '../Badge/Badge';
import { TablerIcon } from '@tabler/icons-react';
export type AvatarProps = Pick<MuiAvatarProps, 'sx' | 'variant' | 'src' | 'alt'> & {
    size?: 'small' | 'medium' | 'large';
    color?: 'default' | 'primary' | 'highlight' | 'success' | 'error' | 'warning';
    withBadge?: boolean;
    badgeProps?: BadgeProps;
    text?: string;
    Icon?: TablerIcon;
};
export declare const getSizeInPixels: (size: AvatarProps['size']) => string;
export declare const getIconSize: (size: AvatarProps['size']) => 32 | 24;
export declare const getColorsVariant: (color: AvatarProps['color'], palette: Palette) => {
    backgroundColor: string;
    color: string;
};
export declare const Avatar: ({ size, color, withBadge, badgeProps, text, Icon, ...props }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
export default Avatar;
