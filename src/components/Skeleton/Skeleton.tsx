import { FC, PropsWithChildren } from 'react';
import { Skeleton as MuiSkeleton, SkeletonProps } from '@mui/material';

const getBorderRadius = (variant: SkeletonProps['variant']) => {
  // This method repeats MUI's internal code for the 'circular' variant but is necessary to set a diferent border radius default
  switch (variant) {
    case 'circular':
      return '50%';
    case 'rectangular':
      return undefined;
    default:
      return 0.5;
  }
};

type Props = Pick<
  SkeletonProps,
  'children' | 'sx' | 'width' | 'height' | 'variant'
> & {
  isLoading?: boolean;
};

const Skeleton: FC<PropsWithChildren<Props>> = ({
  isLoading = true,
  variant = 'rounded', // Safer default that the MUI default 'text' which is not very useful beyond single lines of text (see variant definition at https://mui.com/material-ui/react-skeleton/#variants)
  sx,
  ...skeletonProps
}) => {
  return isLoading ? (
    <MuiSkeleton
      animation={'wave'}
      sx={{
        ...sx,
        borderRadius: getBorderRadius(variant),
      }}
      variant={variant}
      {...skeletonProps}
    ></MuiSkeleton>
  ) : (
    <>{skeletonProps?.children}</>
  );
};

export default Skeleton;
