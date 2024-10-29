import { colorPalette } from '../../theme/hugo/colors';
import { Tooltip as MuiTooltip, Stack, Typography } from '@mui/material';

type TooltipBodyProps = {
  title?: string;
  description?: string;
};

export type TooltipProps = TooltipBodyProps & {
  direction?: 'top' | 'left' | 'right' | 'bottom';
  children: any;
};

const TooltipBody = ({ title, description }: TooltipBodyProps) => {
  return (
    <Stack sx={{ p: 1 }}>
      <Typography
        variant="globalS"
        sx={{ fontWeight: 'semibold', color: 'white' }}
      >
        {title}
      </Typography>
      <Typography
        variant="globalXS"
        sx={{ color: 'white' }}
      >
        {description}
      </Typography>
    </Stack>
  );
};

const Tooltip = ({ children, ...props }: TooltipProps) => {
  const { title = '', description = '', direction = 'top' } = props;
  return (
    <MuiTooltip
      arrow
      placement={direction}
      sx={{
        maxWidth: '312px',
        minWidth: '150px',
      }}
      PopperProps={{
        sx: {
          '.MuiTooltip-tooltip': {
            background: colorPalette.textColors.neutralText,
          },
          '.MuiTooltip-arrow': {
            color: colorPalette.textColors.neutralText,
          },
        },
      }}
      title={
        <TooltipBody
          title={title}
          description={description}
        />
      }
    >
      {children}
    </MuiTooltip>
  );
};

export default Tooltip;
