import { LinkProps as MuiLinkProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
export type LinkProps = {
    hasIcon?: boolean;
    iconSize?: number;
    disabled?: boolean;
} & MuiLinkProps;
export declare const Link: FC<PropsWithChildren<LinkProps>>;
export default Link;
