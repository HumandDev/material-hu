import { AvatarGroupProps } from '@mui/material';
import { Props as AvatarProps } from './Avatar';
export type Props = Omit<AvatarGroupProps, 'max'> & {
    size?: AvatarProps['size'];
};
declare const AvatarGroup: ({ size, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default AvatarGroup;
