import { FC, PropsWithChildren } from 'react';
import { SkeletonProps } from '@mui/material';
type Props = Pick<SkeletonProps, 'children' | 'sx' | 'width' | 'height' | 'variant'> & {
    isLoading?: boolean;
};
declare const Skeleton: FC<PropsWithChildren<Props>>;
export default Skeleton;
