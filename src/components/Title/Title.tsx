import { Stack, StackProps, Typography } from '@mui/material';
import Tooltip from '../Tooltip/Tooltip';
import { colorPalette } from '../../theme/hugo/colors';
import { IconInfoCircle } from '@tabler/icons-react';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography/Typography';

type TitleVariant = 'XL' | 'L' | 'M' | 'S';

const tooltipSize = {
  XL: {
    copetin: 16,
    description: 18,
  },
  L: {
    copetin: 14,
    description: 16,
  },
  M: {
    copetin: 12,
    description: 14,
  },
  S: {
    copetin: 12,
    description: 14,
  },
};

const adjustedCopetin: Record<
  TitleVariant,
  keyof TypographyPropsVariantOverrides
> = {
  XL: 'globalS',
  L: 'globalXS',
  M: 'globalXXS',
  S: 'globalXXS',
};

const adjustedDescription: Record<
  TitleVariant,
  keyof TypographyPropsVariantOverrides
> = {
  XL: 'globalM',
  L: 'globalS',
  M: 'globalXS',
  S: 'globalXS',
};

export type TitleProps = {
  copetin?: string;
  copetinTooltip?: string;
  description?: string;
  descriptionTooltip?: string;
  title: string;
  centered?: boolean;
  variant: TitleVariant;
  withEllipsis?: boolean;
  sx?: StackProps['sx'];
};

export const Title = ({
  centered = false,
  copetin = '',
  copetinTooltip = '',
  description = '',
  descriptionTooltip = '',
  title,
  variant,
  withEllipsis,
  sx = {},
}: TitleProps) => {
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
            alignItems: 'center',
            gap: 0.5,
            ...(withEllipsis && {
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }),
          }}
        >
          {copetin}
          {copetinTooltip && (
            <Tooltip
              direction="top"
              description={copetinTooltip}
            >
              <IconInfoCircle
                size={tooltipSize[variant].copetin}
                color={colorPalette.textColors.neutralTextLighter}
              />
            </Tooltip>
          )}
        </Typography>
      )}
      <Typography
        variant={`global${variant}`}
        sx={{
          color: colorPalette.textColors.neutralText,
          ...(withEllipsis && {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }),
        }}
        fontWeight={'fontWeightSemiBold'}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          variant={adjustedDescription[variant]}
          sx={{
            color: colorPalette.textColors.neutralTextLighter,
            alignItems: 'center',
            gap: 0.5,
            ...(withEllipsis && {
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
            }),
          }}
        >
          {description}
          {descriptionTooltip && (
            <Tooltip
              direction="bottom"
              description={descriptionTooltip}
            >
              <IconInfoCircle
                size={tooltipSize[variant].description}
                color={colorPalette.textColors.neutralTextLighter}
              />
            </Tooltip>
          )}
        </Typography>
      )}
    </Stack>
  );
};

export default Title;
