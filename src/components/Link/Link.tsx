import {
  LinkProps,
  Link as MuiLink,
  Stack,
  SxProps,
  useTheme,
} from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { colorPalette } from '../../theme/hugo/colors';

type Props = {
  hasIcon?: boolean;
  iconSize?: number;
  disabled?: boolean;
  sx?: SxProps;
} & Omit<LinkProps, 'sx'>;

const Link: FC<PropsWithChildren<Props>> = ({
  children,
  hasIcon = false,
  iconSize = 16,
  disabled = false,
  sx = {},
  ...props
}) => {
  const theme = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: '2px',
        ...sx,
      }}
    >
      <MuiLink
        color={
          disabled ? colorPalette.textColors.neutralTextDisabled : 'primary'
        }
        sx={{
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
        onClick={e => handleClick(e)}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </MuiLink>
      {hasIcon && (
        <IconArrowNarrowRight
          color={
            disabled
              ? colorPalette.textColors.neutralTextDisabled
              : theme.palette.primary.main
          }
          size={iconSize}
        />
      )}
    </Stack>
  );
};

export default Link;
