import {
  Chip as MuiChip,
  ChipProps as MuiChipProps,
  Typography,
  useTheme,
} from '@mui/material';
import { IconX, IconCheck } from '@tabler/icons-react';

export type ChipProps = Pick<
  MuiChipProps,
  'size' | 'disabled' | 'onDelete' | 'onClick'
> & {
  label: string;
  isSelected?: boolean;
};

const Chip = ({
  label,
  size = 'medium',
  disabled,
  onDelete,
  isSelected,
  onClick,
}: ChipProps) => {
  const theme = useTheme();
  const isSmall = size === 'small';

  const textColor = disabled
    ? theme.palette.textColors?.neutralTextDisabled
    : theme.palette.textColors?.primaryText;
  const backgroundColor = isSelected
    ? theme.palette.border?.primaryBorder
    : theme.palette.hugoBackground?.primaryBgLighter;

  const iconStyle = {
    width: '16px',
    height: '16px',
    color: textColor,
  };

  return (
    <MuiChip
      label={
        <Typography
          variant={isSmall ? 'globalXXS' : 'globalXS'}
          fontWeight="fontWeightSemiBold"
          color={textColor}
        >
          {label}
        </Typography>
      }
      size={size}
      onDelete={onDelete}
      onClick={onClick}
      disabled={disabled}
      icon={isSelected ? <IconCheck style={iconStyle} /> : undefined}
      sx={{
        borderRadius: 1,
        borderColor: disabled
          ? theme.palette.border?.neutralBorder
          : theme.palette.border?.primaryBorder,
        borderStyle: 'solid',
        borderWidth: '1px',
        backgroundColor: disabled
          ? theme.palette.hugoBackground?.neutralBgTransparent
          : backgroundColor,
        ':hover': {
          backgroundColor: theme.palette.border?.primaryBorder,
        },
        ':focus-visible': {
          backgroundColor: theme.palette.border?.primaryBorder,
          borderColor: textColor,
          borderWidth: '2px',
        },
        '.MuiChip-label': {
          px: 0.5,
          verticalAlign: 'sub',
        },
        '.MuiChip-deleteIcon': {
          m: 0,
          pr: 0.5,
        },
        '.MuiChip-icon': {
          m: 0,
          pl: 0.5,
        },
        px: isSmall ? 0.5 : 1,
      }}
      deleteIcon={<IconX style={iconStyle} />}
    />
  );
};

export default Chip;
