import { FC, PropsWithChildren } from 'react';
import { Skeleton as MuiSkeleton, SkeletonProps } from '@mui/material';

type Props = SkeletonProps & {
  isLoading: boolean;
};

const Skeleton: FC<PropsWithChildren<Props>> = props => {
  const { children, isLoading, ...skeletonProps } = props;
  return isLoading ? (
    <MuiSkeleton {...skeletonProps}>{children}</MuiSkeleton>
  ) : (
    <>{children}</>
  );
};

export default Skeleton;
