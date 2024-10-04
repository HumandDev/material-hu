import { FC, PropsWithChildren } from 'react';
import { ControllerProps } from 'react-hook-form';
type FormSelectionCardProps = PropsWithChildren<{
    name: string;
    rules?: ControllerProps['rules'];
    isOnlyOption?: boolean;
}>;
declare const FormSelectionCard: FC<FormSelectionCardProps>;
export default FormSelectionCard;
