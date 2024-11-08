import { FC } from 'react';
import Toggle, { ChipProps } from '../Toggle/Toggle';
import { Stack, Typography, useTheme } from '@mui/material';

type SwitcherProps = {
  title: string;
  description: string;
  disabled?: boolean;
  toggleProps?: ChipProps;
};
const Switcher: FC<SwitcherProps> = props => {
  const {
    title,
    description,
    disabled: disabledProp = false,
    toggleProps,
  } = props;

  const disabled = disabledProp || toggleProps?.disabled;
  const theme = useTheme();
  const textColors = theme.palette.textColors;
  const colors = {
    title: disabled ? textColors?.neutralTextDisabled : textColors?.neutralText,
    description: disabled
      ? textColors?.neutralTextDisabled
      : textColors?.neutralTextLighter,
  };

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        width: '292px',
        justifyContent: 'space-between',
      }}
    >
      <Stack>
        <Typography
          variant="globalS"
          color={colors.title}
        >
          {title}
        </Typography>
        <Typography
          variant="globalXS"
          color={colors.description}
        >
          {description}
        </Typography>
      </Stack>
      <Stack sx={{ justifyContent: 'center' }}>
        <Toggle
          {...toggleProps}
          disabled={disabled}
        />
      </Stack>
    </Stack>
  );
};

export default Switcher;
