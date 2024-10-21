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
    <div>
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
      <Stack
        sx={{
          width: 100,
          heigth: 50,
          p: 2,
          my: 2,
          backgroundColor: colorPalette.primary.lightest,
        }}
      >
        <Typography variant="globalXS">Lightest - 0.5</Typography>
      </Stack>
      <Stack
        sx={{
          width: 100,
          heigth: 50,
          p: 2,
          mb: 2,
          backgroundColor: colorPalette.primary.light,
        }}
      >
        <Typography variant="globalXS">Light - 0.7</Typography>
      </Stack>
      <Stack
        sx={{
          width: 100,
          heigth: 50,
          p: 2,
          mb: 2,
          backgroundColor: colorPalette.primary.main,
        }}
      >
        <Typography variant="globalXS">Main</Typography>
      </Stack>
      <Stack
        sx={{
          width: 100,
          heigth: 50,
          p: 2,
          mb: 2,
          backgroundColor: colorPalette.primary.dark,
        }}
      >
        <Typography
          variant="globalXS"
          sx={{ color: 'white' }}
        >
          Dark - 1.2
        </Typography>
      </Stack>
      <Stack
        sx={{
          width: 100,
          heigth: 50,
          p: 2,
          mb: 2,
          backgroundColor: colorPalette.primary.darkest,
        }}
      >
        <Typography
          variant="globalXS"
          sx={{ color: 'white' }}
        >
          Darkest - 1.5
        </Typography>
      </Stack>
    </div>
  );
};

export default Tooltip;
