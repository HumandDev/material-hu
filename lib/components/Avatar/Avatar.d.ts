import { AvatarProps, Palette } from '@mui/material';
import { BadgeProps } from '../Badge/Badge';
export type Props = Pick<AvatarProps, 'sx' | 'variant' | 'src' | 'alt'> & {
    size?: 'small' | 'medium' | 'large';
    color?: 'default' | 'primary' | 'highlight' | 'success' | 'error' | 'warning';
    withBadge?: boolean;
    badgeProps?: BadgeProps;
    text?: string;
};
export declare const getSizeInPixels: (size: Props['size']) => string;
export declare const getColorsVariant: (color: Props['color'], palette: Palette) => {
    backgroundColor: string;
    color: string;
};
declare const Avatar: ({ size, color, withBadge, badgeProps, text, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default Avatar;
