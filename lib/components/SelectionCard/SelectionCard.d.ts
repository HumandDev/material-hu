import { FC, PropsWithChildren } from 'react';
export type SelectionCardProps = PropsWithChildren<{
    onClick: (param: boolean) => void;
    errorText?: string;
    error?: boolean;
    checked: boolean;
}>;
declare const SelectionCard: FC<SelectionCardProps>;
export default SelectionCard;
