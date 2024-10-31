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
  stackSx?: SxProps;
} & LinkProps;

const Link: FC<PropsWithChildren<Props>> = ({
  children,
  hasIcon = false,
  iconSize = 16,
  disabled = false,
  stackSx = {},
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
        ...stackSx,
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
        {...props}
      >
        {children}
      </MuiLink>
      {hasIcon && (
        <IconArrowNarrowRight
          color={theme.palette.primary.main}
          size={iconSize}
        />
      )}
    </Stack>
  );
};

export default Link;
