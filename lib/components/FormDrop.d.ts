import { FC } from 'react';
import { ErrorCode } from 'react-dropzone';
export declare enum FormDropTypes {
    IMAGE = "image",
    VIDEO = "video",
    PDF = "pdf"
}
export type FormDropValue = {
    url?: string | null;
    file?: File;
};
export type FormDropContext = {
    maxSize: number;
    recommendedHeight: number;
    recommendedWidth: number;
    type: FormDropTypes;
    value: FormDropValue;
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
    sizeLabel?: (context: FormDropContext) => string;
    openLabel?: (context: FormDropContext) => string;
    accept?: Record<string, string[]>;
    type?: FormDropTypes;
    onDrop?: (drop: FormDropValue) => void;
    withCrop?: boolean;
    cancelLabel?: string;
    saveLabel?: string;
    cropLabel?: string;
    sliderLabel?: string;
};
export declare const FormDrop: FC<FormDropProps>;
export default FormDrop;
