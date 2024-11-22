import { FC } from 'react';
import Toggle from '../Toggle/Toggle';
import { Stack, StackProps, Typography, useTheme } from '@mui/material';

export type SwitcherProps = {
  title: string;
  description: string;
  disabled?: boolean;
  value: boolean;
  onChange: (value: boolean) => void;
  sx?: StackProps['sx'];
};
const Switcher: FC<SwitcherProps> = props => {
  const { title, description, disabled = false, value, onChange, sx } = props;

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
        width: '100%',
        justifyContent: 'space-between',
        ...sx,
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
          disabled={disabled}
          checked={!!value}
          onChange={onChange}
        />
      </Stack>
    </Stack>
  );
};

export default Switcher;
