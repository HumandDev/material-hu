import { LinkProps, SxProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
type Props = {
    hasIcon?: boolean;
    iconSize?: number;
    disabled?: boolean;
    sx?: SxProps;
} & Omit<LinkProps, 'sx'>;
declare const Link: FC<PropsWithChildren<Props>>;
export default Link;
