import { LinkProps, SxProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
type Props = {
    hasIcon?: boolean;
    iconSize?: number;
    disabled?: boolean;
    stackSx?: SxProps;
} & LinkProps;
declare const Link: FC<PropsWithChildren<Props>>;
export default Link;
