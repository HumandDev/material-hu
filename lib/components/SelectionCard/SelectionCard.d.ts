import { FC, PropsWithChildren } from 'react';
import { CardContainerProps } from '../CardContainer/CardContainer';
export type SelectionCardProps = PropsWithChildren<{
    onClick: (param: boolean) => void;
    checked: boolean;
    sx?: CardContainerProps['sx'];
}>;
declare const SelectionCard: FC<SelectionCardProps>;
export default SelectionCard;
