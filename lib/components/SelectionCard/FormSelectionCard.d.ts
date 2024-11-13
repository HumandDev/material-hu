import { FC, PropsWithChildren } from 'react';
import { ControllerProps } from 'react-hook-form';
import { SelectionCardProps } from './SelectionCard';
type FormSelectionCardProps = PropsWithChildren<{
    name: string;
    rules?: ControllerProps['rules'];
    isOnlyOption?: boolean;
    sx?: SelectionCardProps['sx'];
}>;
declare const FormSelectionCard: FC<FormSelectionCardProps>;
export default FormSelectionCard;
