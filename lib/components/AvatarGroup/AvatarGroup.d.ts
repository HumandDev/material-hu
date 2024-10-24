import { AvatarProps } from '../Avatar/Avatar';
export declare const formatSurplus: (surplus: number) => string;
export type Props = {
    size?: AvatarProps['size'];
    avatars: Pick<AvatarProps, 'src' | 'color' | 'alt' | 'text'>[];
};
declare const AvatarGroup: ({ size, avatars }: Props) => import("react/jsx-runtime").JSX.Element;
export default AvatarGroup;
