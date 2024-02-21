import { FC } from 'react';
import { ErrorCode } from 'react-dropzone';
export declare enum FormDropTypes {
    IMAGE = "image",
    VIDEO = "video"
}
export type FormDropProps = {
    name: string;
    rules?: any;
    maxSize?: number;
    recommendedWidth: number;
    recommendedHeight: number;
    getErrorMessage?: (errorCode: ErrorCode, maxSize: number) => string;
    altLabel?: string;
    deleteLabel?: string;
    helpTextLabel?: string;
    linkLabel?: string;
    label?: string;
    accept?: Record<string, string[]>;
    type?: FormDropTypes;
};
export declare const FormDrop: FC<FormDropProps>;
export default FormDrop;
