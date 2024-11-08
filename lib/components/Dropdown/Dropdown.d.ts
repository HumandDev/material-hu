import { ButtonProps, SxProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
type Props = {
    label: string;
    open?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    buttonType?: 'secondary' | 'tertiary';
    buttonSize?: 'small' | 'medium' | 'large';
    position?: 'left' | 'right' | 'center';
    hasIcon?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    sx?: SxProps;
    buttonProps?: ButtonProps;
};
declare const Dropdown: FC<PropsWithChildren<Props>>;
export default Dropdown;
