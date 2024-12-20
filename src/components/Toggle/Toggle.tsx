import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
  useTheme,
} from '@mui/material';
import { colorPalette } from '../../theme/hugo/colors';

export type ToggleProps = Pick<MuiSwitchProps, 'disabled' | 'checked'> & {
  onChange: (value: boolean) => void;
};

const Toggle = ({ disabled, checked, onChange }: ToggleProps) => {
  const { hugoBackground, buttons, border, ilustrations } = colorPalette;
  const theme = useTheme();
  return (
    <MuiSwitch
      disableRipple
      disabled={disabled}
      checked={checked}
      onChange={() => onChange(!checked)}
      sx={{
        width: 52,
        height: 32,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          height: 28,
          top: 2,
          left: -6,
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&.Mui-checked': {
            transform: 'translateX(20px)',
          },
          '&.Mui-checked + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: buttons.buttonPrimaryEnabled,
          },
          '&.Mui-checked:hover + .MuiSwitch-track': {
            backgroundColor: buttons.buttonPrimaryHover,
          },
          '&:not(.Mui-checked) + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: border.neutralBorder,
          },
          '&:not(.Mui-checked):hover + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: ilustrations.neutralIlus,
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color: ilustrations.neutralIlus,
          },
          '&.Mui-disabled  + .MuiSwitch-track': {
            backgroundColor: hugoBackground.neutralBgSecondary,
          },
        },
        '& .MuiSwitch-track': {
          borderRadius: 20,
          transition: theme.transitions.create('background-color', {
            duration: 200,
          }),
        },
        '& .MuiSwitch-thumb': {
          width: 26,
          height: 26,
          color: '#FFFFFF',
          boxShadow: 'none',
        },
      }}
    />
  );
};

export default Toggle;
