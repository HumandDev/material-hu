import { FC, PropsWithChildren } from 'react';
export type SelectionCardProps = PropsWithChildren<{
    onClick: (param: boolean) => void;
    checked: boolean;
}>;
declare const SelectionCard: FC<SelectionCardProps>;
export default SelectionCard;
