import {
  Radio,
  RadioProps,
  Stack,
  SxProps,
  Typography,
  TypographyProps,
} from '@mui/material';
import { colorPalette } from '../../theme/hugo/colors';

type RadioButtonProps = {
  error?: boolean;
  isActive?: boolean;
  label: string;
  extraData?: string;
  description?: string;
  onClick?: (param: boolean) => void;
  stackSx?: SxProps; // Optional prop for styling the Stack (parent) component
  labelProps?: TypographyProps; // Optional prop for styling the label Typography component
} & Omit<RadioProps, 'label' | 'onClick'>;

const RadioButton: React.FC<RadioButtonProps> = ({
  error = false,
  disabled = false,
  isActive = false,
  label,
  extraData,
  description,
  onClick,
  stackSx = {},
  labelProps = {},
  ...props
}) => {
  let radioBorderColor = colorPalette.textColors.neutralTextLighter;
  if (error) radioBorderColor = colorPalette.textColors.errorText;
  if (disabled)
    radioBorderColor = colorPalette.hugoBackground.neutralBgTerciary;

  const hasHoverEffect = !disabled && !error;

  const handleClick = () => {
    if (onClick) {
      onClick(!isActive);
    }
  };

  return (
    <Stack
      sx={{
        alignItems: 'flex-start',
        flexDirection: 'row',
        gap: '4px',
        ...stackSx,
      }}
    >
      <Radio
        {...props}
        value={isActive}
        disabled={disabled}
        checked={isActive}
        onClick={handleClick}
        sx={{
          padding: 0,
          color: radioBorderColor,
          ...(hasHoverEffect && {
            '&:hover': {
              color: colorPalette.textColors.primaryText,
              backgroundColor: colorPalette.hugoBackground.primaryBgLighter,
            },
          }),
        }}
      />
      <Stack sx={{ gap: '2px' }}>
        <Stack
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '4px',
          }}
        >
          <Typography
            variant="globalS"
            sx={{
              color: error
                ? colorPalette.textColors.errorText
                : colorPalette.textColors.neutralText,
              minWidth: '200px',
            }}
            {...labelProps}
          >
            {label}
          </Typography>
          {extraData && (
            <Typography
              variant="globalXS"
              sx={{ color: colorPalette.textColors.neutralTextLighter }}
            >
              {extraData}
            </Typography>
          )}
        </Stack>
        {description && (
          <Typography
            variant="globalXS"
            sx={{
              color: colorPalette.textColors.neutralTextLighter,
            }}
          >
            {description}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default RadioButton;
