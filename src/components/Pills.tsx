import { Chip, ChipProps, Palette, Typography, useTheme } from '@mui/material';
import {
  AnnouncementOutlined as AnnouncementOutlinedIcon,
  Check as CheckIcon,
  ErrorOutline as ErrorIcon,
  InfoOutlined as InfoIcon,
  TipsAndUpdatesOutlined as TipsAndUpdatesOutlinedIcon,
  WarningAmberRounded as WarningIcon,
} from '@mui/icons-material';

export type PillsProps = ChipProps & {
  type:
    | 'default'
    | 'error'
    | 'success'
    | 'warning'
    | 'info'
    | 'highlight'
    | 'neutral'
    | 'disabled';
  size: 'small' | 'medium';
  label: string;
  hasIcon?: boolean;
};

type PillTypeProps = {
  backgroundColor: string;
  borderColor: string;
  fontColor: string;
  icon?: React.ElementType;
};

const getPillProps = (type: string, palette: Palette): PillTypeProps => {
  switch (type) {
    case 'success':
      return {
        icon: CheckIcon,
        backgroundColor: palette.base?.green[100]!,
        borderColor: palette.base?.green[200]!,
        fontColor: palette.base?.green[800]!,
      };

    case 'warning':
      return {
        icon: WarningIcon,
        backgroundColor: palette.base?.yellow[100]!,
        borderColor: palette.base?.yellow[200]!,
        fontColor: palette.base?.yellow[800]!,
      };

    case 'info':
      return {
        icon: InfoIcon,
        backgroundColor: palette.base?.lightBlue[100]!,
        borderColor: palette.base?.lightBlue[200]!,
        fontColor: palette.base?.lightBlue[800]!,
      };

    case 'highlight':
      return {
        icon: TipsAndUpdatesOutlinedIcon,
        backgroundColor: palette.base?.lilac[100]!,
        borderColor: palette.base?.lilac[200]!,
        fontColor: palette.base?.lilac[800]!,
      };
    case 'neutral':
      return {
        icon: AnnouncementOutlinedIcon,
        backgroundColor: palette.base?.white!,
        borderColor: palette.base?.grey[300]!,
        fontColor: palette.base?.grey[600]!,
      };
    case 'disabled':
      return {
        backgroundColor: palette.base?.grey[200]!,
        borderColor: palette.base?.grey[300]!,
        fontColor: palette.base?.grey[600]!,
      };
    case 'error':
    default:
      return {
        icon: ErrorIcon,
        backgroundColor: palette.base?.red[100]!,
        borderColor: palette.base?.red[200]!,
        fontColor: palette.base?.red[800]!,
      };
  }
};

const Pills = ({
  label,
  type = 'default',
  size = 'medium',
  hasIcon = true,
  sx,
}: PillsProps) => {
  const theme = useTheme();
  const pillProps = getPillProps(type, theme.palette);
  const isSmall = size === 'small';

  return (
    <Chip
      label={
        <Typography // variant: 'globalXS', fontWeight: 'fontWeightSemiBold',
          sx={{
            margin: 0,
            padding: 0,
            lineHeight: 'normal',
            color: pillProps.fontColor,
            fontSize: isSmall ? '12px' : '14px',
            fontWeight: 500,
            ...sx,
          }}
        >
          {label}
        </Typography>
      }
      size={size}
      icon={
        hasIcon && pillProps.icon ? (
          <pillProps.icon
            sx={{
              color: `${pillProps.fontColor} !important`,
              marginLeft: '0 !important',
              marginRight: '4px !important',
              fontSize: '14px !important',
            }}
          />
        ) : undefined
      }
      sx={{
        border: `1px solid ${pillProps.borderColor}`,
        backgroundColor: `${pillProps.backgroundColor}`,
        borderRadius: 2,
        px: isSmall ? 1 : 1.5,
        py: isSmall ? 0.5 : 1,
        '& .MuiChip-label': {
          paddingLeft: 0,
          paddingRight: 0,
        },
      }}
    />
  );
};

export default Pills;
