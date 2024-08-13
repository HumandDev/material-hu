import { FC, PropsWithChildren, ReactNode } from 'react';
import { Skeleton as MuiSkeleton, SkeletonProps } from '@mui/material';

type Props = SkeletonProps & {
  isLoading?: boolean;
  children?: ReactNode;
};

const Skeleton: FC<PropsWithChildren<Props>> = props => {
  const { children = undefined, isLoading = true, ...skeletonProps } = props;
  return isLoading || !children ? (
    <MuiSkeleton
      {...skeletonProps}
      animation={'wave' || skeletonProps.animation}
    >
      {children}
    </MuiSkeleton>
  ) : (
    <>{children}</>
  );
};

export default Skeleton;
