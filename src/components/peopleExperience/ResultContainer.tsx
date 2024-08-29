import { ReactNode } from 'react';
import { Stack, StackProps, Typography } from '@mui/material';
import { fadeIn } from '../../utils/animations';

type ResultContainerProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  actions?: ReactNode;
  sx?: StackProps['sx'];
  animateOnEnter?: boolean;
};

const ResultContainer = ({
  title,
  children,
  subtitle,
  actions,
  sx,
  animateOnEnter = true,
}: ResultContainerProps) => (
  <Stack
    sx={{
      p: 4,
      gap: 4,
      ...(animateOnEnter && {
        animation: `${fadeIn} 0.5s ease-in-out`,
      }),
      ...sx,
    }}
  >
    <Stack
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Stack>
        <Typography
          variant="h5"
          component="h3"
        >
          {title}
        </Typography>
        <Typography component="h4">{subtitle}</Typography>
      </Stack>
      {actions}
    </Stack>
    {children}
  </Stack>
);

export default ResultContainer;
