import { FC, PropsWithChildren, ReactNode } from 'react';
import { SkeletonProps } from '@mui/material';
type Props = SkeletonProps & {
    isLoading?: boolean;
    children?: ReactNode;
};
declare const Skeleton: FC<PropsWithChildren<Props>>;
export default Skeleton;
