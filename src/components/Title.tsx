import { Stack, SxProps, Typography } from '@mui/material';
import { colorPalette } from '../theme/hugo/colors';

type TitleVariant =
  | 'globalXXS'
  | 'globalXS'
  | 'globalS'
  | 'globalM'
  | 'globalL'
  | 'globalXL'
  | 'globalXXL';

const adjustedCopetin: Record<TitleVariant, TitleVariant> = {
  globalXXS: 'globalXXS',
  globalXS: 'globalXXS',
  globalS: 'globalXXS',
  globalM: 'globalXXS',
  globalL: 'globalXS',
  globalXL: 'globalS',
  globalXXL: 'globalM',
};

const adjustedDescription: Record<TitleVariant, TitleVariant> = {
  globalXXS: 'globalXXS',
  globalXS: 'globalXXS',
  globalS: 'globalXS',
  globalM: 'globalXS',
  globalL: 'globalS',
  globalXL: 'globalM',
  globalXXL: 'globalM', // M o L?
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
        variant={variant}
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
