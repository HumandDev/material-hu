import { FC, PropsWithChildren } from 'react';
import { SkeletonProps } from '@mui/material';
type Props = SkeletonProps & {
    isLoading: boolean;
};
declare const Skeleton: FC<PropsWithChildren<Props>>;
export default Skeleton;
