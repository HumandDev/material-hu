import {
  Button,
  ButtonProps,
  Popover,
  PopoverOrigin,
  Stack,
  SxProps,
} from '@mui/material';
import { FC, PropsWithChildren, useId, useRef, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { colorPalette } from '../../theme/hugo/colors';

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
  popoverSx?: SxProps;
  buttonProps?: ButtonProps;
};

const positionMap = {
  left: {
    anchorOrigin: {
      vertical: 'bottom' as const,
      horizontal: 'left' as const,
    },
    transformOrigin: {
      vertical: 'top' as const,
      horizontal: 'left' as const,
    },
  },
  right: {
    anchorOrigin: {
      vertical: 'bottom' as const,
      horizontal: 'right' as const,
    },
    transformOrigin: {
      vertical: 'top' as const,
      horizontal: 'right' as const,
    },
  },
  center: {
    anchorOrigin: {
      vertical: 'bottom' as const,
      horizontal: 'center' as const,
    },
    transformOrigin: {
      vertical: 'top' as const,
      horizontal: 'center' as const,
    },
  },
};

const Dropdown: FC<PropsWithChildren<Props>> = ({
  children,
  label,
  open,
  onOpen,
  onClose,
  onClick,
  buttonType = 'secondary',
  position = 'left',
  buttonSize = 'medium',
  hasIcon = true,
  sx = {},
  popoverSx = {},
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

  const buttonVariant = buttonType === 'secondary' ? 'contained' : 'text';

  const containedButtonSx = {
    backgroundColor: colorPalette.hugoBackground.neutralBgTerciary,
    border: `1px solid ${colorPalette.border.primaryBorder}`,
    '&:hover': {
      backgroundColor: colorPalette.buttons.buttonSecondaryHover,
    },
  };

  const positionValues = positionMap[position];
  const anchorOrigin: PopoverOrigin = positionValues.anchorOrigin;
  const transformOrigin: PopoverOrigin = positionValues.transformOrigin;

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
        sx={{
          color: colorPalette.textColors.primaryText,
          ...(buttonVariant === 'contained' && containedButtonSx),
        }}
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
      <Popover
        id={menuId}
        open={isOpen}
        anchorEl={anchorElement}
        onClose={handleClose}
        sx={{
          mt: 1,
          boxShadow: `-1px 8px 16px 0px ${colorPalette.shadows['8dp']}`,
          ...popoverSx,
        }}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        <Stack>{children}</Stack>
      </Popover>
    </Stack>
  );
};

export default Dropdown;
