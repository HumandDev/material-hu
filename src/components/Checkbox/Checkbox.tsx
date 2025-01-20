import { FC } from 'react';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import {
  CheckBox as IconCheckbox,
  IndeterminateCheckBoxOutlined as IconIndeterminateCheckBox,
} from '@mui/icons-material';
import { IconSquare } from '@tabler/icons-react';

type CustomProps = {
  label?: string;
  description?: string;
  extraInfo?: string;
  error?: boolean;
};

type OriginalProps = Pick<
  CheckboxProps,
  | 'aria-describedby'
  | 'aria-label'
  | 'checked'
  | 'disabled'
  | 'indeterminate'
  | 'inputRef'
  | 'onChange'
  | 'onClick'
  | 'sx'
>;

type CheckboxInputProps = {
  error: boolean;
  primaryColor: string | undefined;
  hoverBackgroundColor: string | undefined;
} & OriginalProps;

const CheckboxInput = ({
  error,
  primaryColor,
  hoverBackgroundColor,
  ...props
}: CheckboxInputProps) => {
  const { palette } = useTheme();
  return (
    <MuiCheckbox
      size="small"
      icon={<IconSquare stroke={1} />}
      // Doc says that fontSize defaults to medium, but when it's applied the layout changes :shrug:
      checkedIcon={<IconCheckbox fontSize="medium" />}
      indeterminateIcon={<IconIndeterminateCheckBox fontSize="medium" />}
      sx={{
        color: palette.textColors?.neutralTextLighter,
        height: '24px',
        padding: 0,
        ...(error && { color: palette.graphics?.errorText }),
        '&:hover': {
          color: primaryColor,
          // We have have 2 different backgrounds: hover (inside checkbox) and focus (overflows a little)
          ':after': {
            backgroundColor: hoverBackgroundColor,
            borderRadius: 0.5,
            content: "''",
            height: '20px',
            position: 'absolute',
            width: '20px',
          },
        },
        '&:focus-within': {
          color: primaryColor,
          ':after': {
            backgroundColor: hoverBackgroundColor,
            borderRadius: '50%',
            content: "''",
            height: '24px',
            position: 'absolute',
            width: '24px',
          },
        },
        '&.Mui-checked': {
          color: primaryColor,
          '&:hover': {
            color: primaryColor,
            ':after': {
              background: `radial-gradient(circle, transparent 50%, ${hoverBackgroundColor} 40%)`,
            },
          },
          '&:focus-within': {
            color: primaryColor,
            ':after': {
              background: `radial-gradient(circle, transparent 50%, ${hoverBackgroundColor} 40%)`,
            },
          },
        },
        '&.Mui-disabled': {
          color: palette.shadows?.['8dp'],
        },
        // Without these the stacking order would hide the hover and focus style on web and admin
        'input[type="checkbox"]': {
          zIndex: 2,
        },
        '.tabler-icon, .MuiSvgIcon-root': {
          zIndex: 1,
        },
      }}
      {...props}
      disableRipple
    />
  );
};

const Checkbox: FC<CustomProps & OriginalProps> = ({
  description,
  error = false,
  extraInfo,
  label,
  ...props
}) => {
  const { palette } = useTheme();

  const primaryColor = error
    ? palette.graphics?.errorText
    : palette.buttons?.buttonPrimaryEnabled;
  const hoverBackgroundColor = error
    ? palette.hugoBackground?.errorBg
    : palette.border?.primaryBorder;

  // In case only the checkbox is needed, eg. in a table
  if (!label && !description && !extraInfo) {
    return (
      <CheckboxInput
        error={error}
        primaryColor={primaryColor}
        hoverBackgroundColor={hoverBackgroundColor}
        {...props}
      />
    );
  }

  return (
    <Stack sx={{ flexDirection: 'row' }}>
      <CheckboxInput
        error={error}
        primaryColor={primaryColor}
        hoverBackgroundColor={hoverBackgroundColor}
        {...props}
      />
      <Stack
        sx={{
          pl: 0.5,
          ...(props.disabled && {
            '.MuiTypography-root': {
              color: palette.textColors?.neutralTextDisabled,
            },
          }),
        }}
      >
        {label && (
          <Typography
            variant="globalS"
            sx={{
              lineHeight: '24px',
              ...(error && { color: palette.textColors?.errorText }),
            }}
          >
            {label}
          </Typography>
        )}
        {description && (
          <Typography
            variant="globalXS"
            sx={{ color: palette.textColors?.neutralTextLighter }}
          >
            {description}
          </Typography>
        )}
      </Stack>

      {extraInfo && (
        <Typography
          variant="globalXS"
          sx={{
            color: palette.textColors?.neutralTextLighter,
            ml: 3.5,
          }}
        >
          {extraInfo}
        </Typography>
      )}
    </Stack>
  );
};

export default Checkbox;
