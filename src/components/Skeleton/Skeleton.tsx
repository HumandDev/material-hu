import { FC, PropsWithChildren, ReactNode } from 'react';
import { Skeleton as MuiSkeleton, SkeletonProps } from '@mui/material';

type Props = SkeletonProps & {
  isLoading?: boolean;
  children?: ReactNode;
};

const Skeleton: FC<PropsWithChildren<Props>> = ({
  children = undefined,
  isLoading = true,
  animation = 'wave',
  ...skeletonProps
}) => {
  return isLoading || !children ? (
    <MuiSkeleton
      {...skeletonProps}
      animation={animation}
    />
  ) : (
    <>{children}</>
  );
};

export default Skeleton;
