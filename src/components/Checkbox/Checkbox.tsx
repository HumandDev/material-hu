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
  label: string;
  description: string;
  extraInfo?: string;
  error?: boolean;
};

const Checkbox: FC<CustomProps & CheckboxProps> = ({
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

  return (
    <Stack sx={{ flexDirection: 'row' }}>
      <MuiCheckbox
        size="small"
        icon={<IconSquare stroke={1} />}
        // Doc says that fontSize defaults to medium, but when it's applied the layout changes :shrug:
        checkedIcon={<IconCheckbox fontSize="medium" />}
        indeterminateIcon={<IconIndeterminateCheckBox fontSize="medium" />}
        sx={{
          color: palette.textColors?.neutralTextLighter,
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
              zIndex: '-1',
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
              zIndex: '-1',
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
        }}
        {...props}
        disableRipple
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
        <Typography
          variant="globalS"
          sx={{
            ...(error && { color: palette.textColors?.errorText }),
          }}
        >
          {label}
        </Typography>
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
            ml: 0.5,
          }}
        >
          {extraInfo}
        </Typography>
      )}
    </Stack>
  );
};

export default Checkbox;
