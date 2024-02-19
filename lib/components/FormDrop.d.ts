import { FC } from 'react';
import { ErrorCode } from 'react-dropzone';
export declare enum FormDropTypes {
    IMAGE = "image",
    VIDEO = "video"
}
export type FormDropContext = {
    maxSize: number;
    recommendedHeight: number;
    recommendedWidth: number;
    type: FormDropTypes;
};
export type FormDropProps = {
    name: string;
    rules?: any;
    maxSize?: number;
    recommendedWidth?: number;
    recommendedHeight?: number;
    getErrorMessage?: (errorCode: ErrorCode, context: FormDropContext) => string;
    altLabel?: (context: FormDropContext) => string;
    deleteLabel?: (context: FormDropContext) => string;
    helpTextLabel?: (context: FormDropContext) => string;
    linkLabel?: (context: FormDropContext) => string;
    label?: (context: FormDropContext) => string;
    accept?: Record<string, string[]>;
    type?: FormDropTypes;
};
export declare const FormDrop: FC<FormDropProps>;
export default FormDrop;
