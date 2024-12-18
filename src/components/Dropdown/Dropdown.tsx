import { Button, ButtonProps, Stack, SxProps } from '@mui/material';
import { FC, PropsWithChildren, useId, useRef, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { colorPalette } from '../../theme/hugo/colors';
import Menu from '../Menu/Menu';

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

const Dropdown: FC<PropsWithChildren<Props>> = ({
  children,
  label,
  open,
  onOpen,
  onClose,
  onClick,
  buttonVariant = 'secondary',
  position = 'left',
  buttonSize = 'small',
  hasIcon = true,
  sx = {},
  buttonProps = {},
}) => {
  const id = useId();
  const isControlled = open !== undefined;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Determine the open state and anchor element based on controlled mode
  const isOpen = isControlled ? open : Boolean(anchorEl);
  const menuId = isOpen ? id : undefined;
  const anchorElement = isControlled ? buttonRef.current : anchorEl;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isControlled) {
      // In controlled mode, notify parent if open state should change
      if (open === false && onOpen) {
        onOpen();
      }
    } else {
      // In uncontrolled mode, manage internal state
      setAnchorEl(event.currentTarget);
    }
    // Call onClick prop if provided
    if (onClick) {
      onClick(event);
    }
  };

  const handleClose = () => {
    if (isControlled) {
      // In controlled mode, notify parent if open state should change
      if (open === true && onClose) {
        onClose();
      }
    } else {
      // In uncontrolled mode, manage internal state
      setAnchorEl(null);
    }
    // Call onClose prop if provided
    if (onClose) {
      onClose();
    }
  };

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: '4px',
        ...sx,
      }}
    >
      <Button
        ref={buttonRef}
        size={buttonSize}
        aria-describedby={menuId}
        variant={buttonVariant}
        onClick={handleClick}
        endIcon={
          hasIcon ? (
            <KeyboardArrowDownIcon
              sx={{
                color: colorPalette.textColors.primaryText,
                transform: !isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              }}
            />
          ) : null
        }
        {...buttonProps}
      >
        {label}
      </Button>
      <Menu
        id={menuId}
        open={isOpen}
        anchorEl={anchorElement}
        onClose={handleClose}
        position={position}
        fixedDimensions={false}
      >
        {children}
      </Menu>
    </Stack>
  );
};

export default Dropdown;
