import {
  Button,
  ButtonProps,
  Popover,
  PopoverOrigin,
  Stack,
  SxProps,
} from '@mui/material';
import { FC, PropsWithChildren, useId, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { colorPalette } from '../../theme/hugo/colors';

type Props = {
  label: string;
  buttonType?: 'secondary' | 'tertiary';
  buttonSize?: 'small' | 'medium' | 'large';
  position?: 'left' | 'right' | 'center';
  hasIcon?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClose?: () => void;
  containerSx?: SxProps;
  popoverSx?: SxProps;
  buttonProps: ButtonProps;
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
  onClick,
  onClose,
  buttonType = 'secondary',
  position = 'left',
  buttonSize = 'medium',
  hasIcon = true,
  containerSx = {},
  popoverSx = {},
  buttonProps = {},
}) => {
  const id = useId();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);
  const menuId = open ? id : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    onClick && onClick(event);
  };

  const handleClose = () => {
    setAnchorEl(null);
    onClose && onClose();
  };

  const buttonVariant = buttonType === 'secondary' ? 'contained' : 'text';

  const containedButtonSx = {
    color: colorPalette.textColors.primaryText,
    backgroundColor: colorPalette.hugoBackground.neutralBgTerciary,
    border: `1px solid ${colorPalette.border.primaryBorder}`,
    '&:hover': {
      backgroundColor: colorPalette.buttons.buttonSecondaryHover,
    },
  };

  const textButtonSx = {
    color: colorPalette.textColors.primaryText,
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
        ...containerSx,
      }}
    >
      <Button
        size={buttonSize}
        aria-describedby={menuId}
        variant={buttonVariant}
        onClick={handleClick}
        sx={{
          ...(buttonVariant === 'contained' ? containedButtonSx : textButtonSx),
        }}
        endIcon={
          hasIcon ? (
            <KeyboardArrowDownIcon
              sx={{
                color: colorPalette.textColors.primaryText,
                transform: !open ? 'rotate(0deg)' : 'rotate(180deg)',
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
        open={open}
        anchorEl={anchorEl}
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
