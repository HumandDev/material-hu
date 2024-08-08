import { Stack, SxProps, Typography } from '@mui/material';
import { colorPalette } from '../theme/hugo/colors';
import { AugmentedVariants } from '../theme/material-hu';

type TitleVariant = 'XL' | 'L' | 'M' | 'S';

const adjustedCopetin: Record<TitleVariant, AugmentedVariants> = {
  XL: 'globalS',
  L: 'globalXS',
  M: 'globalXXS',
  S: 'globalXXS',
};

const adjustedDescription: Record<TitleVariant, AugmentedVariants> = {
  XL: 'globalM',
  L: 'globalS',
  M: 'globalXS',
  S: 'globalXS',
};

type Props = {
  copetin?: string;
  description?: string;
  title: string;
  centered?: boolean;
  variant: TitleVariant;
  sx?: SxProps;
};

const Title = ({
  centered = false,
  copetin = '',
  description = '',
  title,
  variant,
  sx = {},
}: Props) => {
  return (
    <Stack
      sx={{
        textAlign: centered ? 'center' : 'left',
        ...sx,
      }}
    >
      {copetin && (
        <Typography
          variant={adjustedCopetin[variant]}
          sx={{
            color: colorPalette.textColors.neutralTextLighter,
          }}
        >
          {copetin}
        </Typography>
      )}
      <Typography
        variant={`global${variant}`}
        sx={{
          color: colorPalette.textColors.neutralText,
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          variant={adjustedDescription[variant]}
          sx={{
            color: colorPalette.textColors.neutralTextLighter,
          }}
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
};

export default Title;
