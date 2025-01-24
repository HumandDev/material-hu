import { FC } from 'react';
export type PaginationChangerProps = {
    loading?: boolean;
    limit?: number;
    limitOptions?: number[];
    onChange?: (newLimit: number) => void;
    disabled?: boolean;
};
export declare const PaginationChanger: FC<PaginationChangerProps>;
export default PaginationChanger;
