import { ButtonProps, SxProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
type Props = {
    label: string;
    open?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    buttonVariant?: Extract<ButtonProps['variant'], 'secondary' | 'tertiary'>;
    buttonSize?: ButtonProps['size'];
    position?: 'left' | 'right' | 'center';
    hasIcon?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    sx?: SxProps;
    buttonProps?: ButtonProps;
};
declare const Dropdown: FC<PropsWithChildren<Props>>;
export default Dropdown;
